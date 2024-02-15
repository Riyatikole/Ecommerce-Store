import React from 'react';
import { Grid, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import CheckoutSteps from '../components/CheckoutSteps';
import Message from '../components/Message';
import { Link } from 'react-router-dom';

function PlaceOrderPage() {
    const cart = useSelector(state => state.cart);



    const handlePlaceOrder = () => {
        console.log("place order")
    }

    return (
        <>
            <CheckoutSteps step1 step2 step3 step4/>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <h2>Shipping</h2>
                    <p>
                        <strong>Shipping: </strong>
                        {cart.shippingAddress.address}, {cart.shippingAddress.city} {' '}
                        {cart.shippingAddress.postalCode}, {cart.shippingAddress.country}
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <h2>Payment Method</h2>
                    <p>
                        <strong>Method: </strong>
                        {cart.paymentMethod}
                    </p>
                </Grid>
                <Grid item xs={12}>
                    <h2>Order Items</h2>
                    {cart.cartItems.length === 0 ? (
                        <Message variant="info">
                            Your cart is empty
                        </Message>
                    ) : (
                        <Grid container spacing={2}>
                            {cart.cartItems.map((item, index) => (
                                <Grid item key={index} xs={12}>
                                    <Link to={`/product/${item.product}`}>{item.name}</Link>
                                    <br />
                                    {item.qty} X ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                </Grid>
                            ))}
                        </Grid>
                    )}
                    {/* {cart.itemPrice} */}
                     <Button type="submit"
                     disabled={cart.cartItems === 0}
                     onClick={handlePlaceOrder}>Place Order</Button>
                </Grid>
            </Grid>
        </>
    );
}

export default PlaceOrderPage;
