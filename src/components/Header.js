import React from 'react';
import { StyledHeadline } from '../styles';

const Header = ({ yearType, year, startYear, endYear }) => {
  return (
    <StyledHeadline>
      MLB Score Frequency{' '}
      {yearType === 'single' ? `for ${year}` : `from ${startYear}-${endYear}`}
    </StyledHeadline>
  );
};

export default Header;
