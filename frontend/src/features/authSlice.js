import {createSlice} from "@reduxjs/toolkit";

//this is initial state for the redux toolkit
const initialState = {
    user:null,
    isAuthenticated:false
}
//creating slice for react toolkit
const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{  //here are reducers function these can initialize anywhere and we can import it . key:function
        userLoggedIn:(state,action)=>{
            state.user = action.payload.user
            state.isAuthenticated = true
        },
        userLoggedOut : (state,)=>{
            state.user = null
            state.isAuthenticated = false
        }
    }
})

export const {userLoggedIn , userLoggedOut} = authSlice.actions;
export default authSlice.reducer;