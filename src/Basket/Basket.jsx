import arBack from './img/arBack.svg';
import arTop from './img/arrTop.svg';
import BasketLogo from './img/BasketLogo.svg';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";

import { useSelector,useDispatch } from 'react-redux';
import React from 'react';
import BasketItem from './BasketItem';
import { basketSlice } from '../redux/reducer';
import './style.scss';  
function Basket() {
    
    const items=useSelector(state=>state.cart.itemsInCart)
    const [Price,setPrice] = React.useState(0)

    React.useEffect(()=>{
        const sum=items.reduce((Sum,a)=>Sum+(a.price*a.cout),0)
        setPrice(sum)
    },[items])
    
    return(
        
            <div className='Basket'>
            <div className='BasketHeader'>
                <span>Верннуться назад</span    >
                <p>Корзина</p>
                <img src={BasketLogo} width={27} height={30}></img>
                <h4 className='coutProducts'>1</h4>
            </div>

            <div className='BasketList'>
                {items.map((item,index)=>
                
                <BasketItem
                key={index}
                index={index}
                
                /> 
                )}             
            </div>
            {console.log(items)} 
            <div className='bookingInfo'>
                <h4>Итого</h4>
                <span>{Price}</span>
                <p> Товары: 2шт</p>
            </div> 
            <Link to={"/booking"}>
            <button>Заказать</button> 
            </Link>
        </div>
    
    );
}

export default Basket;