import React, { useState } from 'react';
import { FormControl, TextField, Button, FormLabel, Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { saveShippingAddress } from '../actions/cartActions';
import { useNavigate } from 'react-router-dom';
import CheckoutSteps from '../components/CheckoutSteps';

function ShippingPage() {

    const cart = useSelector(state => state.cart)
    const { shippingAddress } = cart

    const dispatch = useDispatch();
    const history = useNavigate();

    const [address, setAddress] = useState(shippingAddress.address);
    const [city, setCity] = useState(shippingAddress.city);
    const [postalCode, setPostalCode] = useState(shippingAddress.postalCode);
    const [country, setCountry] = useState(shippingAddress.country);

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleCityChange = (event) => {
        setCity(event.target.value);
    };

    const handlePostalCodeChange = (event) => {
        setPostalCode(event.target.value);
    };

    const handleCountryChange = (event) => {
        setCountry(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(saveShippingAddress({address, city, postalCode, country}))
      
        history(`/payment`);
        // Handle form submission here
    };

    return (
        <Grid
        item
        xs={12}
        sm={8}
        md={5}
        elevation={6}
        sx={{ display: "flex", flexDirection: "column", p: 5 }}
      >
        <form onSubmit={handleSubmit}>
            <CheckoutSteps step1 step2 />
            <h1>Shipping</h1>
            <Grid>
            <FormControl>
                <FormLabel>Address</FormLabel>
                <TextField
                    id="address"
                    label="Address"
                    type='text'
                    value={address ? address: ''}
                    onChange={handleAddressChange}
                />
            </FormControl>
            </Grid>
            <Grid>
            <FormControl>
            <FormLabel>City</FormLabel>
                <TextField
                    id="city"
                    label="City"
                    type='text'
                    value={city ? city: ''}
                    onChange={handleCityChange}
                />
            </FormControl>
            </Grid>
            <Grid>
            <FormControl>
            <FormLabel>Postal Code</FormLabel>
                <TextField
                    id="postalCode"
                    label="Postal Code"
                    type='text'
                    value={postalCode ? postalCode: ''}
                    onChange={handlePostalCodeChange}
                />
            </FormControl>
            </Grid>
            <Grid>
            <FormControl>
            <FormLabel>Country</FormLabel>
                <TextField
                    id="country"
                    label="Country"
                    type='text'
                    value={country ? country: ''}
                    onChange={handleCountryChange}
                />
            </FormControl>
            </Grid>
            <Grid>
            <Button type="submit">Submit</Button>
            </Grid>
        </form>
        </Grid>
    );
}

export default ShippingPage;
