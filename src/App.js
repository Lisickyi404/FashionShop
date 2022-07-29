import {
  BrowserRouter,
  Routes,
  Route,
  useParams
} from "react-router-dom";

import './App.css';
import './style.scss';
import Header from './Components/Header/Header';
import Menu from './Components/Menu/Menu';
import Catalog from "./Components/Catalog/Catalog";
import ItemCard from "./Components/ItemCard/ItemCard";
import Confirm from './Account/Confirm'
import Basket from "./Basket/Basket";
import LikesList from './LikesList'
import Login from './Account/LoginForm'
import Registr from './Account/RegistrForm'
import React, {createContext} from "react";

export const loginContext=React.createContext()

function LoginApp(chek){
  if (chek==true){
      return(
        <Login/>
      )
    
  }
}

function App() {
 
  const [login,setLogin] = React.useState(true)
  const [chek,setChek] = React.useState(false)
  return (
    <loginContext.Provider value={{login,setLogin,setChek}}>
      <div className="wrapper">
     
      <div className="App">
      <Header/>
      <main>
      <Menu/>
        {LoginApp(chek)}

      <div className='mainPage'>
      <Routes>

<Route path="/menu=catalog" element={<Catalog/>}></Route>
  <Route path="/menu=catalog" element={<Catalog/>}></Route>
  <Route path="/menu=basket" element={<Basket/>}></Route>
  <Route path="/menu=likes" element={<LikesList/>}></Route>
  <Route path={`itemCard/:id`} element={<ItemCard/>}/>
  <Route path="/menu=login" element={<Login/>}></Route>
  <Route path="/booking" element={<Registr/>}></Route>
  <Route path="/confirm" element={<Confirm/>}></Route>
</Routes>
      </div>
    

      </main>

    </div>
      </div>
    </loginContext.Provider>
  );
}

export default App;
