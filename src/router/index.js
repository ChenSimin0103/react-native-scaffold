import AcControl from './../view/ac-control/ac-control'
import Order from './../view/order/order'
import OrderList from './../view/order-list/order-list'
import StatusQuery from './../view/status-query/status-query'
import App from './../app'
import React from 'react'
import {Route, Switch} from 'react-router-dom'

class HmRouter extends React.Component {
    render() {
        return (
            <Switch>
                <Route path='/ac-control' component={AcControl}></Route>
                <Route path='/order' component={Order}></Route>
                <Route path='/order-list' component={OrderList}></Route>
                <Route path='/status-query' component={StatusQuery}></Route>
            </Switch>
        );
    }
}

module.exports = HmRouter;