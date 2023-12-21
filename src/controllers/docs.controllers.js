const docsServices = require("../services/docs.services")
const insumosServices = require("../services/insumos.service")
const customError = require("../utils/customError")

const createAndAddDoc = async (req, res) => {
    try {
        const { id, doc: { nombre, vigencia, documento, metadatos: { numero_de_cliente, numero_de_credito, numero_de_escritura, fecha_de_escritura, fecha_de_emision, folio_del_documento, entidad_federativa_que_lo_emite, empresa_o_unidad_de_valuacion_que_lo_elabora, numero_de_cuenta, fecha_de_estado_de_cuenta, nombre_de_banco_emisor, fecha_de_vigencia } } } = req.body
        if (!id) {
            throw new customError({ name: 'invalidId', message: 'id can not be undefined', id })
        }
        if (!nombre) {
            throw new customError({ name: 'invalidData', message: 'nombre can not be undefined', nombre })
        }
        if (!vigencia) {
            throw new customError({ name: 'invalidData', message: 'vigencia can not be undefined', vigencia })
        }
        if (isNaN(new Date(vigencia).getMilliseconds())) {
            throw new customError({ name: 'invalidData', message: 'vigencia tiene un formato errono.', vigencia })
        }
        if (!documento) {
            throw new customError({ name: 'invalidData', message: 'documento can not be undefined', documento })
        }
        // aqui por cosas de la base de datos, tengo que insertar manualmente la etapa del documento, para esto 
        // tenemos que calcular la etapa con el nombre del documento que se envia.
        // (esto esta sujeto a cambios, de momento esta hardcodeado pero se pueden integrar seeds a una tabla 
        // para enlazar un nombre de documento con una etapa y usar el nombre como llave primaria y en la tabla de docs
        //  usar el nombre como llave foranea, asi cuando se obtenga un doc, el nombre de este hara referencia a una etapa.)

        let etapa
        let isRequired
        const etapa1 = ["titulo_de_propiedad", "predial_otro_propietario", "aviso_clg", "avaluo_propio", "testimonio_poder_tuhabi"]
        const etapa2 = ["boleta_predial", "boleta_agua", "alineamiento_y_numero_oficial", "solicitud_clg", "constancia_de_uso_de_suelo", "avaluo_bancario", "constitucion_regimen_de_propiedad_en_condominio", "boleta_de_ingreso_al_rppyc_constancia", "reglamento_condominos", "certificado_zonificacion", "estado_de_cuenta_vendedor"]
        const etapa3 = ["certificado_libertad_de_gravamen", "sucesion_testamentaria", "derecho_de_tanto"]
        if (etapa1.includes(nombre)) {
            etapa = "1"
        } else if (etapa2.includes(nombre)) {
            etapa = "2"
        } else if (etapa3.includes(nombre)) {
            etapa = "3"
        } else if (nombre === "doc_excepcion") {
            etapa = "23"
        } else {
            let customError = new Error('El nombre de tu documento no parece tener asociado una etapa, comunicate con kosmos.')
            throw customError
        }
        const obligatorios = ["titulo_de_propiedad", "boleta_predial", "boleta_agua", "certificado_libertad_de_gravamen", "constancia_de_uso_de_suelo", "avalúo_bancario", "certificado_zonificación", "testimonio_poder_tuhabi", "estado_de_cuenta_vendedor"]
        if (obligatorios.includes(nombre)) {
            isRequired = true
        } else {
            isRequired = false
        }
        // ¡¡SOLO SE PODRA INSERTAR DOCUMENTOS SI SE CUMPLEN LAS SIGUIENTES CONDICIONES!!.
        //si el documento es nuevo se permite cargar documentos y se actualiza como no nuevo, caso contrario, no te permite cargar docs
        //si el estatus del insumo es igual a uno de los estatus aceptados para inserccion
        //si la etapa del insumo es 3.1 ya que en esta etapa se permite insertar docs debido a vencimiento fuera de las etapas1,2,3
        let isNew=await insumosServices.getIsNewStatus(id)
        let currentEstatus= await insumosServices.getEstatusById(id)
        let correctEstatus=currentEstatus=="Espera de inserción 2 o 3"||currentEstatus=="Solicitud de complemento"||currentEstatus=="Vivienda lista para notario"
        let isInEtapa3dot1=await insumosServices.getEtapaById(id)=='3.1'
        if (isNew||correctEstatus||isInEtapa3dot1) {
             // aqui ya enviamos la informacion al servicio encargado de crear el documento
        const doc = await docsServices.addDoc(id, { nombre, vigencia, etapa, obligatorio: isRequired, documento, metadatos: { numero_de_cliente, numero_de_credito, numero_de_escritura, fecha_de_escritura, fecha_de_emision, folio_del_documento, entidad_federativa_que_lo_emite, empresa_o_unidad_de_valuacion_que_lo_elabora, numero_de_cuenta, fecha_de_estado_de_cuenta, nombre_de_banco_emisor, fecha_de_vigencia } })
        res.status(201).json({
            requestStatus: `creado y asignado al usuario con id ${id} con exito.`,
            tipoDeDocumento: nombre,
            esObligatorio: isRequired,
            requeridoEnEtapa: etapa,
            DocId: doc.id
        })
        }else{
            throw new customError({name:'InsercionInvalida',message:'No se ah podido insertar el documento debido a fallo en las validaciones de insercion.', validaciones:{isNew,isInCorrectEstatus:correctEstatus,etapa3dot1:isInEtapa3dot1}})
        }

       
    } catch (error) {
        res.status(200).json({ error })
    }
}

const verifyDocsObligatorios = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            throw new customError({ name: 'invalidId', message: 'id can not be undefined', id })
        }
        const insumoEtapa = await insumosServices.getEtapaById(id)
        const insumoDocList = await docsServices.getDocsObByEtapaByIdName(id, insumoEtapa)
        const obDocList = docsServices.getDocsObByEtapa(insumoEtapa)
        const docsFaltantes = obDocList.filter(nombre => {
            if (!insumoDocList.includes(nombre)) {
                return nombre
            }
        })

        res.status(200).json({
            documentos_completos: docsFaltantes.length === 0,
            documentos_faltantes: docsFaltantes
        })


    } catch (error) {
        res.status(200).json({ error })
    }
}
const verifyVigenciaDocs = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            throw new customError({ name: 'invalidId', message: 'id can not be undefined', id })
        }
        const etapa = await insumosServices.getEtapaById(id)
        const doclist = await docsServices.getDocsObByEtapaById(id, etapa)

        if (doclist.length === 0) {
            res.status(200).json({ docs_status: 'no hay documentos para validar la vigencia', docs_list: doclist })
        } else {
            const listStatus = doclist.filter(doc => {
                if (!docsServices.verifyVigenciaService(doc.vigencia)) {
                    return doc.nombre
                }
            })
            if (listStatus === 0) {
                res.status(200).json({
                    vigencias_correctas: listStatus.length === 0
                })
            } else {
                res.status(200).json({
                    vigencias_correctas: listStatus.length === 0,
                    documentos_con_vigencia_vencida: listStatus
                })
            }


        }
    } catch (error) {
        res.status(200).json({ error })
    }
}
const getDocsOfInsumo = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            throw new customError({ name: 'invalidId', message: 'id can not be undefined', id })
        }
        const countDocs = await docsServices.countDocs(id)
        const docList = await docsServices.getAllDocs(id)
        res.status(200).json({
            //count:countDocs,
            doc_list:docList
        })
    } catch (error) {
        res.status(200).json({ error })
    }
}

module.exports = {
    createAndAddDoc,
    verifyDocsObligatorios,
    verifyVigenciaDocs,
    getDocsOfInsumo
}