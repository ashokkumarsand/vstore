import { shoppingCartReducer } from './reducers';
export const getShoppingCartModule = () => {
  return {
    id: 'cart',
    reducerMap: {
      cart: shoppingCartReducer,
    },
  };
};
