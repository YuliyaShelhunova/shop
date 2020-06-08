import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CartItemComponent, CartListComponent } from './components';
import { OrdersModule } from '../orders/orders.module';

@NgModule({
  declarations: [
    CartItemComponent,
    CartListComponent
  ],
  imports: [
    SharedModule,
    OrdersModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
