import * as actionTypes from '../action-types';

const intialState = {
  products: { byId: {}, allId: [] },
  display: false,
  checkout: false,
  total: 0,
};

export const shoppingCartReducer = (
  state = intialState,
  { type, payload, ...rest }
) => {
  switch (type) {
    case actionTypes.SHOW_CART_PANEL:
      return { ...state, display: true };
    case actionTypes.HIDE_CART_PANEL:
      return { ...state, display: false };
    case actionTypes.SHOW_CHECKOUT_MODAL:
      return { ...state, checkout: true };
    case actionTypes.HIDE_CHECKOUT_MODAL:
      return { ...state, checkout: false };
    case actionTypes.ADD_PRODUCT_INTO_CART:
      if (state.products.allId.includes(payload.id)) {
        return {
          ...state,
          products: {
            ...state.products,
            byId: {
              ...state.products.byId,
              [payload.id]: {
                ...state.products.byId[payload.id],
                quantity: state.products.byId[payload.id].quantity + 1,
              },
            },
          },
          total: state.total + 1,
        };
      } else {
        return {
          ...state,
          products: {
            ...state.products,
            byId: {
              ...state.products.byId,
              [payload.id]: { ...payload, quantity: 1 },
            },
            allId: [...state.products.allId, payload.id],
          },
          total: state.total + 1,
        };
      }
    case actionTypes.REMOVE_PRODUCT_FROM_CART:
      if (
        state.products.allId.includes(payload.id) &&
        state.products.byId[payload.id].quantity > 1
      ) {
        return {
          ...state,
          products: {
            ...state.products,
            byId: {
              ...state.products.byId,
              [payload.id]: {
                ...state.products.byId[payload.id],
                quantity: state.products.byId[payload.id].quantity - 1,
              },
            },
          },
          total: state.total - 1,
        };
      } else if (
        state.products.allId.includes(payload.id) &&
        state.products.byId[payload.id].quantity === 1
      ) {
        const allId = state.products.allId.filter((id) => id !== payload.id);
        const byId = allId.reduce((acc, id) => {
          acc[id] = state.products.byId[id];
          return acc;
        }, {});

        return {
          ...state,
          products: {
            ...state.products,
            allId,
            byId,
          },
          total: state.total - 1,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};
