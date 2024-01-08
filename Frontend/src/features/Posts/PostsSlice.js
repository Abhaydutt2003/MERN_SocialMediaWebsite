import { createSlice } from "@reduxjs/toolkit";


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
            return action.payload;
        }
    }
});

//export all the reducers for usage
export const {setAllPosts,addPost} = postsSlice.actions;

export default postsSlice.reducer;

