import React, {Component} from 'react';
import '../../Assets/css/default.css';
import '../../compenents/pages/Welcome';

import OrderList from './OrderList';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
// import {Route, withRouter} from 'react-router-dom';
import OrderDetail from "./OrderDetail";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer"
class Orders extends Component {
    constructor(props) {
        super(props);

        this.state ={
            email: ''
        }
    }

    render() {
        return (

            <div>
                <NavigationBar></NavigationBar>

                <OrderList/>
                {/*<Route path="/Orders/:id" exact component={OrderDetail()} />*/}

                {/*<Router>*/}
                {/*    <Route path="/Orders/" exact component={OrderList} />*/}
                {/*</Router>*/}
                <Footer></Footer>
            </div>
        )
    }

}

export default Orders;
