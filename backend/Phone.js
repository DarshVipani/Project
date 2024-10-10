const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const Phone = require('./PhoneSchema')
const cors = require('cors')

const ServerConnection = "mongodb+srv://darshvipani:darsh123@cluster0.fna8z.mongodb.net/Phone"

mongoose.connect(ServerConnection).then(()=>{
    console.log("Database Connected")

    const app = express()


    app.use(bodyParser.urlencoded({extended:false}))
    app.use(cors())
    
    app.use(express.json())
    
    app.get('/phone',async (req,res)=>{
        const ans = await Phone.find()
        res.json(ans)
    })

    app.get('/phone/:id',async (req,res)=>{
        const ans = await Phone.findOne({id:req.params.id})
        res.json(ans)
    })

    app.post('/phone/add',async (req,res)=>{
        const stu = new Phone(req.body)
        const ans = await stu.save()
        res.json(ans)
    })

    app.delete('/phone/delete/:id', async(req,res)=>{
        const ans = await Phone.deleteOne({id:req.params.id})
        res.json(ans)
    })

    app.patch('/phone/update/:id',async (req,res)=>{
        const ans = await Phone.findOneAndUpdate({id:req.params.id},req.body)
        res.json(ans)
    })

    app.listen(7100,(req,res)=>{
        console.log("Server Started at 7100")
    })
})