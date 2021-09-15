import React from 'react';
import { StyledText } from '../../styles';
import {
  CELL_DIM,
  ALL_CELL_KEYS,
  MARGINS_SMALL,
  CELL_SIZE,
} from '../../utility/constants';

const AxisText = ({ val, isXAxis, isActive }) => {
  return (
    <StyledText
      dominant-baseline="central"
      style={{
        fontWeight: isActive ? 'bold' : 'normal',
        transform: `translate(${
          isXAxis
            ? `${val * CELL_DIM + CELL_DIM / 2}px, ${CELL_DIM / 2}px`
            : `${CELL_DIM / 2}px, ${val * CELL_DIM + CELL_DIM / 2}px`
        })`,
        opacity: isActive ? 1 : 0.5,
      }}
    >
      {val === 25 ? '25+' : val}
    </StyledText>
  );
};

const Axis = ({ activeVisitors, activeHome, isXAxis }) => {
  return (
    <g
      style={{
        transform: `translate(${
          isXAxis
            ? `${MARGINS_SMALL}px, ${CELL_DIM}px`
            : `${CELL_DIM}px, ${MARGINS_SMALL}px`
        })`,
      }}
    >
      {isXAxis ? (
        <StyledText dominant-baseline="central" x={CELL_SIZE} y={-10}>
          Home Team
        </StyledText>
      ) : (
        <StyledText
          dominant-baseline="central"
          transform={`rotate(-90, ${-10}, ${CELL_SIZE})`}
          x={-10}
          y={CELL_SIZE}
        >
          Visiting Team
        </StyledText>
      )}
      {ALL_CELL_KEYS.map(val => {
        return (
          <AxisText
            key={val}
            isActive={isXAxis ? val === activeHome : val === activeVisitors}
            isXAxis={isXAxis}
            val={val}
          />
        );
      })}
    </g>
  );
};

export default Axis;
