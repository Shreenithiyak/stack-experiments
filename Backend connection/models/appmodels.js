import mongoose from 'mongoose'
const appdemo = new mongoose.Schema({
    name:{
        type:"String",
        required:true,
        unique:true
    },
    age:{
        type:"Number",
        required:true,
        unique:true
    },
    email:{
        type:"String",
        required:true,
        unique:true
    },
    createdAT:{
        type:"String",
        default:"user"
    },
    updatedAT:{
        type:"String",
        default:"user"
    }
},{timestramps:true})

const appmodel= mongoose.model("appmodel",appdemo)
export default appmodel


