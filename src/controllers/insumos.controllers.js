const insumosServices = require("../services/insumos.service")
const customError = require("../utils/customError")

const createInsumo = async (req, res) => {
    try {
        const insumo = req.body
        const response = await insumosServices.createInsumo(insumo)
        res.status(201).json({ message: `Nuevo insumo creado con el id: ${response.id}`, id: response.id })
    } catch (error) {
        res.status(200).json({ error })
    }
}
const updateInsumo = async (req, res) => {
    try {
        const { id, insumo } = req.body
        if (!id) {
            throw new customError({ name: 'invalId', message: 'id can not be undefined', id })
        }
        if (!insumo) {
            throw new customError({ name: 'invalidData', message: 'insumo can not be undefined', insumo })
        }
        await insumosServices.updateInsumo(insumo, id)
        res.status(200).send()
    } catch (error) {
        res.status(200).json({ error })
    }
}
const getInsumo = async (req, res) => {
    try {
        const id = req.body.id
        if (!id) {
            throw new customError({ name: 'invalId', message: 'id can not be undefined', id })
        }
        const insumo = await insumosServices.getInsumoById(id)
        if (insumo === null) {
            throw new customError({ name: 'wrongId', message: 'this insumo do not exist'})
        }
        res.status(200).json(insumo)
    } catch (error) {
        res.status(200).json({ error })
    }
}
const deleteInsumo = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            throw new customError({ name: 'invalId', message: 'id can not be undefined', id })
        }
        const response = await insumosServices.deleteInsumoById(id)
        if (response === null) {
            throw new customError({ name: 'wrongId', message: 'this insumo do not exist' })
        }
        res.status(204).send()
    } catch (error) {
        res.status(200).json({ error })
    }
}
const updateEtapa = async (req, res) => {
    try {
        const { id } = req.body
        if (!id) {
            throw new customError({ name: 'invalId', message: 'id can not be undefined', id })
        }
        const currentEtapa = await insumosServices.getEtapaById(id)
        const etapa = currentEtapa + 1

        if (etapa > 3) {
            await insumosServices.upSubetapa(id, "3.1")
            res.status(200).json({status:'ok'})
        } else {
            await insumosServices.upEtapa(id, etapa)
            res.status(200).json({status:'ok'})
        }

    } catch (error) {
        res.status(200).json({ error })
    }
}
const reasonOfRejection = async (req, res) => {
    try {
        const { id, motivo_de_rechazo } = req.body
        if (!id) {
            throw new customError({ name: 'invalId', message: 'id can not be undefined', id })
        }
        if (!motivo_de_rechazo) {
            throw new customError({ name: 'invalData', message: 'motivo_de_rechazo can not be undefined', motivo_de_rechazo })
        }
        const response = await insumosServices.rejectInsumo(id, motivo_de_rechazo)
        res.status(200).json({status:'ok'})
    } catch (error) {
        res.status(200).json({ error })
    }
}
const estatusChanger = async (req, res) => {
    try {
        const { id, estatus } = req.body
        if (!id) {
            throw new customError({ name: 'invalId', message: 'id can not be undefined', id })
        }
        if (estatus === undefined) {
            throw new customError({ name: 'estatusMissing', message: 'you need to provide an estatus' })
        }
        await insumosServices.changeEstatus(id, estatus)
        res.status(200).json({status:'ok'})
    } catch (error) {
        res.status(200).json({ error })
    }
}
const changeActive = async (req, res) => {
    try {
        const { id, activo } = req.body
        if (!id) {
            throw new customError({name: 'invalId', message: 'id can not be undefined', id })
        }
        if (activo===undefined) {
            throw new customError({name:'invalidData',message:'Tienes que proporcionar un estado activo'})
        }
        await insumosServices.changeIsActive(id,activo)

        res.status(200).json({status:'ok'})
    } catch (error) {
        res.status(300).json({ error })
    }
}
module.exports = {
    createInsumo,
    updateInsumo,
    getInsumo,
    deleteInsumo,
    updateEtapa,
    reasonOfRejection,
    estatusChanger,
    changeActive
}