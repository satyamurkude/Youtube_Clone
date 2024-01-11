import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
        name:"app",
        initialState:{
                isSideBarOpen:true
        },
        reducers:{
                toggleFunction:(state)=>{state.isSideBarOpen=!state.isSideBarOpen},
                closeMenu:(state)=>{state.isSideBarOpen=false}
        }
})

export default appSlice.reducer;
export const{toggleFunction,closeMenu}=appSlice.actions