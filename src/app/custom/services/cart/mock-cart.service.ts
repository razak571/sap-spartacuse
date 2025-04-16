import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class MockCartService {
  getCartDetails(userName: string): Observable<any> {
    // userName can be used to call real api and get that data and assigned to cartData variable further and that variable can be return as observable here like
    //  return of(cartData).pipe()
    // but here we used mock data as cartData and used delay extra for simulation... right?
    const cartData = [
      { itemName: 'abc', price: 999, quantity: 2 },
      { itemName: 'xyz', price: 1999, quantity: 1 },
    ];

    return of(cartData).pipe(delay(500));
  }
}
