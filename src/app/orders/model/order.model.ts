import { Product } from 'src/app/products/models/product';
import { UserModel } from './user.model';

export class OrderModel {
    constructor(
        public products: any,
        public user: UserModel
    ) { }
}
