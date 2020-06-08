import { NgModule } from '@angular/core';
import { ProductListComponent } from './components/product-list-comp/product-list.component';
import { ProductComponent } from './components/product-comp/product.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ProductsRoutingModule.components,
    ProductDetailsComponent,
  ],
  imports: [
    SharedModule,
  ],
  exports: [
    ProductsRoutingModule, ProductsRoutingModule.components
  ]
})
export class ProductsModule { }
