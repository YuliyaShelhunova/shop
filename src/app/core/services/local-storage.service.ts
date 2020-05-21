import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setItem(key: string = '', value: string = '') {
    window.localStorage.setItem(key, value);
  }

  getItem(key: string): string {
    return window.localStorage.getItem(key);
  }

  removeItem(key: any): void {
    window.localStorage.removeItem(key);
  }
}
