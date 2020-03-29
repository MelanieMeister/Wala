import React, {Component} from "react";
import '../../Assets/css/nav.css';
// import { useForm } from "react-hook-form";
// import Image from 'react-bootstrap/Image'
import Avatar from 'react-avatar';

class ProfileHeader extends Component{
    constructor(props) {
        super(props);
        this.state ={
            email: ''
        }
    }

    render() {
        return (
            <div>

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


            </div>
        );
    }
}

export default ProfileHeader
