import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { productListReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';

const rootReducer = combineReducers({
    productList: productListReducer,
    cart: cartReducer,
});


  const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

 


const initialState = {
  cart:{cartItems: cartItemsFromStorage}
};

const middleware = [thunk]; // Use 'thunk' directly

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
  preloadedState: initialState,
});

export default store;
