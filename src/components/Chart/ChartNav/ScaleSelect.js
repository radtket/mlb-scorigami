import React from 'react';
import { StyledScaleSelect } from '../../../styles';

const ScaleSelect = ({ onChange, value }) => {
  return (
    <StyledScaleSelect htmlFor="scale-select">
      <select id="scale-select" name="select" {...{ onChange, value }}>
        <option value="single">Single Season</option>
        <option value="range">Range</option>
      </select>
    </StyledScaleSelect>
  );
};

export default ScaleSelect;
