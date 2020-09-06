import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'

//combineReducers is a ftn that returns an obj 
export default combineReducers({
    user: userReducer,
    cart: cartReducer //cart: [cartItems, hidden ..] /reducer initial state pake prut v as key
});