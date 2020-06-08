import { Product } from 'src/app/products/models/product';
import { UserModel } from './user.model';

export class OrderModel {
    constructor(
        public products: Map<Product, number>,
        public user: UserModel
    ) { }
}
