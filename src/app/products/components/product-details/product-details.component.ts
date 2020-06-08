import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  product: Product;
  constructor(public productService: ProductService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const observer = {
      next: (product: Product) => {
        this.product = { ...product } as Product;
      },
      error: (err: any) => console.log(err),
    };

    this.route.paramMap.pipe( switchMap((params: ParamMap) =>
          this.productService.getProductsById(params.get('productID'))
    )).subscribe(observer);
  }
}

