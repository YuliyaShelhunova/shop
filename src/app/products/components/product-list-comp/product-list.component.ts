import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-list-comp',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Observable<Array<Product>>;

  @Output()
  buyProduct: EventEmitter<Product> = new EventEmitter();

  constructor(public productService: ProductService, public cartService: CartService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }

  onBuy(product: Product): void {
    this.buyProduct.emit(product);
    this.cartService.addProduct(product, 1);
  }
}
