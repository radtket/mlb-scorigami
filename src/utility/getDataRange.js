import dataStore from '../data/dataStore.json';
import full from '../data/full.json';
import { ALL_CELL_KEYS, FIRST_YEAR, LAST_YEAR } from './constants';

const memoizedDataRange = () => {
  const cache = {
    [`${FIRST_YEAR}-${LAST_YEAR}`]: full,
  };

  return (startYear, endYear) => {
    const KEY = `${startYear}-${endYear}`;

    if (KEY in cache) {
      return cache[KEY];
    }

    const range = ALL_CELL_KEYS.map(() => {
      return ALL_CELL_KEYS.map(() => {
        return 0;
      });
    });

    for (let year = startYear; year <= endYear; year += 1) {
      ALL_CELL_KEYS.forEach(i => {
        ALL_CELL_KEYS.forEach(j => {
          range[i][j] += dataStore[year][i][j];
        });
      });
    }

    cache[KEY] = range;
    return range;
  };
};

const getDataRange = memoizedDataRange();

export default getDataRange;
