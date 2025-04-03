import React from 'react';
import { CoverContainer, CoverContent, CoverHeading, CoverText, CoverButton } from './Cover.style';

const CoverSection = () => {
  return (
    <CoverContainer>
      <CoverContent>
        <CoverHeading>Welcome to Biner Farm Land</CoverHeading>
        <CoverText>Where Nature Meets Sustainability</CoverText>
        <CoverButton href="/about">Learn More</CoverButton>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
