import jwt from "jsonwebtoken";
const createTokenAndSaveCookie=(userId,res)=>{
    const token=jwt.sign({userId,},process.env.JWT_TOKEN,{
        expiresIn:"10d"
    });
    res.cookie("jwt",token,{
      httpOnly:true,// to save from xss attack
      secure:true,
      sameSite:"strict",// only for security purpose
    });

};

export default createTokenAndSaveCookie;