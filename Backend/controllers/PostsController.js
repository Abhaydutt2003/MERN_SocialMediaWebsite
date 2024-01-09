//import the model
import mongoose from "mongoose";
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


export const updatePost = async(req,res)=>{
    const {id:_id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No post with that id');
    //by setting {new:true} we will be actually be getting the new updated doc
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true});
    res.json(updatedPost);
}