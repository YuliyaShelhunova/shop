import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrderModel } from 'src/app/orders/model/order.model';

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
    const data = JSON.parse(window.localStorage.getItem(key));
    return data;
  }

  removeItem(key: any): void {
    window.localStorage.removeItem(key);
  }

  getAllItems(): Observable<Array<any>> {
    const data = new Array();
    const keys = Object.keys(window.localStorage);
    keys.forEach(key => {
      data.push(this.getItem(key));
    });
    return of(data);
  }
}
