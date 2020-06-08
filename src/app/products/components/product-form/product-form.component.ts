import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { Router, UrlTree } from '@angular/router';
import { Categories } from '../../models/categories.enum';
import { ThrowStmt } from '@angular/compiler';
import { ProductService } from '../../services/product.service';
import { error } from '@angular/compiler/src/util';
import { Observable } from 'rxjs';
import { DialogService } from 'src/app/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: Product;
  originalProduct: Product;
  categories = Categories;

  constructor(private router: Router, private productService: ProductService,
              private dialogService: DialogService) { }

  ngOnInit(): void {
    this.product = new Product();
  }

  onSaveProduct() {
    const product = { ...this.product } as Product;
    const method = product.id ? 'updateProduct' : 'createProduct';
    this.productService[method](product)
      .subscribe(data => {
        this.originalProduct = data;
        this.onGoBack();
      });
  }

  onGoBack(): void {
    this.router.navigate(['/admin/products']);
  }

  canDeactivate():
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree {
  const flags = Object.keys(this.product).map(key => {
    if (this.originalProduct[key] === this.product[key]) {
      return true;
    }
    return false;
  });

  if (flags.every(el => el)) {
    return true;
  }

  // Otherwise ask the user with the dialog service and return its
  // promise which resolves to true or false when the user decides
  return this.dialogService.confirm('Discard changes?');
}

}
