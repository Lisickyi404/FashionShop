import ItemList from "./ItemList";
import React from "react";
import LikesList from "../../LikesList";
import Sort from "./Sort";
import {
    BrowserRouter,
    Routes,
    Route,
    useParams
} from "react-router-dom";
export const sortContxet=React.createContext()
function Catalog() {
    const [sort,setSort] = React.useState(1)
    const [itemType,setItemType]=React.useState(1)
    return(
        <sortContxet.Provider value={{sort,setSort,itemType,setItemType}}>

    
    <div className="Catalog">
        <Sort/>
        <ItemList/>
    </div>
    </sortContxet.Provider>


    );
}

export default Catalog;