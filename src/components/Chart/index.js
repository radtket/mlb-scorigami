import React from 'react';
import { scaleSequential, interpolateSpectral } from 'd3';
import Axis from './Axis';
import ChartNav from './ChartNav';
import Grid from './Grid';
import ScaleKey from './ScaleKey';
import Tooltip from './Tooltip';
import { MARGINS_LARGE, MARGINS_SMALL } from '../../utility/constants';
import { StyledChart } from '../../styles';

const Chart = ({
  activeHome,
  activeVisitors,
  data,
  extrema,
  handleMouseOut,
  handleMouseOver,
  setState,
  yearType,
}) => {
  const activeProps = { activeHome, activeVisitors };
  const scale = scaleSequential(interpolateSpectral).domain([
    extrema[1],
    extrema[0],
  ]);

  return (
    <StyledChart>
      {activeVisitors !== null && (
        <Tooltip
          home={activeHome}
          num={data[activeVisitors][activeHome]}
          visitors={activeVisitors}
        />
      )}
      <svg>
        <Axis isXAxis {...activeProps} />
        <Axis {...activeProps} />

        <Grid
          {...{
            ...activeProps,
            scale,
            data,
            handleMouseOut,
            handleMouseOver,
          }}
        />
      </svg>
      <ScaleKey extrema={extrema} scale={scale} />
      <ChartNav {...{ yearType, setState }} />
    </StyledChart>
  );
};

export default Chart;
