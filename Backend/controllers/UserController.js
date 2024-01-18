import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//import the user modal
import User from '../models/user';

export const handlelogin = async (req,res)=>{
    const {email, password} = req.body;
    //check if the user has provided email and password
    if(!email || !password){
        return res.status(400).json({message:'email and password are required'});
    }
    //find the user in the db, if not found, return error
    const foundUser = await User.findOne({email});
    if(!foundUser)return res.status(401).json({ message: "User not found" });
    //evaluate password
    const match = await bcrypt.compare(password,foundUser.password);
    if(match){
        //create a jwt
        
    }else{
        return res.status(401).json({message:"Incorrect Password"});
    }
}