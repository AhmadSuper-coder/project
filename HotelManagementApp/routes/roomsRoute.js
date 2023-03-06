const express=require("express");
const router=express.Router();
const Room=require("../models/room");


router.get("/rooms",async (req,res)=>{
    try{
        const rooms=await Room.find();
        res.send(rooms);
    }catch(e){
        console.log(`some error has occured ${e}`);
    }
})


router.post("/rooms/getroombyid", async (req,res)=>{
    try{
        const id=req.body.id
        const singleroomdata=await Room.findById({_id:id});
        res.status(201).send(singleroomdata)
    }catch(e){
        console.log(`some error has occured ${e}`);
    }
})



module.exports=router;
