import React, {Component} from 'react';
import Homepage from './compenents/pages/Homepage';

import './Assets/css/default.css';
import {
    BrowserRouter as Router,
    Route
}from 'react-router-dom';
import Orders from "./compenents/orders/Orders";
import Welcome from "./compenents/pages/Welcome";
import Profile from "./compenents/profile/Profile";
import Stock from "./compenents/stock/Stock";
import OrderDetail from "./compenents/orders/OrderDetail";
import fire from "./Fire"

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
                  {/*{this.state.user ?(<Orders/>): (<Welcome/>)};*/}

                  <Route  exact path ='/' component = {Welcome}/>
                  <Route exact path ='/Wala' component = {Homepage}/>

                  <Route  path ='/Orders' component = {Orders}/>
                  <Route  path ='/Profile' component = {Profile}/>
                  <Route   path ='/Stock' component = {Stock}/>
                  <Route path="/OrderDetail" component={OrderDetail} />
                  <Route path="/Orders/id" component={OrderDetail} />

              </div>
          </Router>
        )
    }
}
export default App;
