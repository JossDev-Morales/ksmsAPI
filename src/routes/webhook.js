const { Router } = require("express");
const responses = require("../models/hooksResponses");

const webhooks=Router()
webhooks.post("/webhook/response",async (req,res)=>{
    try {
        const response=req.body
        await responses.create({response})
    } catch (error) {
        throw error
    }
})