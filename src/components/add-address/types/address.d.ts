export {};

declare global {
  interface GAddress {
    name?: string;
    address?: string;
    longitude?: string;
    latitude?: string;
    id?: number;
  }
}
