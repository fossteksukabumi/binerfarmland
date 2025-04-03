import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color:#2f5233;
  color: white;
  padding: 40px 0;
  width: 100%;
`;

export const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

export const FooterSection = styled.div`
  flex: 1;
  min-width: 200px;

  h4 {
    margin-bottom: 15px;
    color: #4CAF50;
    font-size: 1.1rem;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin-bottom: 10px;
    
    a {
      color: white;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #4CAF50;
      }
    }
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 15px;
  ${props => props.centered ? 'justify-content: center;' : ''}

  a {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #4CAF50;
    }
  }
`;

export const CopyrightText = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255,255,255,0.1);
  margin-top: 20px;
  font-size: 0.9rem;
`;

export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
`;