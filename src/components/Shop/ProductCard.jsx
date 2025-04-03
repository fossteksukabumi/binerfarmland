import React from "react";
import { Card, ProductImage, ProductDetails, BuyButton } from "./ProductCard.style";

const ProductCard = ({ product, onBuyClick }) => {
  return (
    <Card>
      <ProductImage src={product.image} alt={product.name} />
      <ProductDetails>
        <h3>{product.name}</h3>
        <p>Rp {product.price.toLocaleString()}</p>
        <BuyButton onClick={onBuyClick}>Beli Sekarang</BuyButton>
      </ProductDetails>
    </Card>
  );
};

export default ProductCard;
