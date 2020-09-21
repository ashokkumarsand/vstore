import { createStore } from 'redux-dynamic-modules';
import { getThunkExtension } from 'redux-dynamic-modules-thunk';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';

export const store = createStore({
  initialState: {},
  extensions: [getThunkExtension()],
  advancedComposeEnhancers: composeWithDevTools({
    maxAge: 500,
  }),
});
