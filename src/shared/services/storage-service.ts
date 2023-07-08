export function saveStorageData(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getStorageData(key: string) {
  return localStorage.getItem(key)
    ? JSON.parse(localStorage.getItem(key) as string)
    : null;
}

export function deleteStorageData(key: string) {
  localStorage.removeItem(key);
}
