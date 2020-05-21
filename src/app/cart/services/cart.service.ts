import { Injectable } from '@angular/core';
import { Categories } from 'src/app/products/models/categories.enum';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Product } from 'src/app/products/models/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }

  cartProducts: BehaviorSubject<Map<Product, number>> = new BehaviorSubject(new Map());

  cartProducts$ = this.cartProducts.asObservable();

  addProduct(product: Product, count: number): void {
    const selectedData: Map<Product, number> = this.cartProducts.getValue();
    if (selectedData.has(product) && selectedData.get(product) === 1) {
      this.cartProducts.next(selectedData.set(product, count++));
    }
    this.cartProducts.next(selectedData.set(product, count));
  }

  getSelectedProducts(): BehaviorSubject<Map<Product, number>> {
    return this.cartProducts;
  }

  removeProduct(product: Product): void {
    const selectedData: Map<Product, number> = this.cartProducts.getValue();
    selectedData.forEach((value, key) => {
        if (key === product) {
          selectedData.delete(key);
        }
    });
    this.cartProducts.next(selectedData);
  }

  removeAllProducts(): void {
    const selectedData: Map<Product, number> = this.cartProducts.getValue();
    selectedData.clear();
    this.cartProducts.next(selectedData);
  }

  getTotalSumProducts(): number {
    let sum = 0;
    const selectedData: Map<Product, number> = this.cartProducts.getValue();
    selectedData.forEach((value, key) => {
      sum = sum + (key.price * value);
    });
    return sum;
  }

  getTotalQuantityProducts(): number {
    let count = 0;
    const selectedData: Map<Product, number> = this.cartProducts.getValue();
    selectedData.forEach((value, key) => {
      count = count + value;
    });
    return count;
  }
}
