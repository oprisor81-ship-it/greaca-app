import express from "express";
import fetch from "node-fetch";

const app=express();
app.use(express.json());

app.post("/ai", async (req,res)=>{

 let r=await fetch(
  "https://api.openai.com/v1/chat/completions",
 {
  method:"POST",
  headers:{
   "Authorization":"Bearer API_KEY",
   "Content-Type":"application/json"
  },
  body:JSON.stringify({
   model:"gpt-4o-mini",
   messages:[
    {role:"system",
     content:"Profesor de limba greacă"},
    {role:"user",content:req.body.question}
   ]
  })
 });

 let data=await r.json();

 res.json({
  answer:data.choices[0].message.content
 });

});

app.listen(3000);