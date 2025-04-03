import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  text-align: center;
  padding: 10px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(223, 52, 52, 0.1);
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-bottom: 1px solid #ddd;

  &:hover {
    transform: scale(1.1);
    transition: transform 0.3s;
  }

`;

export const ProductDetails = styled.div`  // ✅ Pastikan ini ada!
  padding: 10px;
`;

export const BuyButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 10px;
  width: 100%;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;
