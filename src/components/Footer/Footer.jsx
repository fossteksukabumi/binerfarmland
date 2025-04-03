import React from 'react';
import { 
  FooterContainer, 
  FooterContent, 
  FooterSection, 
  SocialIcons, 
  CopyrightText 
} from './Footer.style';
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedin 
} from 'react-icons/fa';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>Tentang Kami</h4>
          <p>Toko online terpercaya untuk kebutuhan peternakan anda.</p>
        </FooterSection>

        <FooterSection>
          <h4>Layanan</h4>
          <ul>
            <li><a href="#">Produk</a></li>
            <li><a href="#">Konsultasi</a></li>
            <li><a href="#">Pengiriman</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Hubungi Kami</h4>
          <ul>
            <li>Email: support@tokopeternak.com</li>
            <li>Telepon: +62 888-9999-0000</li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Ikuti Kami</h4>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>

      <CopyrightText>
        © 2025 Biner Farm Land. All Rights Reserved.
      </CopyrightText>
    </FooterContainer>
  );
};

export default Footer;