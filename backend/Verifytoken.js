import jwt from 'jsonwebtoken'

const verifytoken = (req,res,next)=>{
    const auth = req.headers["authorization"];
    if(!auth) return res.json({messege:"no token provided"});

    const token = auth.split(" ")[1];
    jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{
        if(err) res.json({messege:"invalid token0"});
        req.user = decoded;
        next()
    });
}
export default verifytoken;