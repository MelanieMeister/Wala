import React, {Component} from 'react';
import Link from 'react-router-dom';
import '../Assets/css/default.css';
import '../Assets/css/nav.css';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import ProfileHeader from "./profile/ProfileHeader";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faUserAlt } from '@fortawesome/free-solid-svg-icons'

class NavigationBar extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <header>
                <ProfileHeader headerName={this.props.headerName} showAvatar={this.props.showAvatar}></ProfileHeader>


                {/*show desktop*/}
                <nav className="big_image d-none d-md-block navbar navbar-expand-lg navbar-light bg-light" id={"desktop-header"}>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <a className="nav-link" href="/Orders">Orders<span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Stocks">Stocks</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/Profile">Profile</a>
                            </li>

                        </ul>
                    </div>
                </nav>

                {/*show mobile device*/}
                <nav className="big_image  d-md-none navbar fixed-bottom navbar-light bg-light footer-nav-mobile">
                    <li className="nav-item">
                        <a className="nav-link col-sm" href="/Orders">
                            <FontAwesomeIcon icon={faShoppingCart} />
                            <p className="nav-label">Orders</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link col-sm" href="/Stock">
                            <FontAwesomeIcon icon={faHome} />
                            <p className="nav-label">Stock</p>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link col-sm" href="/Profile">
                            <FontAwesomeIcon icon={faUserAlt} />
                            <p className="nav-label">Profile</p>
                        </a>
                    </li>
                </nav>
            </header>
        )
    }
}

export default NavigationBar;
