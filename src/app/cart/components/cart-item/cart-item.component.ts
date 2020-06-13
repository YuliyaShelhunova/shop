import { Component, OnInit, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/products/models/product';

@Component({
  selector: 'app-cart-item-comp',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: Product;

  @Output()
  deleteCartItem: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  changeCountItem: EventEmitter<Product> = new EventEmitter<Product>();

  constructor() { }

  ngOnInit(): void {
    this.cartItem.count = 1;
  }

  onDelete(): void {
    this.deleteCartItem.emit(this.cartItem);
  }
  onChange(event: any){
    this.changeCountItem.emit(this.cartItem);
  }
}
