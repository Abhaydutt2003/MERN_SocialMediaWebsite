//all the routes to handle posts
import express from "express";

//import the controllers 
//in react we do not need to put the .js during import , but in nodejs we need to use .js during import
import { getPosts,createPost,updatePost,deletePost,updateLikes } from "../controllers/PostsController.js";

const router = express.Router();

//route to get all the posts
router.get("/", getPosts);

//route to create a new Post
router.post('/',createPost);

//route to update the post
router.patch('/:id',updatePost);

//route to delete a post
router.delete('/:id',deletePost);

//route to update the likes
router.patch('/:id/likePost',updateLikes);


export default router;
