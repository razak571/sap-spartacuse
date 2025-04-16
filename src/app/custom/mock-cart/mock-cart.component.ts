import { Component, OnInit } from '@angular/core';
import { MockCartService } from '../services/cart/mock-cart.service';

@Component({
  selector: 'app-mock-cart',
  templateUrl: './mock-cart.component.html',
  styleUrls: ['./mock-cart.component.scss'],
})
export class MockCartComponent implements OnInit {
  cart: any[] = [];
  // userName: string = 'dummy user';
  constructor(private mockCartService: MockCartService) {}

  ngOnInit(): void {
    const userName: string = 'dummy user';
    this.mockCartService.getCartDetails(userName).subscribe((cart) => {
      this.cart = cart;
    });
  }
}
