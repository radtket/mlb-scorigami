import React, { createRef, useEffect } from 'react';
import { scaleLinear } from 'd3';
import { CELL_RATIO } from '../../utility/constants';
import {
  StyledAxisTick,
  StyledScaleKey,
  StyledScaleKeyWrap,
} from '../../styles';

const ScaleKey = ({ extrema, scale }) => {
  const ref = createRef();

  useEffect(() => {
    const updateScale = () => {
      const SCALE_DX = extrema[1] / CELL_RATIO;
      const ctx = ref.current.getContext('2d');
      ctx.clearRect(0, 0, CELL_RATIO, 30);
      let current = 0;
      while (current < CELL_RATIO) {
        ctx.fillStyle = scale(current * SCALE_DX);
        ctx.fillRect(current * 1, 0, 1, 10);
        current += 1;
      }
    };

    updateScale();
  }, [extrema, ref, scale]);

  const MAX = Math.round(Math.exp(extrema[1]));
  const handleScale = scaleLinear().domain(extrema).range([0, CELL_RATIO]);

  return (
    <StyledScaleKey>
      <canvas ref={ref} height={10} width={CELL_RATIO} />
      <StyledScaleKeyWrap>
        {[1, 2, 3, 5, 10, 20, 50, 100, 200, 500, 1000, 2000].map(val => {
          if (val < MAX / 2) {
            return (
              <StyledAxisTick
                key={val}
                style={{ left: `${handleScale(Math.log(val))}px` }}
              >
                {val}
              </StyledAxisTick>
            );
          }
          return false;
        })}

        <StyledAxisTick style={{ left: `${handleScale(Math.log(MAX))}px` }}>
          {MAX}
        </StyledAxisTick>
      </StyledScaleKeyWrap>
    </StyledScaleKey>
  );
};

export default ScaleKey;
