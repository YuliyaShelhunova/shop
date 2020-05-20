import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart-list-comp/cart-list.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CartItemComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    // CartItemComponent,
    CartComponent
  ]
})
export class CartModule { }
