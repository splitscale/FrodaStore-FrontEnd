import { getAuthToken } from './getAuthToken';
import { getUid } from './getUid';
import { setAuthToken } from './setAuthToken';
import { setUid } from './setUid';

export const Store = () => {
  return {
    getUid: getUid,
    getAuthToken: getAuthToken,
    setAuthToken: setAuthToken,
    setUid: setUid,
  };
};
