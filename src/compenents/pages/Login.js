import React, {Component, useState} from 'react';
import {Link} from "react-router-dom";
// import { useForm } from "react-hook-form";
import Fire from "../../Fire"
import firebase from "firebase";
import {db, auth} from "../../Fire"
import Modal from "react-modal";

function Login() {
    const [modalIsOpen, setModalIsOpen] = useState(false)

    return(
        <div className='App login-form-1'>
            <button onClick={() => setModalIsOpen(true)} className="welcome-button" id="mail" type="submit">Login with E-Mail</button>
            <Modal isOpen={modalIsOpen}  >
                <div className="col-md-6">
                    <h3>Login for Form 1</h3>
                    <form>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Your Email *" value=""/>
                        </div>
                        <div className="form-group">
                            <input type="password" className="form-control" placeholder="Your Password *" value=""/>
                        </div>
                        <div className="form-group">
                            <Link to="/Orders">
                                <input type="submit" className="btnSubmit" value="Login" href="/Orders"/>
                            </Link>
                        </div>
                    </form>
                </div>

            </Modal>
        </div>
    )
}

export default Login
