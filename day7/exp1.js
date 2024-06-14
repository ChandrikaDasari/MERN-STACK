const ex=require('express');
const env=require('dotenv');
const {MongoClient}=require('mongodb');

env.config();
MongoClient.connect(process.env.MONGO_URL).then(()=>{
    console.log("namasthe");
})
.catch((error)=>{
    console.log("error",error);
})
const app=ex();
const PORT=8000;
app.listen(PORT,()=>{
    console.log("hy");
})

// myapp.get("/",(req,res)=>{
//     res.send("Welcome");
// })

// myapp.listen(8000,(err)=>{
//     if(err)return err;
//     else console.log("hy");
// })