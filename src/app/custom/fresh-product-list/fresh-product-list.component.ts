import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fresh-product-list',
  templateUrl: './fresh-product-list.component.html',
  styleUrls: ['./fresh-product-list.component.scss'],
})
export class FreshProductListComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // Mocked products (assuming backend will give same structure)
  mockProducts = [
    { name: 'Mock Product A', price: '$10' },
    { name: 'Mock Product B', price: '$20' },
    { name: 'Mock Product C', price: '$30' },
  ];
}
