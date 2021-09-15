import React from 'react';
import { StyledScore, StyledTooltip } from '../../styles';

const Score = ({ score }) => {
  if (score === 25) {
    return (
      <StyledScore>
        {score}
        <em>+</em>
      </StyledScore>
    );
  }

  return score;
};

const Tooltip = ({ visitors, home, num }) => {
  return (
    <StyledTooltip {...{ visitors, home }}>
      <dt>
        <Score score={visitors} /> – <Score score={home} />
      </dt>
      <dd>{`${num} game${num === 1 ? '' : 's'}`}</dd>
    </StyledTooltip>
  );
};

export default Tooltip;
