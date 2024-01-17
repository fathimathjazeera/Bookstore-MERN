import express from 'express'
import { PORT, mongoDBURL} from './config.js'
import mongoose from 'mongoose'
const app = express()



app.get('/',(req,res)=>{
    console.log("re")
    res.send("hello")
})

mongoose.connect(mongoDBURL).then(()=>{
    console.log("App connected to database")
    app.listen(PORT,()=>{
        console.log(`App listening to port :${PORT}`)
    })
}).catch((error)=>{
    console.log(error)
})
