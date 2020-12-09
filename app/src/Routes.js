import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

const Product = lazy(() => import('./screens/Product'));
const ProductList = lazy(() => import('./screens/ProductList'));

const Routes = () => (
  <BrowserRouter>
    <Suspense fallback={() => <div/>}>
      <Switch>
        <Route path='/' exact component={ProductList}/>
        <Route path='/product' exact component={Product}/>
        <Route path='/product/:id' component={Product}/>
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default Routes;