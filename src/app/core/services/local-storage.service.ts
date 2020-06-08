import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setItem(key: any, value: any): Observable<boolean> {
    window.localStorage.setItem(key, JSON.stringify(value));
    return of(true);
  }

  getItem(key: any): any {
    return JSON.parse(window.localStorage.getItem(key));
  }

  removeItem(key: any): void {
    window.localStorage.removeItem(key);
  }
}
