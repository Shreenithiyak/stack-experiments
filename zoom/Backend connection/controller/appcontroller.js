import  appmodel from '../models/appmodels.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import {OAuth2Client} from 'google-auth-library';
import Question from '../models/questionModel.js';

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

export const googlelogin =async(req,res)=>{
    const {id_token} = req.body
    const client = new OAuth2Client(process.env.GOOGLE_OAUTH_ID)
    const ticket = await client.verifyIdToken({
        idToken:id_token,
        audience:process.env.GOOGLE_OAUTH_ID,
    })
    const payload = ticket.getPayload()
    console.log(payload)
    
    try {
      const user = await appmodel.findOne({email:payload.email})
      if(user){
        const token =await jwt.sign({id:user._id,name:user.name},process.env.JWT_SECURE,{expiresIn:"1w"})
        res.status(200).json({msg:"token successfully syncked ",token})
      }else{
        const add =await appmodel.create({name:payload.name,email:payload.email,password:''})
        const token =await jwt.sign({id:add._id,name:add.name},process.env.JWT_SECURE,{expiresIn:"1w"})
        res.status(200).json({msg:"token successfully syncked ",token})
      }
    } catch (error) {
        console.log('error',error);
        res.status(500).json({msg: error.message || "Server error during google login"})
    }
}

export const getQuestions = async (req, res) => {
    try {
        const { level } = req.query;
        const filter = level ? { level } : {};
        const questions = await Question.find(filter);
        res.status(200).json(questions);
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ msg: "Error fetching questions" });
    }
};

export const seedQuestions = async (req, res) => {
    const questionsData = [
        {
            level: 'beginner',
            category: "Algorithms",
            time: "15 mins",
            question: "Explain the concept of Big O notation and how you apply it to evaluate algorithm performance.",
            description: "This question tests your fundamental understanding of computational complexity. Be prepared to discuss worst-case, average-case, and best-case scenarios for common sorting and searching algorithms.",
            focusAreas: ["Space Complexity", "Logarithmic vs Linear time", "Amortized Analysis"]
        },
        {
            level: 'beginner',
            category: "Data Structures",
            time: "10 mins",
            question: "What are the primary differences between an Array and a Linked List?",
            description: "Understanding memory allocation and access patterns is crucial for choosing the right data structure for your application.",
            focusAreas: ["Random Access", "Insertion/Deletion Efficiency", "Memory Overhead"]
        },
        {
            level: 'beginner',
            category: "Web Basics",
            time: "12 mins",
            question: "Describe the process of what happens when you type a URL into a browser and press Enter.",
            description: "A classic high-level question that tests your breadth of knowledge across networking, DNS, and browser rendering.",
            focusAreas: ["DNS Lookup", "TCP/IP Handshake", "DOM/CSSOM Construction"]
        },
        {
            level: 'intermediate',
            category: "Data Structures",
            time: "10 mins",
            question: "What are the primary differences between a Hash Map and a Tree Map?",
            description: "Hash maps provide constant time average access, while tree maps maintain order. Knowing when to trade speed for ordering is a key intermediate skill.",
            focusAreas: ["Time Complexity (O(1) vs O(log n))", "Ordering Guarantees", "Hash Collisions vs Balancing"]
        },
        {
            level: 'intermediate',
            category: "Web Tech",
            time: "15 mins",
            question: "Explain the event loop in JavaScript and how it handles asynchronous operations.",
            description: "Deep dive into the concurrency model of JS. Essential for frontend and Node.js developers.",
            focusAreas: ["Call Stack", "Task Queue vs Microtask Queue", "Blocking vs Non-blocking"]
        },
        {
            level: 'intermediate',
            category: "Database",
            time: "20 mins",
            question: "When would you choose a NoSQL database over a traditional SQL database?",
            description: "Tests your understanding of data modeling, scaling requirements, and the CAP theorem.",
            focusAreas: ["ACID vs BASE", "Horizontal Scalability", "Schema Flexibility"]
        },
        {
            level: 'advanced',
            category: "System Design",
            time: "20 mins",
            question: "How would you design a rate limiter for a high-traffic public API?",
            description: "This tests your ability to handle scale, synchronization in distributed systems, and choosing between different algorithms like Token Bucket or Leaky Bucket.",
            focusAreas: ["Token Bucket Algorithm", "Distributed Locking (Redis)", "Scalability & Fault Tolerance"]
        },
        {
            level: 'advanced',
            category: "Architecture",
            time: "25 mins",
            question: "Describe your process for debugging a memory leak in a large-scale application.",
            description: "Advanced debugging requires understanding of heap snapshots, garbage collection cycles, and profiler tools.",
            focusAreas: ["Heap Analysis", "Garbage Collection Strategies", "Retention Paths"]
        },
        {
            level: 'advanced',
            category: "Concurrency",
            time: "30 mins",
            question: "How do you handle race conditions in a distributed system with multiple microservices?",
            description: "Focuses on consistency models, idempotent operations, and distributed coordination.",
            focusAreas: ["Optimistic vs Pessimistic Locking", "Idempotency Keys", "Distributed Transactions (Saga Pattern)"]
        }
    ];

    try {
        await Question.deleteMany({}); // Clear existing
        const seeded = await Question.insertMany(questionsData);
        res.status(200).json({ msg: "Seeded successfully", count: seeded.length });
    } catch (error) {
        console.log('error', error);
        res.status(500).json({ msg: "Error seeding questions" });
    }
};

















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

