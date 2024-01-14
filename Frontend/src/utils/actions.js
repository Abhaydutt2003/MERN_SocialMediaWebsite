//remember to always always console.log error and not error.message

//import axios custom fetch function
import {customFetch} from './index';


//action to do the initial fetch
export const intitalFetch = async()=>{
    try{
        const {data} = await customFetch.get('/');
        return data;
    }catch(error){
        return console.log(error);
    }
}

//action to delete the post
export const deletePostAction = async (currentId)=>{
    try{
        //update the backend
        await customFetch.delete(`/${currentId}`);
    }catch(error){
        return console.log(error);
    }
}


//action to update the likes on the post
export const updateLikeAction = async(currentId)=>{
    try{
        await customFetch.patch(`/${currentId}/likePost`);
      }catch(error){
        return console.log(error);
      }
}




