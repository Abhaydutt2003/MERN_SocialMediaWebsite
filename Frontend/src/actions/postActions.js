import { setAllPosts } from "../features/Posts/PostsSlice";
import { customFetch } from "../utils";

//action to do the initial fetch
export const setAllPostsAction = (store)=>async()=>{
    try{
        const {data} = await customFetch.get();
        store.dispatch(setAllPosts(data));
    }catch(error){
        return console.log(error);
    }
}

//action when a new post is created
export const createNewPost = (store)=> async()=>{
    try{
        
    }catch(error){

    }
}