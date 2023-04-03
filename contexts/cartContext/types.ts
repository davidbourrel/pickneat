import { Dispatch } from 'react';
import { Product } from '_types/products';

export enum CartStateEnum {
  Initialize = 'initialize',
  Add = 'add',
  DeleteItem = 'deleteItem',
  DeleteItems = 'deleteItems',
}

export interface CartAction {
  type: CartStateEnum;
  product?: Product;
  product_id?: string;
  newCart?: Product[];
}

export interface CartContextValue {
  cart: Product[];
}
export interface CartDispatchContextValue {
  dispatch: Dispatch<CartAction>;
}
