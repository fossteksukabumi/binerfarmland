import React, { useState } from "react";
import {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  ProductInfo,
  QuantityContainer,
  QuantityButton,
  QuantityInput,
  ActionButtons,
  ProductImage
} from "./ProductModal.style";

const ProductModal = ({ product, onClose, onAddToCart, onBuyNow }) => {
  const [quantity, setQuantity] = useState(1);

  // Menentukan satuan berdasarkan kategori produk
  const getUnit = (category) => {
    switch (category) {
      case "Telur":
      case "Daging":
      case "Pakan":
        return "Kg";
      case "Vitamin":
        return "Liter";
      case "Bibit":
        return "Ekor";
      default:
        return "";
    }
  };

  // Fungsi untuk menambah dan mengurangi quantity
  const increaseQuantity = () => setQuantity((prev) => prev + 1);
  const decreaseQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <ModalOverlay>
      <ModalContent>
        <ModalHeader>
          <h2>{product.name}</h2>
          <CloseButton onClick={onClose}>&times;</CloseButton>
        </ModalHeader>
        <ModalBody>
          <ProductImage src={product.image} alt={product.name} />
          <ProductInfo>
            <p><strong>Informasi:</strong> {product.description}</p>
            <p><strong>Stok:</strong> {product.stock} {getUnit(product.category)}</p>
            <p><strong>Harga:</strong> Rp {product.price.toLocaleString()}</p>
            
            <QuantityContainer>
              <p>Jumlah Pembelian {getUnit(product.category)}:</p>
              <div>
                <QuantityButton onClick={decreaseQuantity}>-</QuantityButton>
                <QuantityInput type="number" value={quantity} readOnly />
                <QuantityButton onClick={increaseQuantity}>+</QuantityButton>
              </div>
            </QuantityContainer>
            
            <ActionButtons>
              <button onClick={() => { onAddToCart(product, quantity); onClose(); }}>
                Tambahkan ke Keranjang
              </button>
              <button onClick={() => onBuyNow(product, quantity)}>
                Beli Sekarang
              </button>
            </ActionButtons>
          </ProductInfo>
        </ModalBody>
      </ModalContent>
    </ModalOverlay>
  );
};

export default ProductModal;
