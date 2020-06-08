import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ManageProductsComponent, ManageOrdersComponent } from './components';
import { CanDeactivateGuard } from '../core/guards/can-deactivate.guard';
import { ProductFormComponent } from '../products/components/product-form/product-form.component';


const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: 'products',
                component: ManageProductsComponent
            },
            {
                path: 'orders',
                component: ManageOrdersComponent
            },
            {
                path: 'products/add',
                component: ProductFormComponent,
                canDeactivate: [CanDeactivateGuard]
            },
            {
                path: 'products/edit:productID',
                component: ProductFormComponent,
                canDeactivate: [CanDeactivateGuard]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {
    static components = [
        AdminComponent,
        ManageOrdersComponent,
        ManageProductsComponent
    ];
}
