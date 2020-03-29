import React from 'react';
import Products from '../model/Product';
import ProductCard from '../compenents/stock/ProductCard';
import Measure from '../model/Measure';
import '../Assets/css/products.css';
import DeliverWay from '../model/WayToDelivery';

function ProductList() {
    const products = [
        {
            id: 1,
            name: 'Wine',
            price: 22.00,
            description: '...',
            measure: Measure.LITER,
            wayToDeliver: DeliverWay.PICK_UP,
        },
        {
            id: 2,
            name: 'Beer',
            price: 8.00,
            description: 'non alcohol',
            measure: Measure.LITER,
            wayToDeliver: DeliverWay.PICK_UP,
        },
        {
            id:3,
            name: 'Apfel',
            price: 72.00,
            description: 'some',
            measure: Measure.PIECE,
            wayToDeliver: DeliverWay.DELIVERY,
        }
    ]
    const productList = products.map(product => <Products key={product.id} product = {product} />)
    return <div>{productList}</div>

}


export  default ProductList;
