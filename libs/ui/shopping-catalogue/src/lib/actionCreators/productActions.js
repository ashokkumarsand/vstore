import * as actions from '../action-types';

export const fetchProducts = (
  offset = 0,
  limit = 15,
  sortby = 'name',
  order = 'asc',
  filterBy = ''
) => {
  return (dispatch) => {
    dispatch({
      type: actions.FETCH_PRODUCT_LIST,
      payload: { offset, limit, sortby, order, filterBy },
    });
    fetch(`https://fakestoreapi.com/products?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: actions.FETCH_PRODUCT_LIST_SUCCESS,
          payload: data,
        });
      })
      .catch((error) => {
        dispatch({ type: actions.FETCH_PRODUCT_LIST_FAILED, error });
      });
  };
};
