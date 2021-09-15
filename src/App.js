import React, { useState, useRef } from 'react';
import Header from './components/Header';
import dataStore from './data/dataStore.json';
import getDataRange from './utility/getDataRange';

import { SEASON_MAX, RANGE_MAX } from './utility/constants';

import Chart from './components/Chart';
import { StyledApp } from './styles';

const App = () => {
  const [
    { activeVisitors, activeHome, yearType, startYear, endYear, year },
    setState,
  ] = useState({
    activeHome: null,
    activeVisitors: null,
    endYear: 2017,
    startYear: 1871,
    year: 2017,
    yearType: 'range',
  });

  const timeoutRef = useRef(null);

  const data =
    yearType === 'single' ? dataStore[year] : getDataRange(startYear, endYear);

  const extrema = [
    Math.log(1),
    Math.log(yearType === 'single' ? SEASON_MAX : RANGE_MAX),
  ];

  return (
    <StyledApp>
      <Header {...{ year, startYear, endYear, yearType, data }} />
      <Chart
        {...{
          activeHome,
          activeVisitors,
          data,
          extrema,
          handleMouseOut: () => {
            timeoutRef.current = setTimeout(() => {
              setState(prev => {
                return { ...prev, activeVisitors: null, activeHome: null };
              });
            }, 10);
          },
          handleMouseOver: (vistiors, home) => {
            clearTimeout(timeoutRef.current);
            setState(prev => {
              return { ...prev, activeVisitors: vistiors, activeHome: home };
            });
          },

          setState,
          yearType,
        }}
      />
    </StyledApp>
  );
};

export default App;
