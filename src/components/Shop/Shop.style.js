import styled from 'styled-components';
import coverImg from '../../assets/Images/Cover/peternakan.webp';

export const ShopContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
  background-color: transparent;
  height: 100%;
`;

export const ContentWrapper = styled.div`
  display: flex;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`;

export const Sidebar = styled.section`
  flex: 0 0 300px;
  background-color: #f9f9f9;
  padding: 30px 20px;
  border-right: 1px solid #e9e9e9;

  @media (max-width: 992px) {
    flex: 1;
    border-right: none;
    border-bottom: 1px solid #e9e9e9;
  }
`;

export const ProductSection = styled.section`
  flex: 1;
  padding: 30px;
  background-color: white;

  @media (max-width: 992px) {
    padding: 20px;
  }
`;

export const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 25px;
  margin-bottom: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const SectionTitle = styled.h2`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 30px;
  font-size: 2rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 70px;
    height: 4px;
    background-color: #4CAF50;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 50px;
  background-color: #f9f9f9;
  border-radius: 10px;

  p {
    color: #7f8c8d;
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  button {
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 12px 25px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease;

    &:hover {
      background-color: #45a049;
    }
  }
`;

export const PaginationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 20px 0;
`;

export const CoverSection = styled.div`
  position: relative;
  height: 400px;
  background-image: url(${coverImg}); // Replace with your cover image
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 30px;
  border-radius: 10px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.6);
  }

  .cover-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
    padding: 0 20px;
  }

  h1 {
    font-size: 3rem;
    margin-bottom: 20px;
  }

  p {
    font-size: 1.2rem;
    margin-bottom: 30px;
  }

  @media (max-width: 768px) {
    height: 300px;

    h1 {
      font-size: 2rem;
    }

    p {
      font-size: 1rem;
    }
  }
`;
