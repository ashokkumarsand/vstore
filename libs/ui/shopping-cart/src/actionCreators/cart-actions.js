import * as actionTypes from '../action-types';

export const showCartPanel = () => ({ type: actionTypes.SHOW_CART_PANEL });

export const hideCartPanel = () => ({ type: actionTypes.HIDE_CART_PANEL });

export const addProductIntoCart = (product) => ({
  type: actionTypes.ADD_PRODUCT_INTO_CART,
  payload: product,
});

export const removeProductFromCart = (id) => ({
  type: actionTypes.REMOVE_PRODUCT_FROM_CART,
  payload: id,
});

export const showCheckoutModal = () => ({
  type: actionTypes.SHOW_CHECKOUT_MODAL,
});

export const hideCheckoutModal = () => ({
  type: actionTypes.HIDE_CHECKOUT_MODAL,
});
