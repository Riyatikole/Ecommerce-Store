import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { thunk } from 'redux-thunk';
import { productListReducer, productDetailsReducer } from './reducers/productReducers';
import { cartReducer } from './reducers/cartReducers';
import { orderCreateReducer } from './reducers/orderReducers';

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  orderCreate: orderCreateReducer
});

const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];

  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : [];  

const initialState = {
  cart: { cartItems: cartItemsFromStorage, 
  shippingAddress: shippingAddressFromStorage },
  
};

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat([thunk]);

const store = configureStore({
  reducer: rootReducer,
  middleware,
  preloadedState: initialState,
});

export default store;
