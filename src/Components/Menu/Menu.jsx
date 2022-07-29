
import Basket from './img/Basket.svg';
import Ava from './img/AvaUsers.svg';
import Coins from './img/coins.svg';
import Exit from './img/exit.svg';
import Like from './img/Like.svg';
import Eys from './img/eys.svg';
import ListLogo from './img/listLogo.svg';
import React, { useState } from 'react';
import './style.scss'
import { useSelector,useDispatch } from 'react-redux';
import {
  Link,
} from "react-router-dom";

function Menu(){

    const [menuChs, setMenuChs] = useState(0);
    const [click, setOnClick] = useState(false)
    let likeItems=useSelector(state=>state.likes.LikesItems)
    let cartItems=useSelector(state=>state.cart.itemsInCart)
    let coutItems=likeItems.length
    let coutCartItmes=cartItems.length
    const menu=[
      {
        Name:'Каталог',
        logo:Eys,
        linkName:'catalog'
      },
    
      {
        Name:'Избранное',
        logo:Like,
        linkName:'likes',
        cout:coutItems
      },
      {
        Name:'Корзина',
        logo:Basket,
        linkName:'basket',
        cout:coutCartItmes
      },
      {
        Name:'Бонусы',
        logo:Coins,
        linkName:"bonuses"
      },
      {
        Name:'Личные данные',
        logo:Ava,
        linkName:'profile'
      },
      {
        Name:'История покупок',
        logo:ListLogo,
        linkName:'history'
      },
      {
        Name:'Выйти',
        logo:Exit,
        linkName:"exit"
      },
      {
        Name:'Войти',
        logo:Exit,
        linkName:"login"
      },
      {
        Name:'Регситрация',
        logo:Exit,
        linkName:"registr"
      },
    ]
    
    return(
        <div>
      
    <ul className='mainMenu'>


      {menu.map((e,i)=>  
      <Link to={`/menu=${e.linkName}`}  key={i} style={{ textDecoration: 'none' }}>
    <li className={menuChs==i ? 'active' : 'noactiv'} key={i} onClick={()=>setMenuChs(i)}>
    <img src={e.logo} width={25} height={25} alt='dont worry'/>
    <span>{e.Name}</span>
    <span className={e.cout>0 ? 'visible' : 'invisible' }>{e.cout}</span>
    </li></Link> )}
    
  


        </ul>

        </div>
    );
}

export default Menu;

