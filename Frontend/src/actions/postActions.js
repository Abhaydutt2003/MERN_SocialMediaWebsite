import { setAllPosts,addPost } from "../features/Posts/PostsSlice";
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
export const createNewPost = (store,postData)=> async()=>{
    try{
        //send the post request
        const response = await customFetch.post('/',postData);
        //use the addPost reducer
        store.dispatch(addPost(response));
    }catch(error){
        return console.log(error);
    }
}


//TODO use toast to indicate success whenever the post is created