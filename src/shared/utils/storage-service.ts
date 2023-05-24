export function saveStorageData(key: string, data: unknown) {
  localStorage.setItem(key, JSON.stringify(data));
}

export function getStorageData(key: string) {
  return JSON.parse(localStorage.getItem(key) as string);
}
