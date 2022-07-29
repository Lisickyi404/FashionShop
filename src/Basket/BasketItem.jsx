import DeleteItem from './img/DeleteItemOnBasket.svg';
import exmplImage from './img/exmpl.png';
import LikeOnBasket from './img/LikeOnBasket.svg';
import React, { useEffect } from 'react';
import { plusItem,deleteItem } from '../redux/reducer';
import { LikesItem } from '../redux/likes';
import { useDispatch,useSelector } from 'react-redux';
import LikeLogo from './img/LikeLogo.svg';


function BasketItem(props){
    const dispatch=useDispatch()
   
    const setCout = (a) =>{
        dispatch(plusItem(a))
    }
    
    const handleChangeColor=(event)=>{
        setColor(event.target.value)
    }

    const handleChangeSize=(event)=>{
        setSize(event.target.value)
    }
    
    const item=useSelector(state=>state.cart.itemsInCart[props.index])
    const delItem = () =>{
        dispatch(deleteItem(item))
    }
    const [color,setColor]=React.useState(item.color)
    const [size,setSize]=React.useState(item.size)
    const [price,setPrice] = React.useState(item.price)
    const [like,setLike] = React.useState(Boolean(useSelector(state=>state.likes.LikesItems).find(ob=>ob.id===item.id)))
    const Liking = () =>{
        setLike(!like)
        dispatch(LikesItem(item))
        
    }


    

    return(
        <div className={item.cout!=0?'BasketItem':' BasketItem ItemDel'}>
                    <img className='BasketItemImage' src={exmplImage} width={178} height={165}/>

                    <div className='BasketItemAbout'>
                        <div className='flexing'>
                            <h3>{item.name}</h3>
                            <span>{item.artcl}</span>
                        </div>
                        <div className='flexing'>
                            <p>{color}</p>
                            <div className='selected'>
                            <select name="colors" onChange={(e)=>handleChangeColor(e)}>
                            <option value={item.moreColros[1]}>{item.moreColros[1]}</option>
                            <option value={item.moreColros[2]}>{item.moreColros[2]}</option>
                            <option value={item.moreColros[3]}>{item.moreColros[3]}</option>
                            <option value={item.moreColros[4]}>{item.moreColros[4]}</option>
                            <option value={item.moreColros[5]}>{item.moreColros[5]}</option>
                        </select>
                            </div>
                            <p>{size}</p>
                            <div className='selected'>
                            <select name="sizes" onChange={(e)=>handleChangeSize(e)}>
                            <option value={item.moreSizes[1]}>{item.moreSizes[1]}</option>
                            <option value={item.moreSizes[2]}>{item.moreSizes[2]}</option>
                            <option value={item.moreSizes[3]}>{item.moreSizes[3]}</option>
                            <option value={item.moreSizes[4]}>{item.moreSizes[4]}</option>
                            <option value={item.moreSizes[5]}>{item.moreSizes[5]}</option>
                        </select>
                        </div>
                        </div>
                        <div className='flexing'>
                            <p className='minusBtn buttons' onClick={()=>{setCout(item.cout>0?[props.index,item.cout-1]:'')}}>-</p>
                            <p className='cout'>{item.cout}</p>
                            <p className='plusBtn buttons' onClick={()=>setCout([props.index,item.cout+1])} >+</p>
                        </div>

                        <div className='flexing'>
                            <img src={like?LikeLogo:LikeOnBasket} width={18} height={18} onClick={()=>Liking()}></img>
                            <p>В избранное</p>

                            <img src={DeleteItem} width={18} height={18}></img>
                            <p onClick={()=>delItem(item.index)}>Удалить</p>
                        </div>
                    </div>


                    <div className='ProductInfo'>
                        <h4>Стоймость</h4>
                        <span>{price*item.cout}</span>
                        <p>Информация о доставке</p>
                    </div>

                </div>

    );
    
}


export default BasketItem;