import request from '@/utils/request';

export async function userList() {
  return request('/api/user/list');
}
