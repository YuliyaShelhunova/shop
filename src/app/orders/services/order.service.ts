import { Injectable, Inject, Optional } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { UserModel } from '../model/user.model';
import { OrderModel } from '../model/order.model';
import { Product } from 'src/app/products/models/product';
import { DataGenerateN } from 'src/app/core/services/data-generate.factory';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    constructor(private cartService: CartService,
                private localStorageService: LocalStorageService,
                @Optional() @Inject(DataGenerateN) private generatorService: GeneratorService) { }

    sendOrder(user: UserModel): Observable<boolean> {
        let products;
        this.cartService.getSelectedProducts().then(data => products = data);
        if (products.length() > 0) {
            const order = new OrderModel(products, user);
            return this.localStorageService.setItem(`order${this.generatorService}`, order).pipe(data => data, error => error);
        }
    }

    getAllOrders(): Observable<Array<OrderModel>> {
        return this.localStorageService.getAllItems().pipe(map(data => data));
    }
}
