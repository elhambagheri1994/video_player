import { getStorageData } from '@/shared/services/storage-service';
import { constantsData } from '@/shared/constants/constants';

export function isAuth() {
  return getStorageData(constantsData.token) ? true : false;
}
