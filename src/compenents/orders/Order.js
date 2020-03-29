import React, {Component} from 'react'
import '../../Assets/css/default.css';
import '../../Assets/css/products.css';
import Welcome from '../../compenents/pages/Welcome';
import {faBiking, faShoppingBag} from '@fortawesome/free-solid-svg-icons'
import ArrowIcon from '@material-ui/icons/ArrowForwardIos';
import DeliverWay from '../../model/WayToDelivery';

import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import OrderDetail from "./OrderDetail";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Order({product}) {
    return (
        <div className="gridProduct">
            {/*<div className={""}>*/}
                <div className="order-card-way">
                    <FontAwesomeIcon className="fa-3x" icon={
                        (() => {
                            switch (product.way) {
                                case "pickup":
                                    return faBiking;
                                case "delivery":
                                    return faShoppingBag;
                            }
                        })()
                    }> </FontAwesomeIcon>
                </div>


                <div className="order-card align-middle">
                    <h2>{product.price}</h2>
                    <div  class="">{product.way}</div>
                    {/*<div class="order-date">{product.date}</div>*/}
                </div>
            {/*</div>*/}
        </div>
//         <div className="row no-gutters">
//           set
//             <div className="col-6 col-md-4">
// fd
//             </div>
//             <div className="col-sm-6 col-md-8">
//                 {/*{product.wayToDeliver == DeliverWay.DELIVERY*/}
//                 {/*<h2>*/}
//                 {/*    Du hast {unreadMessages.length} ungelesene Nachrichten.*/}
//                 {/*</h2>*/}
//                 {/*}*/}
//
//
//                 {/*<FontAwesomeIcon>{*/}
//                 {/*    (() => {*/}
//                 {/*        switch (product.wayToDeliver) {*/}
//                 {/*            case DeliverWay.DELIVERY: return faBiking ;*/}
//                 {/*            case DeliverWay.PICK_UP:return faShoppingCart;*/}
//                 {/*        }*/}
//                 {/*    })()*/}
//                 {/*}</FontAwesomeIcon>*/}
//             </div>
//
//         </div>
        //
        // <div className="card">
        //     <div className="card-body">
        //         <div className="container">
        //             <div className="row">
        //                 <div className="col">sd
        //                     <h5>{product.name}</h5>
        //
        //
        //                     {/*<div>{product.price} CHF</div>*/}
        //                     {/*<div>{product.wayToDeliver.text}</div>*/}
        //                 </div>
        //                 {/*<Route exact path ='/Orders' component = {Orders}/>*/}
        //                 {/*<button onClick={() => this.nextPath(product.id) }>*/}
        //                 {/*    change path*/}
        //                 {/*</button>*/}
        //                 <button>
        //                     {/*<a className="nav-link col-sm" href="/OrderDetailed/{product.id}"   >*/}
        //                     {/*    erv,kpfok,k,go*/}
        //                     {/*</a>*/}
        //                     {/*<button> <Link to={"OrderDetailed/"+ product.id}></Link>h</button>*/}
        //
        //                     <Link to={"/OrderDetailed/"+product.id}>adddddsds</Link>h
        //                 </button>
        //
        //                 <div className=".col-6 .col-md-4">
        //                     <ArrowIcon></ArrowIcon>
        //                 </div>
        //                 {/*</Link>*/}
        //             </div>
        //         </div>
        //     </div>
        // </div>

    )

}

//
// function setState(way) {
//     switch (way) {
//         case DeliverWay.DELIVERY: faBiking ;
//         case DeliverWay.PICK_UP:faShoppingCart;
//     }
// }
// export default withRouter(Order);
export default Order;
