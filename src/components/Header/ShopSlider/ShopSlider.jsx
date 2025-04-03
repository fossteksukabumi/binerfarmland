import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaTimes, FaTrash } from "react-icons/fa";
import { SliderContainer, CloseButton, ShopItems, RemoveButton, CheckoutButton } from "./ShopSlider.style";

const ShopSlider = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const navigate = useNavigate(); // Inisialisasi useNavigate

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      alert("Keranjang Anda kosong. Tambahkan item sebelum checkout.");
      return;
    }

    // Navigasi ke halaman checkout dan meneruskan cartItems
    navigate('/checkout', { state: { cartItems } });
  };

  const itemCount = cartItems ? cartItems.length : 0;

  return (
    <SliderContainer $isOpen={isOpen}>
      <CloseButton onClick={onClose}>
        <FaTimes size={20} />
      </CloseButton>
      <h2>Keranjang</h2>

      <ShopItems>
        {itemCount === 0 ? (
          <p>Keranjang kosong.</p>
        ) : (
          cartItems.map((item, index) => (
            <div className="item" key={index}>
              <img src={item.image} alt={item.name} />
              <p>{item.name} - Rp{item.price.toLocaleString()}</p>
              <p>Jumlah: {item.quantity}</p>
              <RemoveButton onClick={() => removeFromCart(item.id)}>
                <FaTrash />
              </RemoveButton>
            </div>
          ))
        )}
      </ShopItems>

      {itemCount > 0 && (
        <CheckoutButton onClick={handleCheckout}>Checkout</CheckoutButton>
      )}
    </SliderContainer>
  );
};

export default ShopSlider;