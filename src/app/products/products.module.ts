import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list-comp/product-list.component';
import { ProductComponent } from './components/product-comp/product.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductListComponent,
  ]
})
export class ProductsModule { }
