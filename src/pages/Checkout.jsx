import React from "react";
import Checkout from "../components/Checkout/Checkout";
import Footer from "../components/Footer/Footer";

const CheckoutPage = ({ cartItems, removeFromCart }) => {
    return (
        <>
            <Checkout cartItems={cartItems} removeFromCart={removeFromCart} />
            <Footer />
        </>
    );
};

export default CheckoutPage;