import { logger } from '../helpers/logger';

export const ApiBaseUrlSwitcher = () => {
  if (process.env.NODE_ENV !== 'production') {
    logger('Using dev API url');

    return 'http://localhost:8081/api';
  } else {
    logger('Using production API url');

    return 'http://api:28762/api';
  }
};
