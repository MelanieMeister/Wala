import ArrowIcon from "@material-ui/icons/ArrowForwardIos";
import React, {Component} from "react";
class OrderDetail extends React.Component{
render() {
    return (
        <div className="card" >
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            IDd: {this.props.params.all}
                            sd
                            {/*<h5>{product.id}</h5>*/}
                            7sdc.
                            {/*<div>{product.price} CHF</div>*/}
                            {/*<div>{product.wayToDeliver.text}</div>*/}
                        </div>
                        <div className=".col-6 .col-md-4 delivery-way">
                            <ArrowIcon></ArrowIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const
}
// function OrderDetail({product}) {
//     return (
//         <div className="card" >
//             <div className="card-body">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             IDd: {this.props.params.id}
//                             sd
//                             {/*<h5>{product.id}</h5>*/}
//                             7sdc.
//                             {/*<div>{product.price} CHF</div>*/}
//                             {/*<div>{product.wayToDeliver.text}</div>*/}
//                         </div>
//                         <div className=".col-6 .col-md-4">
//                             <ArrowIcon></ArrowIcon>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//
//     )


// }
export default OrderDetail
