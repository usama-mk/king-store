import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import './pages/Home/homepage.styles.scss'
import HomePage from './pages/Home/homePage.component';
import ShopPage from './pages/shop/shop.components';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

const HatsPage = () => {
  return (<div>
    <h1>
      HATS PAGE
  </h1>
  </div>)
}


class App extends React.Component {

  constructor() {
    super();
    this.state = {

      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    //subscribe/unsub from authentication, listening to auth
    //checks if the user is login or not, at the starting of app
    //returns user obj if logged in else returns null
    //open method, triggers on auth change(signin/out) and on refresh-rerender
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //if userauth(userRef actually) is true, -before this, if no user, user will be created and ref will be returned, if user already availaable in db, the ref will be returned
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => { //exits,id etc like userauth
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()     //user object name,email,createdat, firebase obj data

            }
          });
          console.log('hi');
          console.log(this.state);
        });
      }
      else {
        this.setState({ currentUser: userAuth }); //here userAuth will always be null
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />

        </Switch>
      </div>
    );
  }
}

export default App;
