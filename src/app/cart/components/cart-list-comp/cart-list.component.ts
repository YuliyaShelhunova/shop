import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list-comp',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartComponent implements OnInit {
  selected: Map<Product, number> = new Map();
  isSelected = false;
  sum = 0;
  count = 0;

  @Output()
  deleteCartItem: EventEmitter<Product> = new EventEmitter();

  @Output()
  changeCountItem: EventEmitter<number> =  new EventEmitter();

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getSelectedProducts().subscribe((data => {
      this.selected = data;
      this.sum = this.cartService.getSumSelectedProducts();
      this.count = this.cartService.getCountSelectedProducts();
      this.isSelected = !!this.selected.size;
    }));
  }

  onDelete(product: Product): void {
    this.deleteCartItem.emit(product);
    this.cartService.deleteProduct(product);
  }
  onChange(count: number, product: Product) {
    this.changeCountItem.emit(count);
    this.cartService.setSelectedProducts(product, count);
  }
}
