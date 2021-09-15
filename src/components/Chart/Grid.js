import React from 'react';
import { StyledCell, StyledGrid } from '../../styles';
import { CELL_DIM, ALL_CELL_KEYS } from '../../utility/constants';

const Grid = ({
  scale,
  data,
  activeHome,
  activeVisitors,
  handleMouseOut,
  handleMouseOver,
}) => {
  return (
    <StyledGrid>
      {ALL_CELL_KEYS.map(visitors => {
        return ALL_CELL_KEYS.map(home => {
          const num = data[visitors][home];
          const blank = num === 0;

          return (
            <g
              key={`${visitors} -${home}`}
              style={{
                transform: `translate(${CELL_DIM * home}px, ${
                  CELL_DIM * visitors
                }px)`,
              }}
            >
              <StyledCell
                height="24"
                onMouseOut={() => {
                  return blank || handleMouseOut();
                }}
                onMouseOver={() => {
                  return blank || handleMouseOver(visitors, home);
                }}
                rx="3"
                ry="3"
                stroke={
                  activeVisitors === visitors && activeHome === home
                    ? 'black'
                    : 'none'
                }
                strokeWidth="2"
                style={{ fill: blank ? '#f0f0f0' : scale(Math.log(num)) }}
                width="24"
              />
            </g>
          );
        });
      })}
    </StyledGrid>
  );
};

export default Grid;
