const docsServices = require("../services/docs.services");
const insumosServices = require("../services/insumos.service");
// ¡¡SOLO SE PODRA INSERTAR DOCUMENTOS SI SE CUMPLEN LAS SIGUIENTES CONDICIONES!!.
//pasa el middleware de validacion
//si el estatus del insumo es igual a uno de los estatus aceptados para inserccion
//si la etapa del insumo es 3.1 ya que en esta etapa se permite insertar docs debido a vencimiento fuera de las etapas1,2,3
//si el documento es nuevo se permite cargar documentos, caso contrario, no te permite cargar docs
const insercionValidator = async (req, res, next) => {
    const { id, doc: { nombre } } = req.body
    let currentEstatus = await insumosServices.getEstatusById(id)
    let correctEstatus = currentEstatus == "Espera de inserción 2 o 3" || currentEstatus == "Solicitud de complemento" || currentEstatus == "Vivienda lista para notario"
    let isInEtapa3dot1 = await insumosServices.getEtapaById(id) == '3.1'
    if ((await docsServices.getAllDocs(id)).filter(doc => doc.nombre === nombre).length === 0) {
        next()
    } else if (correctEstatus || isInEtapa3dot1) {
        next()
    } else {
        res.status(400).json({ name: 'InsercionInvalida', message: 'No se ah podido insertar el documento debido a fallo en las validaciones de insercion.', validaciones: { isNew, isInCorrectEstatus: correctEstatus, etapa3dot1: isInEtapa3dot1 } })
    }
}
module.exports=insercionValidator