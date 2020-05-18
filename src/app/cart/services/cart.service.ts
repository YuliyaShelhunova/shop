import { Injectable } from '@angular/core';
import { Categories } from 'src/app/products/models/categories.enum';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  selectedData: BehaviorSubject<Map<Product, number>> = new BehaviorSubject(new Map());

  selectedData$ = this.selectedData.asObservable();

  setSelectedProducts(product: Product, count: number): void {
    const selectedData: Map<Product, number> = this.selectedData.getValue();
    if (selectedData.has(product) && count === 1) {
      this.selectedData.next(selectedData.set(product, count++));
    }
    this.selectedData.next(selectedData.set(product, count));
  }

  getSelectedProducts(): BehaviorSubject<Map<Product, number>> {
    return this.selectedData;
  }

  deleteProduct(product: Product): void {
    const selectedData: Map<Product, number> = this.selectedData.getValue();
    selectedData.forEach((value, key) => {
        if (key === product) { selectedData.delete(key); }
    });
    this.selectedData.next(selectedData);
  }

  getSumSelectedProducts(): number {
    let sum = 0;
    const selectedData: Map<Product, number> = this.selectedData.getValue();
    selectedData.forEach((value, key) => {
      sum = sum + (key.price * value);
    });
    return sum;
  }

  getCountSelectedProducts(): number {
    let count = 0;
    const selectedData: Map<Product, number> = this.selectedData.getValue();
    selectedData.forEach((value, key) => {
      count = count + value;
    });
    return count;
  }
}
