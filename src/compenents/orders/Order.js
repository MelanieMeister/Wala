import React from 'react'
import '../../Assets/css/default.css';
import '../../Assets/css/products.css';
import {faBiking, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Order(id) {
    return (
        <div className="container">
            <div className="row">
                <div className="col-sm-3">klmljm
                    <FontAwesomeIcon className="fa-3x" icon={
                        (() => {
                            switch ("Pick Up") {
                                default:
                                    return faBiking;
                                case "Pick Up":
                                    return faBiking;
                                case "Delivery":
                                    return faShoppingBag;
                            }
                        })()
                    }> </FontAwesomeIcon>
                </div>
                <div className="col-sm-9"></div>
            </div>
            <div className="row">
                <div className="order-card align-middle">
                    <h2> CHF 120 </h2>
                    {
                        (() => {
                            switch ("Pick Up") {
                                default:
                                    return <div></div>;
                                case "Pick Up":
                                    return <div></div>;
                                case "Delivery":
                                    return <div>
                                        <p></p>
                                    </div>;
                            }
                        })()
                    }
                </div>
            </div>
        </div>
    )
}

export default Order;
