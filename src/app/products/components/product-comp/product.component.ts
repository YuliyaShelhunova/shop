import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[app-product-comp]',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {

  @Input()
  product: Product;

  @Output()
  buyProduct: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
  }

  onBuy(): void {
    console.log('Product is bought!');
    this.buyProduct.emit(this.product);
  }

}
