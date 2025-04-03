import styled from 'styled-components';
import bg from '../../assets/Images/Cover/a.png';

export const CoverContainer = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-image: url(${bg}); /* Ganti dengan jalur gambar Anda */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  
  /* Overlay Transparan */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Ganti warna dan opacity sesuai kebutuhan */
  }

  @media (max-width: 1024px) {
    height: 90vh;
    background-attachment: scroll;
  }

  @media (max-width: 768px) {
    height: 70vh;
    background-attachment: scroll;
  }

  @media (max-width: 480px) {
    height: 60vh;
    background-attachment: scroll;
  }
`;


export const CoverContent = styled.div`
  position: relative; /* Ini memastikan elemen muncul di atas overlay */
  text-align: center;
  color: white;
  padding: 20px;
  border-radius: 10px;
  width: 80%; /* Responsive width */

  @media (max-width: 1024px) {
    padding: 18px;
    width: 85%;
  }

  @media (max-width: 768px) {
    padding: 15px;
    width: 90%;
  }

  @media (max-width: 480px) {
    padding: 10px;
    width: 95%;
  }
`;


export const CoverHeading = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 20px;

  @media (max-width: 1024px) {
    font-size: 3rem;
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 480px) {
    font-size: 1.8rem;
  }
`;

export const CoverText = styled.p`
  font-size: 1.5rem;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    font-size: 1.3rem;
    margin-bottom: 25px;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
    margin-bottom: 15px;
  }
`;

export const CoverButton = styled.a`
  background-color:#2f5233;
  color: white;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: bold;

  &:hover {
    background-color: #c7d4b7;
    color: #2f5233;
  }

  @media (max-width: 1024px) {
    font-size: 1.1rem;
    padding: 9px 18px;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 8px 15px;
  }

  @media (max-width: 480px) {
    font-size: 0.9rem;
    padding: 7px 12px;
  }
`;
