import {configureStore} from '@reduxjs/toolkit';

//import the reducers over here
import postsReducer from './features/Posts/PostsSlice';


export const store = configureStore({
    reducer:{
        postsState:postsReducer
    }
})