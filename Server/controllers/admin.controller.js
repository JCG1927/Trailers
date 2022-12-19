const model = require('../models/admin')

exports.getData = (req,res)=>{
    model.find({},(err,data)=>{
        res.send({
            docs:data
        })
    })
}