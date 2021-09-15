import React from 'react';
import Slider, { Range, createSliderWithTooltip } from 'rc-slider';
import 'rc-slider/assets/index.css';

import { FIRST_YEAR, LAST_YEAR } from '../../../utility/constants';
import { StyledYearPicker } from '../../../styles';

const RangeWithToolTip = createSliderWithTooltip(Range);
const SliderWithToolTip = createSliderWithTooltip(Slider);

const YearPicker = ({ yearType, handleInputChange, defaultValue }) => {
  const Component =
    yearType === 'single' ? SliderWithToolTip : RangeWithToolTip;

  return (
    <StyledYearPicker>
      <Component
        activeDotStyle={{ borderColor: '#e9e9e9' }}
        defaultValue={defaultValue}
        marks={{
          1871: 1871,
          1900: 1900,
          1925: 1925,
          1950: 1950,
          1975: 1975,
          2000: 2000,
          2017: 2017,
        }}
        max={LAST_YEAR}
        min={FIRST_YEAR}
        onChange={handleInputChange}
        trackStyle={{ backgroundColor: 'transparent' }}
      />
    </StyledYearPicker>
  );
};

export default YearPicker;
