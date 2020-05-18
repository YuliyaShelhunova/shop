import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { Categories } from '../models/categories.enum';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getProducts(): Array<Product> {
    const data = new Array<Product>();
    data.push(new Product(1, 'chicken', 'tasty chicken', 20, Categories.Food, true));
    data.push(new Product(2, 'Harry Potter', 'Harry Potter. The Philosophers Stone ', 35, Categories.Books, true));
    data.push(new Product(3, 'skirt', 'beautifull skirt', 20, Categories.Clothes, false));
    data.push(new Product(4, 'phone', 'Apple 11 ', 20, Categories.Electronic, false));
    return data;
  }
}
