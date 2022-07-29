import { configureStore } from "@reduxjs/toolkit";
import  addItems  from "./reducer.js";
import  LikesItem  from "./likes.js";
import accountsData from './account.js'



export const store = configureStore({
    reducer: {
        cart:addItems,
        likes:LikesItem,
        account:accountsData
    
    },

});
