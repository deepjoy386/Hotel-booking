import User from "../models/User.js";
import { getAuth } from "@clerk/express";

// Middleware to check is the user is authenticated
export const protect = async (req, res, next) => {
    // const {userId} = req.auth();
    const {userId} = getAuth(req);
    if(!userId){
        return res.json({success: false, message: "not authenticated"})
    }else{
        const user = await User.findById(userId);
        req.user = user;
        next()
    }
}