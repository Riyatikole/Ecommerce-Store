import React, {useEffect} from 'react'
import { Link, useParams, useLocation, useNavigate  } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import { addToCart } from '../actions/cartActions';
import { FormControl, InputLabel, Select, MenuItem, Button, Grid } from '@mui/material';


function AddToCart() {
    const productId = useParams();
    const location = useLocation(); 
    const qty = new URLSearchParams(location.search).get('qty'); 
    const dispatch = useDispatch();
    const history = useNavigate();

    const cart = useSelector(state => state.cart)
    const {cartItems} = cart

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    },[dispatch, productId, qty])

    const handleAddToCart = () => {
      history(`/shipping`);
    }
    
  return (
    <><div>
      Cart
    </div><Button
      variant="contained"
      disableElevation
      onClick={handleAddToCart}
    >
        Check out
      </Button></>
  )
}

export default AddToCart
