const { Router } = require("express");
const responses = require("../models/hooksResponses");
const { v4 } = require("uuid");

const webhooks=Router()
webhooks.post("/webhook/response",async (req,res)=>{
    try {
        const response=req.body
        const id=v4()
        await responses.create({idResponse:id,response})
        console.log({id,timestmap:new Date()});
        res.sendStatus(200)
    } catch (error) {
        throw error
    }
})
webhooks.get("webhook/response",async (req,res)=>{
    try {
        const {id}=req.body
        const response=await responses.findByPk(id)
        res.status(200).json(response.response)
    } catch (error) {
        throw error
    }
})