import express from 'express'
import {checkdata,sentdata,movedatato, googlelogin, getQuestions, seedQuestions, getCompanies, getRoles} from '../controller/appcontroller.js'
import { checktoken } from '../middleware/appmiddleware.js'

const route =express.Router()

route.post('/sentdata',sentdata)
route.post('/logindata',checkdata)
route.get('/logindata', checktoken,movedatato)
route.post('/googlelogin',googlelogin)
route.get('/questions', getQuestions)
route.get('/companies', getCompanies)
route.get('/roles', getRoles)
route.post('/seed-questions', seedQuestions)



// route.get('/getdatabyid/:id',databyid)
// route.put('/updatedatabyid/:id',updatedatabyid)
// route.get('/deletedatabyid/:id',deletedatabyid)


export default route

//http://localhost:5000/api/user/logindata
//http://localhost:5000/api/user/sentdata
//http://localhost:5000/api/user/getdatabyid/69e5ba7bb9b089d4f1826416
//http://localhost:5000/api/user/updatedatabyid/69e5ba7bb9b089d4f1826416
//http://localhost:5000/api/user/deletedatabyid/69e1fe59488afd2f1f00f176
