import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';

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
