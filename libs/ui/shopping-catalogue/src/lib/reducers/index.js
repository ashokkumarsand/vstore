import * as actions from '../action-types';

const INITAL_STATE = {
  pageCursor: {
    offset: 0,
    limit: 15,
    sortby: 'name',
    order: 'asc',
    filterBy: '',
  },
  loading: false,
  error: null,
  data: [],
};
export const productReducer = (
  state = INITAL_STATE,
  { type, payload, ...rest }
) => {
  switch (type) {
    case actions.FETCH_PRODUCT_LIST:
      return {
        ...state,
        pageCursor: {
          offset: payload.offset,
          limit: payload.limit,
          sortby: payload.sortby,
          order: payload.order,
          filterBy: payload.filterBy,
        },
        loading: true,
        error: null,
      };
    case actions.FETCH_PRODUCT_LIST_SUCCESS:
      return {
        ...state,
        data: payload,
        loading: false,
        error: null,
      };
    case actions.FETCH_PRODUCT_LIST_FAILED:
      return {
        ...state,
        loading: false,
        error: payload,
      };
    default:
      return state;
  }
};
