const express=require("express");
const router=express.Router();
const userModel=require("../models/users");
const bcrypt=require("bcrypt");

router.post("/register",async (req,res)=>{
    console.log("This register is running ")
    try{
        const data=req.body;
        const isemail=await userModel.findOne({email:data.email});
        if (isemail===null){
            const mydata=new userModel({name:data.name,email:data.email,password:data.password});
            const fakedata={
            name:data.name,
            email:data.email
            }
            await mydata.save();
            res.send(fakedata);
        }else{
            res.send("notValidEmail");
        }
        
    }catch(e){
        res.status(500).send(e);
    }
})


router.post("/login",async (req,res)=>{
    try{
        const data=req.body;
        const emailid=await userModel.findOne({email:data.email})
        if (emailid===null){
            res.send("notvalid")
        }else{
            const ismatchpass=await bcrypt.compare(data.password,emailid.password);
            if (ismatchpass){
                // console.log(`This is the chechinkg fo valid email di ${emailid}`);
                res.status(201).send(emailid)
            }else{
                res.send("invalid");
            }
        }

    }catch(e){
        console.log(e);
        res.status(500).send(e)
    }
})





module.exports=router;