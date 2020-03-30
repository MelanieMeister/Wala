import React, {Component} from 'react';
import '../../Assets/css/default.css';

import NavigationBar from "../NavigationBar";
import Footer from "../Footer"
import Avatar from "react-avatar";
import ProfileHeader from "./ProfileHeader";
import {db} from "../../Fire";
class Profile extends Component {

    constructor() {
        super();
        this.state = {
            about: '',
        }

    }
    render() {
        return (
            <div id="profile">
                <NavigationBar headerName={"Tonys shop"} showAvatar={false}  ></NavigationBar>
                <div className="container">
                    <div className="container-fluid">
                        <Avatar name="Foo Bar" size="75" round={true} className="profile-avatar shop-logo"  src="../../Assets/resources/shop_logo.png" />
                    </div>

                    <div className="profile-image">
                        <img  className="img-fluid shop-background mx-auto d-block" alt="" src="../../Assets/resources/shop_background.png.png" />
                    </div>
                    <div className="profile-image">
                        <h1 className="profile-h1">Team</h1>
                        <img  className="img-fluid  mx-auto d-block team-image" alt=""/>
                    </div>

                    <div >
                        <h1 className="profile-h1">About</h1>
                        <textarea>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</textarea>
                        <img  className="img-fluid  mx-auto d-block team-image" alt=""/>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        )
    }

}

export default Profile;
