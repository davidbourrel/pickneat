import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Product } from '_types/products';
import { getTotalItems } from './getTotalItems';

interface CartState {
  cart: Product[];
  cartTotalItems: number;
}

const initialState: CartState = { cart: [], cartTotalItems: 0 };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      const cartItem = state.cart.find(
        ({ product_id }) => product_id === action.payload.product_id
      );

      // If item already exists in the Cart, increase its quantity
      if (cartItem) {
        cartItem.amount = (cartItem?.amount || 0) + 1;
      } else {
        state.cart.push({ ...action.payload, amount: 1 });
      }

      state.cartTotalItems = getTotalItems({ cart: state.cart });
    },
    deleteItem: (state, action: PayloadAction<Product>) => {
      state.cart = state.cart.reduce((total, item) => {
        if (item.product_id === action.payload.product_id && !!item.amount) {
          if (item.amount === 1) return total;
          return [...total, { ...item, amount: item.amount - 1 }];
        } else {
          return [...total, item];
        }
      }, [] as Product[]);

      state.cartTotalItems = getTotalItems({ cart: state.cart });
    },
    removeFromCart: (state, action: PayloadAction<Product>) => {
      state.cart = state.cart.filter(
        ({ product_id }) => product_id !== action.payload.product_id
      );

      state.cartTotalItems = getTotalItems({ cart: state.cart });
    },
  },
});

export const { addToCart, deleteItem, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
