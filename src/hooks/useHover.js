import { useEffect, useRef, useState } from 'react';

export const useHover = () => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);

  useEffect(
    () => {
      const node = ref.current;

      const handleMouseOver = () => {
        return setValue(true);
      };

      const handleMouseOut = () => {
        return setValue(false);
      };

      if (node) {
        node.addEventListener('mouseover', handleMouseOver);
        node.addEventListener('mouseout', handleMouseOut);
      }

      return () => {
        if (node) {
          node.removeEventListener('mouseover', handleMouseOver);
          node.removeEventListener('mouseout', handleMouseOut);
        }
      };
    },
    [] // Recall only if ref changes
  );

  return [ref, value];
};

export const Dude = () => {
  const [hoverRef, isHovered] = useHover();
  return <div ref={hoverRef}>{isHovered ? '😁' : '☹️'}</div>;
};
