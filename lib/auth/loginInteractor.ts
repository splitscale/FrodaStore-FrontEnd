import { apiUrl } from '../apiconfigs/getApiBaseUrl';
import { logger } from '../helpers/logger';
import { UserRequest } from '../user/userRequest';

export const loginInteractor = (userRequest: UserRequest) => {
  logger('logging in user: ' + userRequest.username);

  return fetch(apiUrl('/auth/login'), {
    method: 'POST',
    body: JSON.stringify(userRequest),
    headers: { 'Content-Type': 'application/json' },
  });
};
