import {
  setAllPosts,
  addPost,
  updatePost,
  deletePost,
} from "../features/Posts/PostsSlice";
import { customFetch } from "../utils";

//action to do the initial fetch
export const setAllPostsAction = (store) => async () => {
  try {
    const { data } = await customFetch.get();
    store.dispatch(setAllPosts(data));
  } catch (error) {
    return console.log(error);
  }
};

//action when a new post is created
export const createNewPost = (store, postData) => async () => {
  try {
    //send the post request
    const {data} = await customFetch.post("/", postData);
    //use the addPost reducer
    store.dispatch(addPost(data));
  } catch (error) {
    return console.log(error);
  }
};

export const postUpdateAction = (store, postData, currentId) => async () => {
  try {
    const {data} = await customFetch.patch(`/${currentId}`, postData);
    return data;
  } catch (error) {
    return console.log(error);
  }
};
//whenever a post is updated, the changes are made in the backend , and not
//in the redux store, need to make a call tp update the store

export const deletePostAction = (store, currentId) => async () => {
  try {
    //update the backend
    await customFetch.delete(`${currentId}`);
  } catch (error) {
    //never do error.message
    return console.log(error);
  }
};

export const updateLikeAction = async(currentId)=>{
  try{
    await customFetch.patch(`/${currentId}/likePost`);
  }catch(error){
    return console.log(error);
  }
}

//TODO use toast to indicate success whenever the post is created
//also add a promise toast for postUpdate
