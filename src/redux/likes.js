

import { createSlice } from "@reduxjs/toolkit";

export const LikesSlice = createSlice({
    name:'likes',
    initialState:{LikesItems:[]},
    reducers:
    
    {
        LikesItem:(state,action)=>{
            const arr=state.LikesItems

            let res=false
            var item=action.payload
    
            for (var i=0;i<arr.length;i++){
                if (action.payload.id == arr[i].id){
                    state.LikesItems.splice(i,1)
                    res=true
                    break
                }
            }
            if (res==false){
                state.LikesItems.push(action.payload)
            }
    },

}})

export const {LikesItem,DislikeItem} = LikesSlice.actions;
export default LikesSlice.reducer;