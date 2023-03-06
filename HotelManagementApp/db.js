const mongoose=require("mongoose");
// const url="mongodb+srv://ahmad:Sonu@cluster0.6vfvmpe.mongodb.net/HotelManagement";
// const db="mongodb+srv://ahmad:sonu@cluster0.6vfvmpe.mongodb.net/?retryWrites=true&w=majority";
// HotelManagement

const url="mongodb://localhost:27017/HotelManagement";

mongoose.connect(url).then(
    ()=>{
        console.log("database connection has been succesfully connected ");
    }
).catch((e)=>{
    console.log(e);
})

