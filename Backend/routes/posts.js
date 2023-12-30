//all the routes to handle posts
import express from "express";

//import the controllers 
//in react we do not need to put the .js during import , but in nodejs we need to use .js during import
import { getPosts,createPost } from "../controllers/PostsController.js";

const router = express.Router();

router.get("/", getPosts);
router.post('/',createPost);

export default router;
