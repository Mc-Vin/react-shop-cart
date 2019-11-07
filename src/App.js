import React from 'react';
import Banner from './common/banner';
import NavBar from './common/navbar';
import List from './views/list';
import Cart from './views/cart';
import {Route, Switch, Redirect} from 'react-router-dom';
import {
  GlobalStyle,
  PageWrapper
} from './style';



function App() {
  return (
    <div>
      <GlobalStyle />
      <PageWrapper>
        <Banner />
        <NavBar />
        <Switch>
          <Route component={List} path='/list' />
          <Route component={Cart} path='/cart' />
          <Redirect from='/' to='/list' exact />
        </Switch>
      </PageWrapper>
    </div>
  );
}

export default App;
