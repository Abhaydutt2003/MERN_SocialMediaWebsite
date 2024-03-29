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

//action to create a new Post
export const createPostAction = async(formData)=>{
    try{
        //update the backend
        const {data} = await customFetch.post("/", formData);
        return data;
    }catch(error){
        return console.log(error);
    }
}

//action to update a post
export const updatePostAction = async(currentId,formData)=>{
    try{
        //update the backend
        const {data} = await customFetch.patch(`/${currentId}`, formData);
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


//action to login the user
export const loginUserAction = (store)=>async({request})=>{
    console.log('helo');
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    console.log(data);
}




