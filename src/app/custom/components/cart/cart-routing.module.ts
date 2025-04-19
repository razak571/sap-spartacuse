import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart-component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartRouterModule {}
