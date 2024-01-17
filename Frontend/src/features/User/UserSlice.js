import { createSlice } from "@reduxjs/toolkit";

const getUser = ()=>{
    return JSON.parse(localStorage.getItem("user")) || null;
}

const defualtState = {
    user :getUser()
}

const userSlice = createSlice({
    name:'user',
    initialState:defualtState,
    reducers:{
        googleloginReducer:(state,action)=>{
            //reducer to login the user after google o auth
            const user = {...action.payload};
            state.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        logoutUserReducer:(state)=>{
            state.user = null;
            localStorage.removeItem('user');
        }
    }
});

export const {googleloginReducer,logoutUserReducer} = userSlice.actions;
export default userSlice.reducer; 
