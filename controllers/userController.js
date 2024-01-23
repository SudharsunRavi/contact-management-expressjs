const asyncHandler=require("express-async-handler");
const bcrypt=require("bcrypt");
const jwt=require("jsonwebtoken");

const UserModel=require("../models/userModel");

const register=asyncHandler(async (req, res)=>{
    const {name, email, password}=req.body;

    if(!name || !email || !password){
        return res.status(400).json({message: "Please provide all the fields!"});
    }

    const user=await UserModel.findOne({email});

    if(user){
        return res.status(400).json({message: "User already exists!"});
    }

    const hashedPassword=await bcrypt.hash(password, 10);
    const newUser=await UserModel.create({name, email, password: hashedPassword});
    if(newUser){
        return res.status(201).json({_id:newUser._id, name: newUser.name, email: newUser.email});
    }
    else{
        return res.status(400).json({message: "Invalid user data!"});
    }
    
})

const login=asyncHandler(async (req, res)=>{
    const {email, password}=req.body;
    if (!email || !password) {
        return res.status(400).json({message: "Please provide all the fields!"});
    }

    const user=await UserModel.findOne({email});
    if(user && await bcrypt.compare(password, user.password)){
        const accessToken=jwt.sign({
            user:{
                name:user.name,
                email:user.email,
                id:user.id,
            }
        }, process.env.JWT_SECRET_KEY, {expiresIn: "3m"})
        res.status(200).json({accessToken})
    }else{
        res.status(401).json({message: "Invalid email or password!"})
    }

    res.json({message: "Login"});
})

const currentUser=asyncHandler(async (req, res)=>{
    res.json({message: "Current User"});
})

module.exports={register, login, currentUser}