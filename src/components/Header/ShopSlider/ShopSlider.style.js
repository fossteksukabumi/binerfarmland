import styled from 'styled-components';

export const SliderContainer = styled.div`
  position: fixed;
  top: 0;
  right: ${({ $isOpen }) => ($isOpen ? '0' : '-100%')}; /* Ubah left menjadi right */
  width: 300px;
  height: 100vh;
  background: #fff;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.3); /* Arah bayangan ke kiri */
  padding: 20px;
  transition: right 0.3s ease-in-out; /* Ubah transition ke right */
  z-index: 1000;

  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
`;


export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

export const ShopItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;

  .item {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
  }
`;

export const CheckoutButton = styled.button`
  background-color:rgb(18, 218, 78);
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
  font-size: 16px;

  &:hover {
    background-color: #cc5200;
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
  margin-left: 10px;

  &:hover {
    background-color: #cc0000;
  }
`;