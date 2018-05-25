import { post } from './utils';

export async function login(data) {
  return post('/api/token', data);
}
