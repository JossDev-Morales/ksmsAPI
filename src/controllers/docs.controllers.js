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
        if (!docsServices.verifyVigenciaService(vigencia)) {
            throw new customError({ name: 'VigenciaVencida', message: 'Esta vigencia ya caduco', vigencia })
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
            etapa = "2o3"
        } else {
            let customError = new Error('El nombre de tu documento no parece tener asociado una etapa, comunicate con kosmos.')
            throw customError
        }
        const etapaInsumo=await insumosServices.getEtapaById(id)
        if(etapa!=etapaInsumo){
            throw new customError({name:'invalidEtapa',message:`La etapa de insercion del documento es ${etapa} y la etapa del insumo es ${etapaInsumo}, insercion de documento no valida`,documentoNombre:nombre})
        }
        const obligatorios = ["titulo_de_propiedad", "boleta_predial", "boleta_agua", "certificado_libertad_de_gravamen", "constancia_de_uso_de_suelo", "avaluo_bancario", "certificado_zonificacion", "testimonio_poder_tuhabi", "estado_de_cuenta_vendedor"]
        if (obligatorios.includes(nombre)) {
            isRequired = true
        } else {
            isRequired = false
        }

        // aqui ya enviamos la informacion al servicio encargado de crear el documento
        const doc = await docsServices.addDoc(id, { nombre, vigencia, etapa, obligatorio: isRequired, documento, metadatos: { numero_de_cliente, numero_de_credito, numero_de_escritura, fecha_de_escritura, fecha_de_emision, folio_del_documento, entidad_federativa_que_lo_emite, empresa_o_unidad_de_valuacion_que_lo_elabora, numero_de_cuenta, fecha_de_estado_de_cuenta, nombre_de_banco_emisor, fecha_de_vigencia } })
        res.status(201).json({
            requestStatus: `creado y asignado al usuario con id ${id} con exito.`,
            tipoDeDocumento: nombre,
            esObligatorio: isRequired,
            requeridoEnEtapa: etapa,
            DocId: doc.id
        })

    } catch (error) {
        res.status(200).json({ error })
    }
}
const updateDocsRejected = async (req, res) => {
    try {
        const { id, isRejected, nombre } = req.body
        if (!id) {
            throw new customError({ name: 'invalidId', message: 'id can not be undefined', id })
        }
        if (isRejected===undefined) {
            throw new customError({ name: 'invalidData', message: 'rejected property can not be undefined', id })
        }
        if (!nombre) {
            throw new customError({ name: 'invalidData', message: 'nombre can not be undefined', nombre })
        }
        await docsServices.updateRejected(id, nombre, isRejected)
        res.status(200).json({ status: "ok" })
    } catch (error) {
        res.status(400).json({ error })
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
        console.log({ insumoDocList, obDocList });
        const docsFaltantes = obDocList.filter(nombre => {
            if (!insumoDocList.includes(nombre)) {
                return nombre
            }
        })
        console.log(docsFaltantes);
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
            doc_list: docList
        })
    } catch (error) {
        res.status(200).json({ error })
    }
}

module.exports = {
    createAndAddDoc,
    verifyDocsObligatorios,
    verifyVigenciaDocs,
    getDocsOfInsumo,
    updateDocsRejected
}