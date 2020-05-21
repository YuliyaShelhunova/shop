import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './components/product-list-comp/product-list.component';
import { ProductComponent } from './components/product-comp/product.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductsModule { }
