import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AboutService {
  constructor() {}

  products = [
    { name: 'TV', id: 1 },
    { name: 'Mobile', id: 2 },
    { name: 'Remote', id: 3 },
  ];

  getProducts(): Observable<any[]> {
    return of(this.products);
  }
}
