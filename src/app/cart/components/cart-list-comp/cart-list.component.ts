import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';
import { FormControl } from '@angular/forms';

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

  constructor(public cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getSelectedProducts().subscribe((data => {
      this.selected = data;
      this.sum = this.cartService.getTotalSumProducts();
      this.count = this.cartService.getTotalQuantityProducts();
      this.isSelected = !!this.selected.size;
    }));
  }

  onDelete(product: Product): void {
    this.cartService.removeProduct(product);
  }
  onChange(count: number, product: Product) {
    this.cartService.addProduct(product, count);
  }
  onRemoveAll() {
    this.cartService.removeAllProducts();
  }
}
