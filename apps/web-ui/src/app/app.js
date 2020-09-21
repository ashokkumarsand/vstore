import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Redirect, Route, Switch } from 'react-router-dom';
import { initializeIcons } from '@uifabric/icons';

import { store } from '@vstore/shared/store';
import { HeaderModule } from '@vstore/ui/header';
import { Loader } from '@vstore/ui/loader';
import { ProductModule } from '@vstore/ui/shopping-catalogue';
import { ErrorBoundary } from '@vstore/ui/error-boundary';
import { OrderHistory } from '@vstore/ui/order-history';

import './app.css';

initializeIcons();

export const App = () => {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./app.css file.
   */
  return (
    <div className="app">
      <Provider store={store}>
        <HeaderModule />
        <ErrorBoundary>
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/products" />
              </Route>
              <Route path="/products">
                <ProductModule />
              </Route>
              <Route path="/history">
                <OrderHistory />
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Provider>
    </div>
  );
};
export default App;
