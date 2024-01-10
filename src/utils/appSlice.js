import { createSlice } from "@reduxjs/toolkit";

const appSlice=createSlice({
        name:"app",
        initialState:{
                isSideBarOpen:true
        },
        reducers:{
                toggleFunction:(state)=>{state.isSideBarOpen=!state.isSideBarOpen}
        }
})

export default appSlice.reducer;
export const{toggleFunction}=appSlice.actions