import React from "react";
import {sortContxet} from './Catalog'


function Sort() {
    const sortBy=[{title:'Популярности',findName:'rating'},{title:'Цене',findName:'price'},'Алфавиту']
    const itemTypes=['Всё','Рубашки','Джинсы','Обувь',,'Рубашки','Джинсы','Обувь']
    const {sort,setSort,itemType,setItemType}=React.useContext(sortContxet)


    
    return(

        
        
            <div className='Sort'>
    
    <div className='SortBy'>
        <p>Сортировать по</p>
        <ul>
            {sortBy.map((ob,i)=>
            <li key={i} className={sort==ob.findName?'active':''}
            onClick={()=>setSort(ob.findName)}>
                {ob.title}
                
            </li>
            )}
        </ul>
        </div>

        <div className='ItemType SortBy'>
        <p>Вы ищите</p>
        <ul>
            {itemTypes.map((ob,i)=>
            <li key={i}
            className={itemType==i?'active':''}
            onClick={()=>setItemType(i)}>
                {ob}
            </li>)}
        </ul>
        </div>
    
    </div>
    )
}

export default Sort;