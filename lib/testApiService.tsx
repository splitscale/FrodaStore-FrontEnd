import { apiUrl } from './apiconfigs/getApiBaseUrl';
import { logger } from './helpers/logger';
import { UserRequest } from './user/userRequest';

export async function testApiService() {
  console.log('Testing');

  // register();
  login();
}

async function register() {
  const userRequest: UserRequest = {
    username: 'joejoe',
    password: 'Password1234',
  };

  const res = await fetch(apiUrl('/auth/register'), {
    method: 'post',
    body: JSON.stringify(userRequest),
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.status === 200) {
    logger(res);
    logger('SUCCESS');
  }

  logger('FAILED');
  logger(res);
}

async function login() {
  const userRequest: UserRequest = {
    username: 'joejoe',
    password: 'Password1234',
  };

  const res = await fetch(apiUrl('/auth/login'), {
    method: 'post',
    body: JSON.stringify(userRequest),
    headers: { 'Content-Type': 'application/json' },
  });

  if (res.status === 200) {
    logger(res);
    logger('SUCCESS');
  }

  logger('FAILED');
  logger(res);
}
