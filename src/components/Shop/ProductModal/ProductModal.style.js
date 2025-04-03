import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background-color: white;
  border-radius: 12px;
  width: 90%;
  max-width: 600px;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  
  @media (max-width: 768px) {
    width: 95%;
    margin: 0 10px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
  
  h2 {
    margin: 0;
    font-size: 1.2rem;
    color: #333;
  }
`;

export const CloseButton = styled.button`
  background: none;
  border: none;
  font-size: 1.5rem;
  color: #666;
  cursor: pointer;
  transition: color 0.3s ease;
  
  &:hover {
    color: #333;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  padding: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ProductImage = styled.img`
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
  
  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 15px;
    width: 250px;
    height: 250px;
  }
`;

export const ProductInfo = styled.div`
  flex: 1;
  
  p {
    margin-bottom: 10px;
    line-height: 1.5;
    color: #555;
  }
  
  strong {
    color: #333;
  }
`;

export const QuantityContainer = styled.div`
  margin: 15px 0;
  
  p {
    margin-bottom: 10px;
  }
  
  div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const QuantityButton = styled.button`
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #e0e0e0;
  }
`;

export const QuantityInput = styled.input`
  width: 50px;
  height: 40px;
  text-align: center;
  border: 1px solid #ddd;
  margin: 0 10px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 10px;
  
  button {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.3s ease;
    
    &:first-child {
      background-color: #f0f0f0;
      color: #333;
      
      &:hover {
        background-color: #e0e0e0;
      }
    }
    
    &:last-child {
      background-color: #4CAF50;
      color: white;
      
      &:hover {
        background-color: #45a049;
      }
    }
  }
  
  @media (max-width: 480px) {
    flex-direction: column;
    
    button {
      margin-bottom: 10px;
    }
  }
`;

export default {
  ModalOverlay,
  ModalContent,
  ModalHeader,
  CloseButton,
  ModalBody,
  ProductImage,
  ProductInfo,
  QuantityContainer,
  QuantityButton,
  QuantityInput,
  ActionButtons
};