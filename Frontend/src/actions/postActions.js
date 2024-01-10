import { setAllPosts, addPost, updatePost } from "../features/Posts/PostsSlice";
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
    const response = await customFetch.post("/", postData);
    //use the addPost reducer
    store.dispatch(addPost(response));
  } catch (error) {
    return console.log(error);
  }
};

export const postUpdate = (store, postData, currentId) => async () => {
  console.log(postData, currentId);
  try {
    const response = await customFetch.patch(`/${currentId}`, postData);
    store.dispatch(updatePost(response));
  } catch (error) {
    return console.log(error);
  }
};
//whenever a post is updated, the changes are made in the backend , and not
//in the redux store, need to make a call tp update the store

//TODO use toast to indicate success whenever the post is created
