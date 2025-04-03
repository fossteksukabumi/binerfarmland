import React from "react";
import Shop from "../components/Shop/Shop";
import Footer from "../components/Footer/Footer";

const ShopPage = ({ addToCart, cartItems, removeFromCart }) => {
    return (
        <>
            <Shop addToCart={addToCart} cartItems={cartItems} removeFromCart={removeFromCart} />
            <Footer />
        </>
    );
};

export default ShopPage;