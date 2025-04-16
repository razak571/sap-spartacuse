import { Component } from '@angular/core';
import { ProductListComponent } from '@spartacus/storefront';

@Component({
  selector: 'app-my-product-list',
  templateUrl: './my-product-list.component.html',
})
export class MyProductListComponent extends ProductListComponent {
  // Override logic here if needed
}
