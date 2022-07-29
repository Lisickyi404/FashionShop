import Item from "./Components/Item/Item";
import {useDispatch, useSelector} from 'react-redux';
import React from "react";



function LikesList(){
    const items = useSelector(state=>state.likes.LikesItems)
    
    React.useEffect(()=>{
        console.log('изменили')
    },[useSelector(state=>state.likes.LikesItems)])

    

    return(
    <div className="ItemList">
        {items.map((a,i)=>(
            <Item
            key={i}
            item={a}
            />
        ))}
    </div>
    );
}

export default LikesList;