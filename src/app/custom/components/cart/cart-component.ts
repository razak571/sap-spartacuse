import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as CartActions from '../../store/actions/cart.actions';
import { selectItemCount } from '../../store/selectors/cart.selector';

@Component({
  selector: 'app-cart',
  template: `
    <h2>🛒 Cart Items: {{ itemCount$ | async }}</h2>
    <button (click)="add()">➕ Add Item</button>
    <button (click)="remove()">➖ Remove Item</button>
    <button (click)="clear()">🧹 Clear Cart</button>
  `,
})
export class CartComponent {
  itemCount$: Observable<number>;

  constructor(private store: Store) {
    this.itemCount$ = this.store.select(selectItemCount);
  }

  add() {
    this.store.dispatch(CartActions.addItem());
  }

  remove() {
    this.store.dispatch(CartActions.removeItem());
  }

  clear() {
    this.store.dispatch(CartActions.clearCart());
  }
}
