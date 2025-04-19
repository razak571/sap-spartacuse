import { createReducer, on } from '@ngrx/store';
import { initialCartState } from '../state/cart.state';
import * as CartActions from '../actions/cart.actions';

export const cartReducer = createReducer(
  initialCartState,

  on(CartActions.addItem, (state) => ({
    ...state,
    itemCount: state.itemCount + 1,
  })),

  on(CartActions.removeItem, (state) => ({
    ...state,
    itemCount: Math.max(0, state.itemCount - 1),
  })),

  on(CartActions.clearCart, (state) => ({
    ...state,
    itemCount: 0,
  })),

  on(CartActions.setItemCount, (state, { count }) => ({
    ...state,
    itemCount: count,
  }))
);
