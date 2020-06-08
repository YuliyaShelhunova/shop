import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ManageProductsComponent, ManageOrdersComponent } from './components';
import { ProductsModule } from '../products/products.module';
import { OrderModel } from '../orders/model/order.model';
import { OrdersModule } from '../orders/orders.module';


@NgModule({
  declarations: [AdminRoutingModule.components],
  imports: [
    // CommonModule,
    ProductsModule,
    OrdersModule,
    AdminRoutingModule
  ],
  exports: [AdminRoutingModule]
})
export class AdminModule { }
