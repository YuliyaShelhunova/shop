import { Component, OnInit, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Product } from 'src/app/products/models/product';
import { CartService } from '../../services/cart.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-list-comp',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  selected: Array<Product>;
  isSelected = false;
  sum = 0;
  count = 0;

  constructor(public cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.cartService.getSelectedProducts().then((data => {
      this.selected = data;
      this.cartService.getTotalSumProducts().then(sum => this.sum = sum );
      this.cartService.getTotalQuantityProducts().then(total => this.count = total);
      this.isSelected = !!this.selected.length;
    }));
  }

  onDelete(product: Product): void {
    this.cartService.removeProduct(product);
  }
  onChange(product: Product) {
    this.cartService.addProduct(product).then(data => data).catch();
  }
  onRemoveAll() {
    this.cartService.removeAllProducts();
  }

  onOrder() {
    const link = ['/order'];
    this.router.navigate(link);
  }
}
