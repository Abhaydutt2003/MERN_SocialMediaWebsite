//import the model
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

//fetch all the posts from the db
export const getPosts = async(req,res)=>{
    try{
        const postMessages = await PostMessage.find();
        res.status(200).json(postMessages);
    }catch(error){
        return res.status(500).json({message:error.message});
    }
}

//creating a post
export const createPost = async (req,res)=>{
    try{
        const result = await PostMessage.create(req.body);
        return res.status(201).json(result);
    }catch(error){
        return res.status(409).json({message:error.message});
    }
}

//to update a post
export const updatePost = async(req,res)=>{
    const {id:_id} = req.params;
    const post = req.body;
    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No post with that id');
    //by setting {new:true} we will be actually be getting the new updated doc
    const updatedPost = await PostMessage.findByIdAndUpdate(_id,post,{new:true});
    res.json(updatedPost);
}


//to delete a post
export const deletePost = async(req,res)=>{
    const {id:_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No post with that id exists');
    const updatedPosts = await PostMessage.findByIdAndDelete(_id,{new:true});
    res.json(updatedPosts);
}


//to update the likes in a post
export const updateLikes = async(req,res)=>{
    const {id:_id} = req.params;
    if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).send('No post with that id exists');
    const thePost = await PostMessage.findById(_id);
    thePost.likeCount++;
    let updatedPost = await thePost.save();
    res.json(updatedPost);
}

