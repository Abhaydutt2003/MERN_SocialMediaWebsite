import { setAllPosts } from "../features/Posts/PostsSlice";
import { customFetch } from "../utils";

export const setAllPostsAction = (store)=>async()=>{
    try{
        const {data} = await customFetch.get();
        store.dispatch(setAllPosts({data}));
    }catch(error){
        return console.log(error);
    }
}