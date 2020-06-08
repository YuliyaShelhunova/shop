import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { CartService } from 'src/app/cart/services/cart.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Categories } from '../../models/categories.enum';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-product-list-comp',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  productList: Array<Product>;
  isEditable: boolean;

  @Output()
  buyProduct: EventEmitter<Product> = new EventEmitter();

  constructor(public productService: ProductService,
              public cartService: CartService,
              private route: ActivatedRoute,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.isEditable = this.authService.isLoggedIn;
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
    });
  }

  onBuy(product: Product): void {
    this.buyProduct.emit(product);
    this.cartService.addProduct(product, 1);
  }

  onEditProduct(product: Product): void {
    const link = ['admin/products/edit', product.id];
    this.router.navigate(link);
  }

  onDeleteProduct(product: Product) {
    this.productService.deleteProduct(product);
    this.productService.getProducts().subscribe(data => {
      this.productList = data;
    });
  }

  onGoToDetailProduct(product: Product) {
    const link = ['/product', product.id];
    this.router.navigate(link);
  }
}
