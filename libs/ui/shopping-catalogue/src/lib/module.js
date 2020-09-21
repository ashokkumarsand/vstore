import { productReducer } from './reducers';
import { fetchProducts } from './actionCreators/productActions';
export function getProductModule() {
  return {
    id: 'products',
    reducerMap: {
      products: productReducer,
    },
    initialActions: [fetchProducts()],
  };
}
