import Item from "../Item/Item"
import React from "react"
import MyLoader from "../FakeItem/FakeItem"
import {sortContxet} from './Catalog'

function ItemList() {
    const {sort,setSort}=React.useContext(sortContxet)
    const {itemType,setItemType}=React.useContext(sortContxet)
    const [page,setPage]=React.useState('')
    const [items,setItems]=React.useState([])
    const [loading,setLoading] = React.useState(true)

    React.useEffect(()=>{
    
        fetch(`https://62ae2e71645d00a28a05abfe.mockapi.io/items?type=${itemType}&sortBy=${sort}&order=desc/?page=1&limit=${page}`)
        .then (setLoading(true))
        .then( (res) => res.json())
        .then((arr)=>{
        setLoading(false)
        setItems(arr)   
        });},[page,sort,itemType])
    return(
        <div className="ItemList">
        {loading ? [...new Array(8)].map((_,index)=>
        <MyLoader key={index}/>) :
        
            items.map((a,i)=>(
                <Item
                key={i*33}
                item={a}
                />
            ))}
        <span className="LoadNewPage" onClick={()=>setPage(page+5)}>Загрузить ещё</span>
        </div>

    );
}

export default ItemList;