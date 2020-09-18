import { combineReducers } from 'redux';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer'
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';


const persistConfig= {
    key: 'root',
    storage,  // storage: 'storage'
    whitelist: ['cart'] //user is stored and maintained by firebase

}

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer, //cart: [cartItems, hidden ..] /reducer initial state pake prut v as key
    directory: directoryReducer,
    shop: shopReducer
});

//combineReducers is a ftn that returns an obj 
export default persistReducer(persistConfig, rootReducer);