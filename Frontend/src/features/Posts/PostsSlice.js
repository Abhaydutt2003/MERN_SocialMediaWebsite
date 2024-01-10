import { createSlice } from "@reduxjs/toolkit";


//should not store the base64 image here, i should store them in localstorage
//by defualt redux uses memory to store the data of the slice
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
            let updatedPosts = state.posts.map((post)=>{
                if(post._id == action.payload._id){
                    return action.payload;
                }else{
                    return post;
                }
            })
            state.posts = updatedPosts;
        },
        deletePost:(state,action)=>{
            //remove the post from the redux store
            let updatedPosts = state.posts.filter((post)=>{
                return post._id != action.payload._id;
            });
            state.posts = updatedPosts;
        }
    }
});

//export all the reducers for usage
export const {setAllPosts,addPost,updatePost,deletePost} = postsSlice.actions;

export default postsSlice.reducer;

