import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import logoimage from '../../assets/Images/Logo/Logo.png';
import ShopSlider from './ShopSlider/ShopSlider';
import {
  HeaderContainer,
  Logo,
  NavMenu,
  NavItem,
  NavLink,
  HamburgerMenu,
  CartIconContainer
} from './Header.styles';

const Header = ({ cartItems, shopOpen, setShopOpen, removeFromCart }) => {  
  const [isOpen, setIsOpen] = useState(false);
  
  // Pastikan cartItems didefinisikan
  const totalItems = cartItems ? cartItems.reduce((sum, item) => sum + item.quantity, 0) : 0;

  return (
    <>
      <HeaderContainer>
        <Logo href="/">
          <img src={logoimage} alt="FarmBreeder Logo" />
          <span>Biner Farm <span className="land">Land</span></span>
        </Logo>

        <HamburgerMenu onClick={() => setIsOpen(!isOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </HamburgerMenu>

        <NavMenu $isOpen={isOpen}>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/shop">Produk</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">Tentang Kami</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/contact">Contact</NavLink>
          </NavItem>
          <NavItem>
            <CartIconContainer onClick={() => setShopOpen(true)}>
              <FaShoppingCart size={24} />
              {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
            </CartIconContainer>
          </NavItem>
        </NavMenu>
      </HeaderContainer>

      {/* Kirim cartItems ke ShopSlider */}
      <ShopSlider 
        isOpen={shopOpen} 
        onClose={() => setShopOpen(false)} 
        cartItems={cartItems} // Pastikan ini ada
        removeFromCart={removeFromCart} 
      />
    </>
  );
};

export default Header;