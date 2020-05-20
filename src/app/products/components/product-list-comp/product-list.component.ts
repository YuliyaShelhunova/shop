import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';

@Component({
  selector: 'app-product-list-comp',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListCompComponent implements OnInit { // Не надо Comp в названии

  productList: Array<Product>;

  @Output()
  buyProduct: EventEmitter<Product> = new EventEmitter();

  constructor(public productService: ProductService, public cartService: CartService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  onBuy(product: Product): void {
    this.buyProduct.emit(product);
    this.cartService.setSelectedProducts(product, 1);
  }
}
