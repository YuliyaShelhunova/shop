import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CartComponent } from './components/cart-list-comp/cart-list.component';

@NgModule({
  declarations: [
    CartItemComponent,
    CartComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CartItemComponent,
    CartComponent
  ]
})
export class CartModule { }
