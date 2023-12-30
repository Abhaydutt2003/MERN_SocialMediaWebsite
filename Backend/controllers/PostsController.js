//import the model
import PostMessage from "../models/postMessage.js";


export const getPosts = async(req,res)=>{
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}


export const createPost = async (req,res)=>{
    try{
        const result = await PostMessage.create(req.body);
        return res.status(201).json(result);
    }catch(error){
        return res.status(409).json({message:error.message});
    }
}