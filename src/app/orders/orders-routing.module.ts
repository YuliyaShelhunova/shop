import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderListComponent, OrderItemComponent, OrderFormComponent } from './components';

const routes: Routes = [
    {
        path: '',
        component: OrderListComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class OrdersRoutingModule {
    static components = [OrderListComponent, OrderItemComponent, OrderFormComponent];
}

