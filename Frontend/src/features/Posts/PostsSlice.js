import { createSlice } from "@reduxjs/toolkit";


const defaultState = {
    posts : []
}

const postsSlice = createSlice({
    name:'posts',
    initialState:defaultState,
    reducers:{
        setAllPosts:(state,action)=>{
            state.posts = action.payload;
        },
        createPosts:(state,action)=>{
            return action.payload;
        }
    }
});

//export all the reducers for usage
export const {setAllPosts,createPosts} = postsSlice.actions;

export default postsSlice.reducer;

