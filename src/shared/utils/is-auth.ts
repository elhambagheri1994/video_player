import { getStorageData } from '@/shared/services/storage-service';
import { constantsData } from '@/shared/constants/constants';

export function isAuth(): boolean {
  return Boolean(getStorageData(constantsData.token));
}
