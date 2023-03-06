const express=require("express");
const app=express();
var port = process.env.PORT || 5000;
require("./db")
const roomsRoute=require("./routes/roomsRoute");
const userRoute=require("./routes/UserRoute");
const BookingRoute=require("./routes/BookingRoute");

app.use(express.json());
app.use("/api",roomsRoute);
app.use("/user",userRoute);
app.use("/api/bookings",BookingRoute); 

app.get("/",(req,res)=>{
    res.send("hellow i am here ");
})

app.listen(port,()=>{
    console.log(`Server is running at port ${port}`);
})