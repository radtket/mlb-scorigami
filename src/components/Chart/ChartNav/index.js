import React from 'react';
import { StyledChartNav } from '../../../styles';
import { FIRST_YEAR, LAST_YEAR } from '../../../utility/constants';
import ScaleSelect from './ScaleSelect';
import YearPicker from './YearPicker';

const ChartNav = ({ yearType, setState }) => {
  return (
    <StyledChartNav>
      <ScaleSelect
        onChange={e => {
          return setState(prev => {
            return { ...prev, yearType: e.target.value };
          });
        }}
        value={yearType}
      />
      <YearPicker
        defaultValue={
          yearType === 'single' ? LAST_YEAR : [FIRST_YEAR, LAST_YEAR]
        }
        handleInputChange={val => {
          setState(prev => {
            const copy = { ...prev };
            if (copy.yearType === 'single') {
              copy.year = val;
            } else {
              const [start, end] = val;
              // eslint-disable-next-line prefer-destructuring
              copy.startYear = start;

              copy.endYear = end;
            }
            return copy;
          });
        }}
        yearType={yearType}
      />
    </StyledChartNav>
  );
};

export default ChartNav;
