/* eslint-disable import/prefer-default-export */
import { clearFix, margin, position, size } from 'polished';
import styled, { css, keyframes } from 'styled-components';
import {
  CELL_DIM,
  CELL_RATIO,
  MARGINS_LARGE,
  MARGINS_SMALL,
} from './utility/constants';

const TOOLTIP_HEIGHT = 65;
const TOOLTIP_WIDTH = 120;

export const StyledTooltip = styled.dl`
  ${({ home, visitors }) => {
    return css`
      ${position(
        'absolute',
        visitors * CELL_DIM + 2 * CELL_DIM - TOOLTIP_HEIGHT + 2,
        null,
        null,
        home > 20
          ? home * CELL_DIM + 2 * CELL_DIM - TOOLTIP_WIDTH + 2
          : home * CELL_DIM + 3 * CELL_DIM - 2
      )};
      ${size(TOOLTIP_HEIGHT, TOOLTIP_WIDTH)};
      transition: all 600ms cubic-bezier(0.19, 1, 0.22, 1);
      text-align: center;
      pointer-events: none;
      background: #000;
      color: #fff;
      padding: 10px;
      border-radius: 3px;
    `;
  }}
`;

export const StyledChartNav = styled.div`
  ${clearFix()}
`;

const fadein = keyframes`
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
`;

export const StyledCell = styled.rect`
  animation: ${fadein} 600ms;
  transition: fill 400ms ease-in-out;
`;

export const StyledAxisTick = styled.div`
  color: #999;
  font-size: 12px;
  position: absolute;
  text-align: center;
  width: 100px;
  margin-left: -50px;

  &::before {
    position: absolute;
    width: 1px;
    height: 5px;
    background: #666;
    top: -3px;
    left: 50px;
    content: '';
  }

  &:last-of-type::before {
    left: 49px;
  }
`;

export const StyledText = styled.text`
  font-size: 12px;
  text-anchor: middle;
`;

export const StyledHeadline = styled.h1`
  text-align: center;
  margin: 2rem 0 0.5rem 50px;
`;

export const StyledApp = styled.div`
  ${size(null, MARGINS_LARGE)}
  margin: auto;
`;

export const StyledAbout = styled.div`
  ${margin(null, null, null, MARGINS_SMALL)}
  h2 {
    margin-top: 20px;
  }
`;

export const StyledChart = styled.div`
  position: relative;

  > svg {
    ${size(MARGINS_LARGE)}
  }
`;

export const StyledGrid = styled.g`
  transform: ${`translate(${MARGINS_SMALL}px, ${MARGINS_SMALL}px)`};
`;

export const StyledScaleKeyWrap = styled.div`
  height: 30px;
`;

export const StyledScaleKey = styled.div`
  ${margin('10px', null, null, MARGINS_SMALL)}
  position: relative;
`;

export const StyledScore = styled.span`
  em {
    font-size: 12px;
    vertical-align: super;
  }
`;

export const StyledScaleSelect = styled.label`
  float: right;
  height: 40px;
  text-align: right;
  width: 160px;
`;

export const StyledYearPicker = styled.div`
  ${margin('4px', null, null, MARGINS_SMALL)}
  ${size('40px', CELL_RATIO - 160)}
  float: left;
  text-align: center;
`;
