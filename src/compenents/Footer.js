import React, {Component} from 'react';
import '../Assets/css/default.css';
import '../Assets/css/nav.css';
class Footer extends Component {
    render() {
        return (


            <footer className="footer-bs big_image d-none d-md-block">
                <div className="row">
                    <div className="col-md-3 footer-brand animated fadeInLeft">
                        <h2>Logo</h2>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
                        <p>© 2020, All rights reserved</p>
                    </div>
                    <div className="col-md-4 footer-nav animated fadeInUp">
                        <div className="col-md-6">
                            <ul className="list">
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Contacts</a></li>
                                <li><a href="#">Terms & Condition</a></li>
                                <li><a href="#">Impressum</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 footer-social animated fadeInDown">
                        <h4>Follow Us</h4>
                        <ul>
                            <li><a href="#">Facebook</a></li>
                            <li><a href="#">Twitter</a></li>
                            <li><a href="#">Instagram</a></li>
                            <li><a href="#">RSS</a></li>
                        </ul>
                    </div>
                    <div className="col-md-3 footer-ns animated fadeInRight">
                        <h4>Newsletter</h4>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;
