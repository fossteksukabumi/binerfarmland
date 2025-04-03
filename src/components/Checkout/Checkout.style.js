import styled from "styled-components";

// Main Container
export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  gap: 30px;
  
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

// Left side of checkout
export const CheckoutLeft = styled.div`
  flex: 1.5;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  h5 {
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 600;
    color: #333;
  }

  select {
    width: 100%;
    padding: 12px 15px;
    border-radius: 8px;
    border: 1px solid #e1e1e1;
    background-color: #f9f9f9;
    font-size: 15px;
    margin-bottom: 15px;
    transition: all 0.3s ease;
    
    &:focus {
      border-color: #4a90e2;
      outline: none;
      box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
    }
  }
  
  button {
    background-color: #4a90e2;
    color: white;
    border: none;
    border-radius: 8px;
    padding: 12px 20px;
    font-size: 15px;
    cursor: pointer;
    transition: all 0.3s ease;
    
    &:hover {
      background-color: #357abD;
    }
  }
`;

// Right side with cart summary
export const CheckoutRight = styled.div`
  flex: 1;
  background-color: #ffffff;
  padding: 25px;
  border-radius: 10px;
  height: fit-content;
  position: sticky;
  top: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  
  h5 {
    font-size: 18px;
    margin-bottom: 15px;
    font-weight: 600;
    color: #333;
  }
  
  @media (max-width: 768px) {
    position: relative;
    top: 0;
  }
`;

// Summary section for totals
export const SummarySection = styled.div`
  margin-top: 20px;
  border-top: 1px solid #e1e1e1;
  padding-top: 15px;
`;

// Row for price breakdown
export const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: ${props => props.isTotal ? '18px' : '16px'};
  font-weight: ${props => props.isTotal ? '600' : '400'};
  color: ${props => props.isTotal ? '#111' : '#333'};
  
  &:last-child {
    margin-top: ${props => props.isTotal ? '15px' : '10px'};
    padding-top: ${props => props.isTotal ? '15px' : '0'};
    border-top: ${props => props.isTotal ? '1px solid #e1e1e1' : 'none'};
  }
`;

// Label for price breakdown
export const SummaryLabel = styled.span`
  text-align: left;
`;

// Price value
export const SummaryValue = styled.span`
  text-align: right;
`;

// Input group for form fields
export const InputGroup = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 15px;
  align-items: center;
  
  &:has(input[type="checkbox"]) {
    gap: 10px;
  }
  
  @media (max-width: 480px) {
    flex-direction: ${props => props.children && props.children.length > 1 ? 'column' : 'row'};
    gap: 10px;
  }
`;

// Form input
export const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  border-radius: 8px;
  border: 1px solid #e1e1e1;
  background-color: #f9f9f9;
  font-size: 15px;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #4a90e2;
    outline: none;
    box-shadow: 0 0 0 2px rgba(74, 144, 226, 0.2);
  }
  
  &::placeholder {
    color: #aaa;
  }
`;

// Form label
export const Label = styled.label`
  font-size: 14px;
  color: #555;
  margin-bottom: 5px;
  display: ${props => props.children && props.children.includes('Simpan informasi') ? 'inline' : 'block'};
`;

// Payment method section
export const PaymentMethod = styled.div`
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #e1e1e1;
  
  label {
    display: flex;
    align-items: center;
    margin: 10px 0;
    cursor: pointer;
    
    input {
      margin-right: 10px;
    }
  }
  
  div {
    margin-top: 15px;
    padding: 15px;
    background-color: #f9f9f9;
    border-radius: 8px;
    text-align: center;
    
    p {
      margin: 10px 0;
    }
    
    img {
      max-width: 200px;
      margin: 15px auto;
      display: block;
    }
  }
`;

// Cart list
export const CartList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;
  max-height: 300px;
  overflow-y: auto;
  border-bottom: 1px solid #e1e1e1;
  padding-bottom: 10px;
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 5px;
  }
  
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  
  &::-webkit-scrollbar-thumb {
    background: #ddd;
    border-radius: 10px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background: #ccc;
  }
`;

// Cart item
export const CartItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f1;
  
  &:last-child {
    border-bottom: none;
  }
`;

// Product image in cart
export const ProductImage = styled.img`
  width: 70px;
  height: 70px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 15px;
  border: 1px solid #eee;
`;

// Product details container
export const ProductDetails = styled.div`
  flex: 1;
`;

// Product name
export const ProductName = styled.p`
  font-size: 15px;
  margin: 0 0 5px 0;
  color: #333;
`;

// Product price
export const ProductPrice = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #4a90e2;
  margin: 0;
`;

// Checkout button
export const CheckoutButton = styled.button`
  width: 100%;
  padding: 15px;
  background-color: #4a90e2;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    background-color: #357abD;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(74, 144, 226, 0.25);
  }
  
  &:active {
    transform: translateY(0);
  }
`;