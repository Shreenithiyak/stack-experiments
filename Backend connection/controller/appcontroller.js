import  appmodel from '../models/appmodels.js'

export const data = async(req,res)=>{
   console.log(req)
 res.status(200).json({msg:"received",data:req.body})



}


export const sentdata = async(req,res)=>{
    console.log(req)
    try{
  const {name,age,email}=req.body
  const ab =await appmodel.create({name,age,email})
  res.status(200).json({msg:"sucess",data:ab})
    }catch(e){
 console.log("error",e)
    }
}


export const databyid =async(req,res)=>{
  
   try{
     const {id}=req.params
     const data=await appmodel.findById(id)
     console.log(data)
     res.status(200).json({msg:"data found",data:data})

   }catch(error){
      console.log("error",error)
      res.status(500).json({msg:"can't find data",error:error})
   }
}


export const updatedatabyid =async(req,res)=>{
   try{
   const {name,age,email}=req.body
  const {id}=req.params
  const data = await appmodel.findByIdAndUpdate(id, {name, age, email} )
   console.log(data)
   res.status(200).json({msg:"data updated",data:data})
   }catch(error){
      console.log("error",error)
      res.status(500).json({msg:"can't update data",error:error})
   }
}

export const deletedatabyid=async ()=>{
    try{
     const {id}=req.params
     const data=await appmodel.findByIdAndDelete(id)
     console.log(data)
     res.status(200).json({msg:"data deleted",data:data})

   }catch(error){
      console.log("error",error)
      res.status(500).json({msg:"can't delete data",error:error})
   }
}

