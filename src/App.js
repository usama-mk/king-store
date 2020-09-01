import React from 'react';
import {Switch, Route} from 'react-router-dom';
import './App.css';
import './pages/Home/homepage.styles.scss'
import HomePage from './pages/Home/homePage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth} from './firebase/firebase.utils';

const HatsPage=()=>{
return (<div>
  <h1>
    HATS PAGE
  </h1>
</div>)
}


class App extends React.Component {

constructor(){
  super();
  this.state={

    currentUser: null
  }
}

unsubscribeFromAuth=null;

componentDidMount(){
  //subscribe/unsub from authentication, listening to auth
  //checks if the user is login or not, at the starting of app
  //returns user obj if logged in else returns null
  this.unsubscribeFromAuth= auth.onAuthStateChanged(user=>{
    this.setState({currentUser: user}); 
    console.log(user);
  })
}

componentWillUnmount(){
  this.unsubscribeFromAuth();
}

 render(){
  return (
    <div>
      <Header currentUser={this.state.currentUser} />
      <Switch>
   <Route exact path='/' component={HomePage} />
   <Route path='/shop' component={ShopPage}/>
   <Route path='/signin' component={SignInAndSignUpPage}/>

      </Switch>
    </div>
  );
 }
}

export default App;
