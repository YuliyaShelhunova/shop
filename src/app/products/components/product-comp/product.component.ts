import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Product } from '../../models/product';
import { AuthService } from 'src/app/core/services/auth.service';

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

  @Output() editProduct = new EventEmitter<Product>();
  @Output() deleteProduct = new EventEmitter<Product>();
  @Output() detailProduct = new EventEmitter<Product>();

  @Input() isEditable: boolean;

  constructor() { }

  ngOnInit(): void { }

  onBuy(): void {
    console.log('Product is bought!');
    this.buyProduct.emit(this.product);
  }
  onEditProduct() {
    this.editProduct.emit(this.product);
  }

  onDeleteProduct() {
    this.deleteProduct.emit(this.product);
  }

  onGoToDetailProduct() {
    this.detailProduct.emit(this.product);
  }

}
