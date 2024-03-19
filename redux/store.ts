import { configureStore } from '@reduxjs/toolkit';
import activeCategoryReducer from './activeCategory/activeCategorySlice';
import cartReducer from './cart/cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    activeCategory: activeCategoryReducer,
  },
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
