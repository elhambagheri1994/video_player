import { constantsData } from '@/shared/constants/constants';
import { deleteStorageData, saveStorageData } from '@/shared/services/storage-service';
import http from './http-service';

const url = 'login';

export async function login<GLogin>(loginData: GLogin) {
  const { data } = await http.post(url, loginData);
  saveStorageData(constantsData.token, data?.accessToken);
  saveStorageData(constantsData.user, data?.user);
}
export function logout() {
  deleteStorageData(constantsData.token);
}
export default {
  login
};
