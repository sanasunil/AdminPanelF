
const express = require("express");
const mongoose = require("mongoose");

const app = express();
const cors = require("cors");

const UsersModel = require("./models/Users");

app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://sanasunil16:crudapp@cluster0.woj4j.mongodb.net/Users?retryWrites=true&w=majority",{
  useNewUrlParser : true
});


app.post('/insert',async(req,res)=>{
   
  const userName = req.body.userName;
  const password = req.body.password;
  const userType = req.body.userType;
  const userToken = req.body.userToken;

  const user = new UsersModel({userName : userName, password:password, userType:userType, userToken:userToken});
  try{
    await user.save();
    res.send("inserted data");
  }catch(err){
      console.log(err);
  }
});

app.get("/read",async(req,res)=>{
   UsersModel.find({},(err,result)=>{
       if(err){
           res.send(err)
       }
       res.send(result)
   })
});

app.get("/getAdmins",async(req,res)=>{
  const {userType} = req.params;

  UsersModel.find({userType : { $eq: "admin" }},(err,result)=>{
      if(err){
          res.send(err)
      }
      res.send(result)
  })
});

app.get("/getCoordinators",async(req,res)=>{
  const {userType} = req.params;

  UsersModel.find({userType : { $eq: "coordinator" }},(err,result)=>{
      if(err){
          res.send(err)
      }
      res.send(result)
  })
});

app.get("/getDeliveryBoys",async(req,res)=>{
  const {userType} = req.params;

  UsersModel.find({userType : { $eq: "delivery boy" }},(err,result)=>{
      if(err){
          res.send(err)
      }
      res.send(result)
  })
});

app.get("/getCustomers",async(req,res)=>{
  const {userType} = req.params;

  UsersModel.find({userType : { $eq: "customer" }},(err,result)=>{
      if(err){
          res.send(err)
      }
      res.send(result)
  })
});

app.get("/getUser/:id",async(req,res)=>{
  const {id} = req.params;

  UsersModel.findById((id),(err,result)=>{
      if(err){
          res.send(err)
      }
      res.send(result)
  })
});

app.put('/update/:id',async(req,res)=>{
   
  const {userName,password,userType,userToken}=req.body;
  const { id } = req.params;

  try{
    const updatedUser={
      userName,password,userType,userToken,_id:id,
    }
    await UsersModel.findByIdAndUpdate(id,updatedUser,{new:true});
    res.json(updatedUser);
        
  }catch(err){
      console.log(err);
  }
});

app.delete('/delete/:id',async(req,res)=>{
   const id = req.params.id;

   await UsersModel.findByIdAndRemove(id).exec();
  res.send(id)
});

app.listen(3004,()=>{
    console.log("server running on port 3004....")
});






