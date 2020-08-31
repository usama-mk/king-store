import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import './pages/Home/homepage.styles.scss'
import HomePage from './pages/Home/homePage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';


const HatsPage=()=>{
return (<div>
  <h1>
    HATS PAGE
  </h1>
</div>)
}


function App() {
  return (
    <div>
      <Header/>
      <Switch>
   <Route exact path='/' component={HomePage} />
   <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
