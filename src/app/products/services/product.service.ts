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
    new Product(4, 'HP', 'HP', 2000, Categories.Electronic, false)];

  constructor() { }

  getProducts(): Observable<Array<Product>> {
    return of(this.data);
  }
}
