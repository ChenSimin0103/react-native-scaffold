import React, {Component} from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'

import AcControl from './view/ac-control/AcControl'
import Order from './view/order/Order'
import OrderList from './view/order-list/OrderList'
import StatusQuery from './view/status-query/StatusQuery'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/ac-control' component={AcControl}></Route>
          <Route path='/order' component={Order}></Route>
          <Route path='/order-list' component={OrderList}></Route>
          <Route path='/status-query' component={StatusQuery}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;