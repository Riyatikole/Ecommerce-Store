import React, {useEffect} from 'react'
import { Link, useParams, useLocation  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';

function AddToCart() {
  //   const productId = useParams();
  //   const location = useLocation(); 
  //   const qty = new URLSearchParams(location.search).get('qty'); 
  //   const dispatch = useDispatch()

  //   const cart = useSelector(state => state.cart)
  //   const {cartItems} = cart

  //   useEffect(() => {
  //       if(productId){
  //           dispatch(addToCart(productId, qty))
  //       }
  //   },[dispatch, productId, qty])
    
  return (
    <div>
      Cart
    </div>
  )
}

export default AddToCart
