import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockProductService {
  getProducts(): Observable<any> {
    const products = [
      { name: 'product 1', code: 1, price: 100 },
      { name: 'product 2', code: 2, price: 200 },
      { name: 'product 3s', code: 3, price: 300 },
    ];
    return of(products).pipe(delay(500));
  }
}
