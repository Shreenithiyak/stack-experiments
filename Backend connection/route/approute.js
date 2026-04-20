import express from 'express'
import {data,sentdata,databyid,updatedatabyid,deletedatabyid} from '../controller/appcontroller.js'

const route =express.Router()

route.post('/sentdata',sentdata)
route.get('/getdata',data)
route.get('/getdatabyid/:id',databyid)
route.put('/updatedatabyid/:id',updatedatabyid)
route.get('/deletedatabyid/:id',deletedatabyid)


export default route

//http://localhost:5000/api/user/getdata
//http://localhost:5000/api/user/sentdata
//http://localhost:5000/api/user/getdatabyid/69e5ba7bb9b089d4f1826416
//http://localhost:5000/api/user/updatedatabyid/69e5ba7bb9b089d4f1826416
//http://localhost:5000/api/user/deletedatabyid/69e1fe59488afd2f1f00f176
