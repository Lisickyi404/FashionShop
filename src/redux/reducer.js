import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
    name:"cart",
    initialState: { itemsInCart: [],},


    reducers: {
        addItem:(state,action)=>{


            let item=action.payload
            state.itemsInCart.push(action.payload)
            
            
            /* for (var i=0;i<arr.length;i++){
                if (action.payload.id == arr[i].id){
                    state.itemsInCart.splice(i,1)
                    res=true
                    break
                }
            }
            if (res==false){
                action.payload.cout=1
                
                state.itemsInCart.push(action.payload)
            }*/
        },
        deleteItem:(state,action)=>{
            var item=action.payload
            for (var i=0;i<state.itemsInCart.length;i++){
                if (item.id == state.itemsInCart[i].id){
                    state.itemsInCart.splice(i,1)
                    
                    break}}
        
        },

        plusItem:(state,action)=>{
            state.itemsInCart[action.payload[0]].cout=action.payload[1]
        },

        minusItem:(state,action)=>{
            action.payload.cout=action.payload
        },
        setCoutItem:(state,action) => {
            action.payload.cout=state
        }
    }
}   
)

export const {addItem, deleteItem,minusItem,plusItem} = basketSlice.actions;
export default basketSlice.reducer;
