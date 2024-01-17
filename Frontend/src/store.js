import { configureStore } from "@reduxjs/toolkit";

//import the reducers over here
import postsReducer from "./features/Posts/PostsSlice";
import userReducer from './features/User/UserSlice';

export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    postsState: postsReducer,
    userState: userReducer
  },
});
