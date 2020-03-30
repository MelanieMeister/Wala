import React, {Component} from "react";
import '../../Assets/css/nav.css';
// import { useForm } from "react-hook-form";
// import Image from 'react-bootstrap/Image'
import Avatar from 'react-avatar';

class ProfileHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }

    }

    render() {
        return (
            <div>

                <div className="container">

                    <div className="row align-items-center">
                        <h2 className="col align-baseline ">
                            {this.props.headerName}
                        </h2>
                        {
                            this.avatarShowing(this.props.showAvatar)
                        }
                    </div>
                </div>


            </div>
        );
    }

    /**
     * show the avatar if it is needed. He will be at the right
     * side of the GUI.
     * @param props define if the avatar should be shown
     * @returns { nothing or the rendered avatar }
     */
    avatarShowing(props) {
        if(props){
            return (

                <div className="col-auto">
                    <Avatar name="Foo Bar" size="50" round={true} className="profile-avatar"/>
                </div>
            );
        }

    }
}

export default ProfileHeader
