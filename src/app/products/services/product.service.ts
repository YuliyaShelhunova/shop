import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { retry, publish, refCount, catchError, share, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = 'http://localhost:3000/products';
  constructor(private http: HttpClient) { }

  getProducts(): Observable<Array<Product>> {
    return this.http.get<Array<Product>>(this.productsUrl).pipe(
      retry(3),
      publish(),
      refCount(),
      catchError(this.handleError)
    );
  }

  getProductsById(id: string): Observable<Product> {
    const url = `${this.productsUrl}/${id}`;
    return this.http.get<Product>(url)
      .pipe(
        retry(3),
        share(),
        catchError(this.handleError)
      );

  }

  deleteProduct(product: Product): Observable<Array<Product>> {
    const url = `${this.productsUrl}/${product.id}`;
    return this.http.delete(url)
      .pipe(
        concatMap(() => this.getProducts())
      );

  }

  updateProduct(product: Product): Observable<Product> {
    const url = `${this.productsUrl}/${product.id}`;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .put<Product>(url, body, options)
      .pipe(catchError(this.handleError));

  }
  createProduct(product: Product): Observable<Product> {
    const url = this.productsUrl;
    const body = JSON.stringify(product);
    const options = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

    return this.http
      .post<Product>(url, body, options)
      .pipe(
        catchError(this.handleError)
      );

  }

  private handleError(err: HttpErrorResponse) {
    if (err.error instanceof Error) {
      console.error('An error occurred:', err.error.message);
    } else {
      console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
    }

    return throwError('Something bad happened; please try again later.');
  }

}
