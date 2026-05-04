import  appmodel from '../models/appmodels.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const sentdata = async(req,res)=>{
 const {name,email,password}=req.body
  try {
   const hashed = await bcrypt.hash(password,10)
   const add =await appmodel.create({name,email,password:hashed})
   res.status(200).json({msg:"sucess",data:add})
  } catch (error) {
   console.log('error',error);
   if (error.code === 11000) {
       return res.status(400).json({msg: "Name or Email already exists. Please try another one or login."})
   }
   res.status(500).json({msg: error.message || "Server error during registration"})
  }
}

export const checkdata = async(req,res)=>{
   const {email,password}=req.body
  try {
   
    const client =await appmodel.findOne({email})
    if(!client){
    return res.status(404).json({msg:"user not found"})
    }
    const checkpass =await bcrypt.compare(password,client.password)
   if(!checkpass){
    return res.status(404).json({msg:"password not found"})
   } 
    const token =await jwt.sign({id:client._id,name:client.name},process.env.JWT_SECURE,{expiresIn:"1w"})
    res.status(200).json({msg:"token successfully syncked ",token})

} catch (error) {
    console.log('error',error);
    res.status(500).json({msg: error.message || "Server error during login"})
}
}

export const movedatato =async(req,res)=>{
   try {
        res.status(200).json({msg:req.users})
    } catch (error) {
        console.log('error',error);
        
    }


}

















// export const data = async(req,res)=>{
//    console.log(req)
//  res.status(200).json({msg:"received",data:req.body})



// }


// export const sentdata = async(req,res)=>{
//     console.log(req)
//     try{
//   const {name,age,email}=req.body
//   const ab =await appmodel.create({name,age,email})
//   res.status(200).json({msg:"sucess",data:ab})
//     }catch(e){
//  console.log("error",e)
//     }
// }


// export const databyid =async(req,res)=>{
  
//    try{
//      const {id}=req.params
//      const data=await appmodel.findById(id)
//      console.log(data)
//      res.status(200).json({msg:"data found",data:data})

//    }catch(error){
//       console.log("error",error)
//       res.status(500).json({msg:"can't find data",error:error})
//    }
// }


// export const updatedatabyid =async(req,res)=>{
//    try{
//    const {name,age,email}=req.body
//   const {id}=req.params
//   const data = await appmodel.findByIdAndUpdate(id, {name, age, email} )
//    console.log(data)
//    res.status(200).json({msg:"data updated",data:data})
//    }catch(error){
//       console.log("error",error)
//       res.status(500).json({msg:"can't update data",error:error})
//    }
// }

// export const deletedatabyid=async ()=>{
//     try{
//      const {id}=req.params
//      const data=await appmodel.findByIdAndDelete(id)
//      console.log(data)
//      res.status(200).json({msg:"data deleted",data:data})

//    }catch(error){
//       console.log("error",error)
//       res.status(500).json({msg:"can't delete data",error:error})
//    }
// }

