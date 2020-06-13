import { Injectable } from '@angular/core';
import { Categories } from 'src/app/products/models/categories.enum';
import { Observable, Subject, BehaviorSubject, throwError } from 'rxjs';
import { Product } from 'src/app/products/models/product';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartProductsUrl = 'http://localhost:3000/cartProducts';
  constructor(private http: HttpClient) { }

  addProduct(product: Product): Promise<Product> {
    const url = `${this.cartProductsUrl}/${product.id}`;

    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http.put(url, body, options)
      .toPromise()
      .then(response => response as Product)
      .catch(this.handleError);
  }


  getSelectedProducts(): Promise<Array<Product>> {
    return this.http
      .get(this.cartProductsUrl)
      .toPromise()
      .then(response => response as Product[])
      .catch(this.handleError);

  }

  removeProduct(product: Product): Promise<Product> {
    const url = `${this.cartProductsUrl}/${product.id}`;

    return (
      this.http
        .delete(url)
        .toPromise()
        .catch(this.handleError)
    );

  }

  removeAllProducts(): Promise<Array<Product>> {
    return (
      this.http
        .delete(this.cartProductsUrl)
        .toPromise()
        .catch(this.handleError)
    );
  }

  getTotalSumProducts(): Promise<number> {
    let sum = 0;
    return this.getSelectedProducts().then(data => {
      data.forEach(item => sum += (item.price * item.count));
      return sum;
    }).catch(this.handleError);
  }

  getTotalQuantityProducts(): Promise<number> {
    let count = 0;
    return this.getSelectedProducts().then(data => {
      data.forEach(item => count += item.count);
      return count;
    }).catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
