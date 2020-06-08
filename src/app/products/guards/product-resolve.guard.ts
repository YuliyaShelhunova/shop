import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot } from '@angular/router';

// rxjs
import { Observable, of } from 'rxjs';
import { map, catchError, take, delay, finalize } from 'rxjs/operators';
import { Product } from '../models/product';
import { Categories } from '../models/categories.enum';


@Injectable({
  providedIn: 'any'
})
export class ProductResolveGuard implements Resolve<Product> {
  constructor(
    private router: Router
  ) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Product | null> {
    console.log('ProductResolve Guard is called');

    if (!route.paramMap.has('productID')) {
      return of(new Product(null, '', '', null, Categories.Books, false));
    }

    const id = +route.paramMap.get('productID');

    // return this.userObservableService.getUser(id).pipe(
    //   delay(2000),
    //   map((user: UserModel) => {
    //     if (user) {
    //       return user;
    //     } else {
    //       this.router.navigate(['/users']);
    //       return null;
    //     }
    //   }),
    //   take(1),
    //   catchError(() => {
    //     this.router.navigate(['/users']);
    //     // catchError MUST return observable
    //     return of(null);
    //   })
    // );
  }
}
