import React, {Component} from 'react'
import '../Assets/css/default.css';

import ArrowIcon from '@material-ui/icons/ArrowForwardIos';
function Product({product}) {
    return (
        <div className="card" >
            <div className="card-body">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h5>{product.name}</h5>
                            <div>{product.price} CHF</div>
                            {/*<div>{product.wayToDeliver.text}</div>*/}
                        </div>
                        <div className=".col-6 .col-md-4">
                            <ArrowIcon></ArrowIcon>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )


}
export default Product


const textInputProjector = textAttr => {

    const Comp = document.createElement(Component);


    return Comp;
};
