function verifyadmin(req,res,next){
    if(req.user.role !== "admin") return res.json({messege:"access denied"});
    next()
}
export default verifyadmin;