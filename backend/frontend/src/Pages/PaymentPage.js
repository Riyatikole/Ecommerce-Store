
import React, { useState } from 'react';
import { FormControl, Checkbox,FormControlLabel, TextField, Button, FormLabel, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../actions/cartActions';

function PaymentPage() {

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch();
    const history = useNavigate();

    if(!shippingAddress.address){
        history('/shipping')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        history('/placeorder')
        

    }
  return (
    <><CheckoutSteps step1 step2 step3/>
    <form onSubmit={handleSubmit}>
    <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Paypal or Credit Card"
            id="paypal"
            name='paymentMethod'
            checked
            onChange={(e) => setPaymentMethod(e.target.value)}
          />
<Button type="submit">Continue</Button>
    </form>
    </>
  )
}

export default PaymentPage
