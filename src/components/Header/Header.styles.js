import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #2f5233;
  color: white;
  position: relative;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  font-size: 1.5rem;
  font-weight: bold;

  img {
    height: 40px;
    width: auto;
    margin-right: 10px;
  }

  &:hover {
    color: #c7d4b7;
  }

  .land {
    color:rgb(243, 222, 31);
  }

  @media (max-width: 768px) {
    img {
      height: 35px;
    }
  }
`;


// Hamburger Menu (3 bar icon for mobile)
export const HamburgerMenu = styled.div`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 10; /* Pastikan di atas menu */

  span {
    height: 3px;
    width: 100%;
    background-color: white;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
  }

  @media (max-width: 768px) {
    display: flex;
  }
`;


export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: #2f5233;
    z-index: 1000; /* Pastikan menu ada di atas elemen lain */
    transform: ${({ $isOpen }) => ($isOpen ? 'translateY(0)' : 'translateY(-100%)')}; 
    opacity: ${({ $isOpen }) => ($isOpen ? '1' : '0')};
    visibility: ${({ $isOpen }) => ($isOpen ? 'visible' : 'hidden')};
    transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out, visibility 0.3s ease-in-out;
  }
`;

export const NavItem = styled.li`
  margin: 0 15px;

  @media (max-width: 768px) {
    margin: 10px 0;
    text-align: center;
  }
`;

export const NavLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 1.1rem;

  &:hover {
    color: #c7d4b7;
  }

  @media (max-width: 768px) {
    display: block;
    padding: 10px 0;
  }
`;

export const ContactButton = styled.a`
  background-color: #9c6644;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: #c7d4b7;
    color: #2f5233;
  }

  @media (max-width: 768px) {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
`;

export const CartIconContainer = styled.a`
  position: relative;
  margin-left: 0;
  color: #fff;
  font-size: 1.5rem;
  cursor: pointer;

  .cart-count {
    position: absolute;
    top: -8px;
    right: -8px;
    background: red;
    color: white;
    font-size: 0.8rem;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 50%;
  }

  &:hover {
    color: #ffd700;
  }
`;

export const RemoveButton = styled.button`
  background-color: #ff3333;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #cc0000;
  }
`;