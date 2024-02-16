import React from 'react';
import { Link } from 'react-router-dom';
import { Tabs, Tab } from '@mui/material';

function CheckoutSteps({ step1, step2, step3, step4 }) {
    return (
        <Tabs
            value={step4 ? 3 : step3 ? 2 : step2 ? 1 : 0}
            indicatorColor="primary"
            textColor="primary"
            centered
            aria-label="checkout steps"
        >
            <Tab
                label="Login"
                component={Link}
                to="/login"
                disabled={!step1}
                tabIndex={-1}
            />
            <Tab
                label="Shipping"
                component={Link}
                to="/shipping"
                disabled={!step2}
                tabIndex={-1}
            />
            <Tab
                label="Payment"
                component={Link}
                to="/payment"
                disabled={!step3}
                tabIndex={-1}
            />
            <Tab
                label="Place Order"
                component={Link}
                to="/placeorder"
                disabled={!step4}
                tabIndex={-1}
            />
        </Tabs>
    );
}

export default CheckoutSteps;
