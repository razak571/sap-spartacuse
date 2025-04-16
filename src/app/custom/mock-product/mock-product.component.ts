import { Component, OnInit } from '@angular/core';
import { MockProductService } from '../services/products/mock-product.service';

@Component({
  selector: 'app-mock-product',
  templateUrl: './mock-product.component.html',
  styleUrls: ['./mock-product.component.scss'],
})
export class MockProductComponent implements OnInit {
  products: any[] = [];

  constructor(private mockProductService: MockProductService) {}

  ngOnInit(): void {
    this.mockProductService.getProducts().subscribe((products) => {
      this.products = products;
      console.log('products data', products);
    });
  }
}
