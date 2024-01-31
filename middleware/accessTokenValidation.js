const asyncHandler=require("express-async-handler");
const jwt=require("jsonwebtoken");

const validateAccessToken=asyncHandler(async (req, res, next)=>{
    let token;
    let accessToken=req.headers.authorization || req.headers.Authorization;

    if(accessToken && accessToken.startsWith("Bearer")){
        try{
            token=accessToken.split(" ")[1];
            const decoded=jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.user=decoded.user;
            console.log(req.user);
            next();
        }catch(error){
            res.status(401).json({message: "Not authorized, token failed!"});
        }
    }
})

module.exports=validateAccessToken;