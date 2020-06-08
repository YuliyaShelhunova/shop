import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { OrderModel } from 'src/app/orders/model/order.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  constructor() { }

  setItem(key: any, value: any): Observable<boolean> {
    value.products = Array.from(value.products);
    window.localStorage.setItem(key, JSON.stringify(value));
    return of(true);
  }

  getItem(key: any): any {
    const data = JSON.parse(window.localStorage.getItem(key));
    data.products = new Map(data.products);
    return data;
  }

  removeItem(key: any): void {
    window.localStorage.removeItem(key);
  }

  getAllItems(): Observable<Array<OrderModel>> {
    const list = new Array<OrderModel>();
    for (let i = 0; i < window.localStorage.length; i++) {
        const key = window.localStorage.key(i);
        const data = JSON.parse(window.localStorage.getItem(key));
        data.products = new Map(data.products);

        list.push(data as OrderModel);
    }

    return of(list);
  }
}
