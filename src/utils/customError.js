class customError extends Error{
    constructor(error){
        super()
        Object.keys(error).forEach(key=>{
            this[key]=error[key]
        })
    }
}
module.exports=customError