const express=require("express");
const router=express.Router();
const bookingModel=require("../models/Booking");
const moment=require("moment");
const { v4: uuidv4 } = require('uuid');
const stripe=require("stripe")('sk_test_51M2I3NSCMYjbQKwFT1JaC6ehmT9OSbP2JUnEIoy5jLRmCHxRYkmL9z1CoxfMHmlpW71FgBspH44XbtbzwEmd243Q00Ugl51qBj');
const Room=require("../models/room")



router.post("/bookroom",async (req,res)=>{
    // const {
    //     room,
    //     roomid,
    //     userid,
    //     fromdate,
    //     todate,
    //     totaldays,
    //     totalamount,
    // }=req.body;



    // try{
    //     const customer = await stripe.customers.create({
    //         email: token.email,
    //         source: token.id
    //     });

    //     const payment= await stripe.charges.create({
    //         {
    //             amount:totalamount *100,
    //             customer:customer.id,
    //             currency:"INR",
    //             receipt_email: token.email
    //         },{
    //             idempotencyKey= uuidv4()
    //         }
    //     })
    // }catch(error){

    // }

    // try{
    //     const newbooking=new bookingModel({
    //         room:room,
    //         roomid,
    //         userid,
    //         fromdate,
    //         todate,
    //         totalamount,
    //         totaldays,
    //         transectionid:"12323",
    //     })
    //     console.log(newbooking);
    //     const booking=await newbooking.save();
    //     const roomtemp=await Room.findOne({_id:roomid});
    //     // console.log("***************** This is room temp *************")
    //     // console.log(roomtemp);
    //     roomtemp.currentbookings.push({
    //         bookingid:booking._id, fromdate:fromdate,todate:todate,userid:userid,status:booking.status
    //     });

    //     await roomtemp.save();
    //     res.send(booking);
    // }catch(error){
    //     console.log(error)
    // }
    // res.send("Boooked ")
})






module.exports=router;