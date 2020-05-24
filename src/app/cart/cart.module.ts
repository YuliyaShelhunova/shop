import { NgModule } from '@angular/core';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart-list-comp/cart-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartItemComponent,
    CartComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    CartComponent
  ]
})
export class CartModule { }
