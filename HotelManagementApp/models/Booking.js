const mongoose=require("mongoose");

const BookingSchema=new mongoose.Schema({
    room:{
        type:String,
        required:true
    },
    roomid:{
        type:String,
        required:true
    },
    userid:{
        type:String,
        required:true
    },
    fromdate:{
        type:String,
        required:true
    },
    todate:{
        type:String,
        required:true
    },
    totalamount:{
        type:String,
        required:true
    },
    totaldays:{
        type:String,
        required:true
    },
    transectionid:{
        type:String,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"booked"
    }
},
    {
        timestamps:true,
    }

)




const bookingModel=mongoose.model("bookingModel",BookingSchema);


module.exports=bookingModel;

