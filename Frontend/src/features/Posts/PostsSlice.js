import { createSlice } from "@reduxjs/toolkit";


//should not store the base64 image here, i should store them in localstorage
const defaultState = {
    posts : []
}

const postsSlice = createSlice({
    name:'posts',
    initialState:defaultState,
    reducers:{
        setAllPosts:(state,action)=>{
            //reducer to set the state of the post
            state.posts = action.payload;
        },
        addPost:(state,action)=>{
            //add the post after creating it 
            state.posts = [...state.posts,action.payload];
        },
        updatePost:(state,action)=>{
            //update the post after finding it
            console.log(action.payload);
            let updatedPosts = state.posts.map((post)=>{
                if(post._id == action.payload._id){
                    return action.payload;
                }else{
                    return post;
                }
            })
            state.posts = updatedPosts;
        }
    }
});

//export all the reducers for usage
export const {setAllPosts,addPost,updatePost} = postsSlice.actions;

export default postsSlice.reducer;

