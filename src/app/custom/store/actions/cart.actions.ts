import { createAction, props } from '@ngrx/store';

export const addItem = createAction('[cart] add item');
export const removeItem = createAction('[cart remove item]');
export const clearCart = createAction(' [cart] clear cart ');
export const setItemCount = createAction(
  '[Cart] Set Item Count',
  props<{ count: number }>()
);
