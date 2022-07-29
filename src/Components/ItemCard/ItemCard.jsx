
import {useParams} from "react-router-dom";
import { addItem,deleteItem } from '../../redux/reducer';
import { useSelector,useDispatch } from 'react-redux';
import React from "react";
import mainImg from './MainImgCard.png';
import img1 from './img/1.png';
import img2 from './img/22.png';
import img3 from './img/3.png';
import img4 from './img/4.png';
import './ItemCard.scss';

function ItemCard() {

    const dispatch = useDispatch();
    const [item,setItem] = React.useState(null)

    const {id} = useParams();

    const[color,setColor] = React.useState(0)
    const[sizeChs,setSizesChs] = React.useState(0)
    
    React.useEffect(()=>{
        setItem(null)
        fetch(`https://62ae2e71645d00a28a05abfe.mockapi.io/items/?id=${id}`)
        .then((res) => res.json())
        .then((result)=>setItem(result[0]))
        },[])  
    const product = {
        images:[mainImg,img1,img2,img3,img4]
    }

    const addItm = () =>{ 
        let ItemInCard=item 
        ItemInCard.size=item.size[sizeChs]
        ItemInCard.color=item.color[color]
        ItemInCard.moreColros=item.color
        dispatch(addItem(ItemInCard))
    }

    if (item==null){
        return (
    
            <div className='ItemCard'>
                <h2>падаждите</h2>
            </div>
        
        )
    }

    if (item!==null){
        return(
            <div className='ItemCard'>
            <div className='CardHeader'>
            <p className='NameProduct'>{item.artcl} </p>
            <p className='ArticulProduct'>{`Арт ${item.artcl}`}</p>
        </div>

        <div className='CardMain'>

            <div className='mainLeft'>
                <img src={product.images[0]} width={572} height={575}/>
                <ul className='imgList'>
                    {product.images.map((image,i)=>
                    <li key={(i+1)*43}>
                        <img src={image} width={131} height={110}/>
                    </li>)}
                </ul>
            </div>

            <div className='mainRight'>
                    <p>{`${item.price} руб`}</p>

                    <div className='itemColors'>
                        <span>Цвета</span>
                        <ul>
                            {item.color.map((clr,i)=>
                            <li className={color==i ? 'active' : ''} onClick={()=>setColor(i)} key={i}>
                                <p  style={{backgroundColor:clr,width:30,height:30,borderRadius:20}}></p>
                            </li>)}
                        </ul>


                        <span>Размер</span>
                        <ul>
                            {item.size.map((sz,i)=>
                            <li className={sizeChs==i ? 'active' : ''} key={i} onClick={()=>setSizesChs(i)}>
                            <h3>{sz}</h3>
                            </li>)}
                        </ul>
                    </div>

                    <button onClick={()=>addItm()}>Добавить в корзину</button>
            </div>
        </div>
        </div>
        )
    }

    ;
}


export default ItemCard;