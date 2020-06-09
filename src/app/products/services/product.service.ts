import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Categories } from '../models/categories.enum';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  data: Array<Product> = [
    new Product(1, 'Chicken', 'tasty chicken', 20, Categories.Food, true),
    new Product(2, 'Harry Potter', 'Harry Potter. The Philosophers Stone ', 35, Categories.Books, true),
    new Product(3, 'Skirt', 'beautifull skirt', 20, Categories.Clothes, true),
    new Product(4, 'Phone', 'Apple 11 ', 980, Categories.Electronic, true),
    new Product(5, 'HP', 'HP', 2000, Categories.Electronic, false)];

  constructor() { }

  getProducts(): Observable<Array<Product>> {
    return of(this.data);
  }

  getProductsById(id: string): Observable<Product> {
    const product = this.data.find(elem => elem.id === parseInt(id, 10));
    return of(product);
  }

  deleteProduct(product: Product) {
    delete this.data[product.id];
  }

  updateProduct(product: Product): Observable<Product> {
    // Обычно map используется для трансформации одного массива в другой массив
    // Для обхода используется forEach
    this.data.map(item => {
      if (item.id === product.id) {
        item = product;
      }
    });
    return of(product);
  }
  createProduct(product: Product): Observable<Product> {
    product.id = this.data.length;
    this.data.push(product as Product);
    return of(product);
  }
}
