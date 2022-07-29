import ImageItem from './img/ItemImg.png';
import ItemLike from './img/ItemLike.svg';
import ItemBasket from './img/ItemBasket.svg';
import LikeActive from './img/likeActive.svg'
import React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import ItemCard from "../ItemCard/ItemCard";
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";
import { addItem, deleteItem,minusItem,plusItem} from '../../redux/reducer';
import { loginContext } from '../../App';
import {LikesItem,DislikeItem} from '../../redux/likes';

function Item(props){

    const item=props.item
    const likingItems=useSelector(state=>state.likes.LikesItems)
    const itemId=item.id

    const {login,setLogin,setChek} = React.useContext(loginContext)
    

    const dispatch = useDispatch()
    const [like,setLike]=React.useState(Boolean(useSelector(state=>state.likes.LikesItems).find(ob=>ob.id===itemId)))
    const [buy,setBuy] = React.useState(Boolean(useSelector(state=>state.cart.itemsInCart).find(ob=>ob.id===itemId)))

    const clickShop = () => {
        console.log(item)
        if (buy==true){
            
            dispatch(deleteItem(item))
            setBuy(false)
        }
        if (buy==false){
            let ItemInCard=item
            ItemInCard.moreColros=item.color
            ItemInCard.moreSizes=item.size
            ItemInCard.color=item.color[0]
            ItemInCard.size=item.size[0]
            dispatch(addItem(ItemInCard))
            setBuy(true)
        }
        
        
    }

    
    const clickLike = () => {

            if (login==false){
                setChek(true)
            }
            else
        { dispatch(LikesItem(item)) 
            setLike(!like)}
    }

    
    

    return(

    

        <div className='Item'>
        

        <img className='mainImg' src={ImageItem} width={301} height={339}></img>

        <div className='itemAbout'>
            <div >
            <span>{item.name}</span>
            <p>{item.price}</p>
        </div>

            <div className='itemButtons'>
                <img  src={like ? LikeActive : ItemLike} width={26} height={26} onClick={()=>clickLike()}></img>
                <img className={buy ? 'buttonActive' :''} src={ItemBasket} width={26} height={26} onClick={()=> clickShop() }></img>
            </div>
        </div>
        <Link  to={`/itemCard/${item.id}`}>
        <button>Подробнее</button>
        </Link>
    

        </div>

    )
}

export default Item;