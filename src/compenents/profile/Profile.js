import React, {Component} from 'react';
import '../../Assets/css/default.css';

import NavigationBar from "../NavigationBar";
import Footer from "../Footer"
import Avatar from "react-avatar";
class Products extends Component {
    render() {
        return (
            <div>
            {/*// <div className="container-fluid">*/}
                <NavigationBar></NavigationBar>
                <div className="container">

                    <div className="row align-items-center">
                        <h2 className="col align-baseline ">
                            HEADER
                        </h2>
                        <div className="col-auto">
                            <Avatar name="Foo Bar" size="50" round={true} className="profile-avatar"/>
                        </div>

                    </div>
                </div>

                <Footer></Footer>
            </div>



        )
    }
}

export default Products;
