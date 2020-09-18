import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import rootReducer from './root-reducer';
import {persistStore} from 'redux-persist';

const middlewares=[logger];

export const store= createStore(rootReducer, applyMiddleware(...middlewares));
export const persistor= persistStore(store);


export default {store, persistor}; //for 1 export use default directly