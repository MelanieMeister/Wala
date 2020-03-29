import React, {Component, Profiler} from 'react';
import '../../Assets/css/products.css';
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import {
    BrowserRouter as Router,
    Route,
    Link
}from 'react-router-dom';
import Welcome from "./Welcome";
import Login from "./Login";
import Profile from "../profile/Profile";
import Orders from "../orders/Orders";
import Stock from "../stock/Stock";
import NavigationBar from "../NavigationBar";
import Footer from "../Footer"
class Homepage extends Component {
    render() {
        return (
            <div className="App">

                <NavigationBar />
                <Router>
                    <div className="App">

                        {/*<Login></Login>*/}

                        {/*<Route exact path='/' component = {Welcome}/>*/}
                        {/*<Route  exact path ='/Login' component = {Login}/>*/}
                        {/*<Route exact path ='/Wala' component = {Homepage}/>*/}

                        {/*/!*<Route path="/orders/:id" exact component="{Order} />*!/*/}
                        {/*<Route path="/OrderDetailed/:id" component={OrderDetail} />*/}

                        {/*<Footer />*/}

                    </div>
                </Router>
                {/*<Profile></Profile>*/}
                {/*<Stock></Stock>*/}
                {/*<Orders></Orders>*/}
                 {/*<Router>*/}
                    {/*//     <div className="App">df*/}


                             {/*<Route path ='/Wala/Orders' component = {Orders}/>*/}
                             {/*<Route path ='/Wala/Profile' component = {Profile}/>*/}
                             {/*<Route path ='/Wala/Stock' component = {Stock}/>*/}

                             {/*<Route exact path ='/' component = {Homepage}/>*/}
                             {/*<Route exact path ='/Orders' component = {Orders}/>*/}
                             {/*<Route exact path ='/Profile' component = {Profile}/>*/}
                             {/*<Route exact path ='/Stock' component = {Stock}/>*/}

                    {/*//     </div>*/}
                    {/* </Router>*/}
                <Footer />
            </div>
            //

        )
    }
}

export default Homepage;
