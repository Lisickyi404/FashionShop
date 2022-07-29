

import { createSlice } from "@reduxjs/toolkit";

export const accountSlice = createSlice({
    name:'account',
    initialState:{accountsData:{
    
    }},
    reducers:
    
    {
        setData:(state,action)=>{
            state.accountsData=action.payload
    }
    /**      const dataType=action.payload[0]
            const dataValue=action.payload[1]
            state.accountsData[dataType=dataValue*/
}})

export const {setData} = accountSlice.actions;
export default accountSlice.reducer;