import React, {Component} from 'react';
import NavigationBar from './compenents/NavigationBar';
import Footer from './compenents/Footer';
import Homepage from './compenents/pages/Homepage';

import './Assets/css/default.css';
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
import Orders from "./compenents/orders/Orders";
import Welcome from "./compenents/pages/Welcome";
// import Products from "./compenents/pages/Pro";
import Profile from "./compenents/profile/Profile";
import Stock from "./compenents/stock/Stock";
// import { translate, Trans } from 'react-i18next';
import { withTranslation, Trans } from 'react-i18next';
import OrderDetail from "./compenents/orders/OrderDetail";
import Login from "./compenents/pages/Login";
// import Scanner from './compenents/scanner/Scanner';
// import ScanOutput from './compenents/scanner/ScanOutput';
import fire from "./Fire"
import OrderList from "./compenents/orders/OrderList";

// import Orders from "../src/compenents/orders/Orders";
// var { t, i18n } = this.props;
class App extends Component {
    constructor() {
        super();
        this.state = {
            user:{},
        }
    }

    componentDidMount(){
        this.authListener();
    }
    authListener(){
        fire.auth().onAuthStateChanged((user)=>{
            if(user){
                this.setState({user});
            }else{
                this.setState({user:null});
            }
        })
    }
    render() {
        return (

          <Router>
              <div className="App">
                  {/*{this.state.useJSXTextNode ? (   <Orders/> ):( <Welcome/>)};*/}

                  {/*{this.state.user ? (   <Orders/> ):( <Login/>)};*/}
                  {/*<Login></Login>*/}
                  {/*<NavigationBar />*/}

                  <Route exact path='/' component = {Welcome}/>
                  <Route  exact path ='/Login' component = {Login}/>
                  <Route exact path ='/Wala' component = {Homepage}/>

                  <Route  path ='/Orders' component = {Orders}/>
                  <Route  path ='/Profile' component = {Profile}/>
                  <Route   path ='/Stock' component = {Stock}/>
                  {/*<Route path ='/Wala/Orders' component = {Orders}/>*/}
                  {/*<Route path ='/Wala/Profile' component = {Profile}/>*/}
                  {/*<Route path ='/Wala/Stock' component = {Stock}/>*/}
                  {/*/!*<Route path="/orders/:id" exact component="{Order} />*!/*/}
                  {/*<Route path="/OrderDetailed/:id" component={OrderDetail} />*/}

                  {/*<Footer />*/}

              </div>



          </Router>


        )
    }

    // _scan() {
    //     this.setState({scanning: !this.state.scanning});
    // }
    //
    // _onDetected(result) {
    //     this.setState({results: this.state.results.concat([result])});
    // }
}
export default withTranslation('common')(App)
// export default App;
