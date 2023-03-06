const mongoose=require("mongoose")
const bcrypt=require("bcrypt");

const userSchema=mongoose.Schema({
    name:{
        type:String,
        requried:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    isAdmin:{
        type:Boolean,
        default:false,
    }
},
    {
        timestamps:true,
    }

)


// middleware 
userSchema.pre("save",async function (next){
    const user=this
    if (user.isModified("password")){
        user.password=await bcrypt.hash(user.password,6);
    }
    next();
})


// careating a model  

const userModel=mongoose.model("User",userSchema);

module.exports=userModel;

