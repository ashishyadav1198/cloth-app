import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector([selectCartItems], (items) =>
  items.reduce((res, item) => res + item.quantity, 0)
);
