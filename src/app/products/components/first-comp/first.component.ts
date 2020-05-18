import { Component, OnInit } from '@angular/core';
import { Categories } from '../../models/categories.enum';
@Component({
  selector: 'app-first-comp',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstCompComponent implements OnInit {
  name: string;
  description: string;
  price: number;
  category: Categories;
  isAvailable: boolean;
  categories: Array<Categories> = [];

  constructor() { }

  ngOnInit(): void {
    this.name = 'Limon';
    this.description = 'tasty limon';
    this.price = 20;
    this.category = Categories.Food;
    this.isAvailable = true;
    this.categories.push(Categories.Books);
    this.categories.push(Categories.Clothes);
    this.categories.push(Categories.Electronic);
    this.categories.push(Categories.Food);
  }

}
