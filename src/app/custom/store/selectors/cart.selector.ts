import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CartState } from '../state/cart.state';

export const selectCart = createFeatureSelector<CartState>('cart');

export const selectItemCount = createSelector(
  selectCart,
  (state) => state.itemCount
);
