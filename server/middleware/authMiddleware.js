import User from "../models/User.js";

// Middleware to check is the user is authenticated
export const protect = async (req, res, next) => {
    const {userId} = req.auth();
    if(!userId){
        req.json({success: false, message: "not authenticated"})
    }else{
        const user = await User.findById(userId);
        req.user = user;
        next()
    }
}