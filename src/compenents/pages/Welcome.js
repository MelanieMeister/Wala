import React, {Component, useState} from 'react';
import '../../Assets/css/default.css';
import '../../Assets/css/welcome.css';
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import background from '../../Assets/resources/Logo.png';
import Layer from '../../Assets/resources/Layer.svg';
import Logo from '../../Assets/resources/Logo.svg';
import Login from '../pages/Login'
import {auth} from "../../Fire";
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import {layer} from "@fortawesome/fontawesome-svg-core";
import AcUnitIcon from "@material-ui/icons/AcUnit";

class Welcome extends Component {
    constructor(props) {
        super(props);
        this.state = {
            password: '',
            email: '',
        }
    }

    render() {
        return (
            // <a className="content" style={sectionStyle}>
            <a className="content container">
                <div id="padding"></div>
                <div className="text-center ">

                    {/*//justify-content-center*/}
                    <img src={Logo} alt="Logo" id="logo" className="justify-content-center"/>
                    <p><img src="../../Assets/resources/Logo.svg" className="img-fluid justify-content-center layer mx-auto d-block" alt="" height={250}/></p>

                    {/*show mobile*/}
                    <a className="d-md-none">
                        <div className="container">
                            <h1>Welcome</h1>
                            <div id="login">Please Log In</div>
                        </div>
                        <Login/>
                    </a>

                    {/*show desktop*/}
                    <a className="d-none d-md-block justify-content-center">
                        <div className="container">
                            <h1>Welcome</h1>
                            <div id="login">Please Log In</div>
                        </div>
                        <Login/>
                    </a>


                    <Link to="/Orders">
                        <button className="welcome-button" id="google" type="submit" href={"/Orders"}>Log in with Google</button>
                    </Link>
                    <div id="or" className="text-nowrap bd-highlight">
                        OR
                    </div>
                    <hr id="welcomeSeperator"/>
                    <div className="row"></div>
                    <Link to="/Orders">
                        <button className="welcome-button" id="register" href={"/Orders"}>Register</button>
                    </Link>

                    <img src={Layer} alt="Layer" id="layer"/>
                    <p><img src="../../Assets/resources/Layer.svg" className="img-fluid layer mx-auto d-block" alt=""
                            height={250}/></p>

                    <div className="row">fde</div>
                </div>



            </a>
        )

    }
    login(e) {
        e.preventDefault();
        auth.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .then((u) => {
        }).catch((error => {
            console.log(error);
        }));
    }

    register() {
        auth.auth().signInWithEmailAndPassword(this.props.email, this.props.password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });
    }
}


export default Welcome;

