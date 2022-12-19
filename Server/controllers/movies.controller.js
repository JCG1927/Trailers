const model = require('../models/movies')

exports.getData = (req,res)=>{
    model.find({},(err,data)=>{
        res.send({
            data
        })
    })
}

exports.insertData = (req,res)=>{
    const data = req.body
    res.send(data)
}
