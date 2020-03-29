import React from 'react';
import Order from './Order';
import Measure from '../../model/Measure';
import '../../Assets/css/products.css';
import DeliverWay from '../../model/WayToDelivery';

function OrderList() {
    const orders = [
        {
            id: 1,

            product: {
                id: 1,
                name: 'Wine',
                price: 22.00,
                description: '...',
                measure: Measure.LITER
            },
            price: 22.00,
            date: new Date(2020,3,29),
            amount: 2,
            wayToDeliver: DeliverWay.DELIVERY,
            way: 'delivery'
        },
        {
            id: 2,
            product: {
                id: 2,
                name: 'Beer',
                price: 8.00,
                description: 'non alcohol',
                measure: Measure.LITER
            }, price: 8.00,
            amount: 2,
            date: new Date(2020,3,29),
            wayToDeliver: DeliverWay.PICK_UP,
            way: 'pickup'
        },
        {
            id: 3,
            product:  {
                id:3,
                name: 'Apfel',
                price: 72.00,
                description: 'some',
                measure: Measure.PIECE
            },  price: 72.00,
            amount: 2,
            date: new Date(2020,3,29),
            wayToDeliver: DeliverWay.PICK_UP,
            way: 'delivery'
        }
    ]

    const orderList = orders.map(order => <Order key={order.id} product = {order} />)
    return <div>{orderList}</div>
}

export  default OrderList;

