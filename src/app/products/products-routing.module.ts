import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent, ProductComponent } from './components';
import { ProductFormComponent } from './components/product-form/product-form.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';

const routes: Routes = [
    {
        path: 'products',
        component: ProductListComponent,
    },
    {
        path: 'product/:productID',
        component: ProductDetailsComponent
    }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProductsRoutingModule {
    static components = [ProductListComponent, ProductComponent, ProductFormComponent];
}

