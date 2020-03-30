import React, {Component, useState} from 'react';
import '../../Assets/css/default.css';
import '../../Assets/css/welcome.css';
import ReactDOM from 'react-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import background from '../../Assets/resources/Logo.png';
import Layer from '../../Assets/resources/Layer.svg';
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
                    {/*<a className="img-fluid" className="logo"></a>*/}


                    <div className="container">
                        <h1>Welcome</h1>
                        <div id="login">Please Log In</div>
                    </div>
                    <Login/>
                    {/*<button className="welcome-button" id="mail" type="submit">E-Log in with E-Mail</button>*/}
                    <button className="welcome-button" id="google" type="submit">Log in with Google</button>

                    <div id="or" className="text-nowrap bd-highlight">
                        OR
                    </div>
                    <hr id="welcomeSeperator"/>
                    <div className="row"></div>
                    <Link to="/Login">
                        <button className="welcome-button" id="register" href={"/Login"}>Register</button>
                    </Link>

                    {/*<Layer width={30}>*/}

                    {/*</Layer>*/}
                    <img src={Layer} alt="Layer" id="layer"/>
                    <p><img src="../../Assets/resources/Layer.svg" className="img-fluid layer mx-auto d-block" alt=""
                            height={250}/></p>

                    {/*<div><img src="../../Assets/resources/Layer.png.png" className="img-fluid" id="layer" alt="" /></div>*/}
                    <div className="row">fde</div>
                </div>


                {/*<a className="logo"></a>*/}
                {/*<img src="../../../src/Assets/resources/Layer.png" />*/}
                {/*<a className="logo">p</a>*/}



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

