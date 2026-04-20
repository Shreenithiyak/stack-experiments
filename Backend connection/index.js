import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connect from './route/approute.js'
import {Base} from './config/dbconn.js'

dotenv.config()
const app =express()
app.use(cors())
app.use(express.json())

app.use('/api/user',connect)
Base()
const PORT= process.env.PORT ||3000
app.listen(PORT,()=>{
    console.log(`server conected http://localhost:${PORT}`)

})

//http://localhost:5000/api/user