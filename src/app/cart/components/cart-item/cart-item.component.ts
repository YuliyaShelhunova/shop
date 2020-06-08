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

  @Input()
  count: number;

  @Output()
  deleteCartItem: EventEmitter<Product> = new EventEmitter<Product>();

  @Output()
  changeCountItem: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(): void {
    this.deleteCartItem.emit(this.cartItem);
  }
  onChange(event: any){
    const count = Number(event.target.value);
    this.changeCountItem.emit(count);
  }
}
