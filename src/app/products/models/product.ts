import { Categories } from './categories.enum';

export class Product {
    constructor(
        public id: number = null,
        public name: string = '',
        public description: string = '',
        public price: number = 0,
        public count: number = 1,
        public category?: Categories,
        public isAvailable?: boolean
    ) {}
}
