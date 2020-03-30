import React, {Component, Link} from 'react';
import '../../Assets/css/default.css';
import '../../compenents/pages/Welcome';
import NavigationBar from "../NavigationBar";
import Footer from "../Footer"
import {db} from "../../Fire";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBiking, faShoppingBag,faArrowRight} from "@fortawesome/free-solid-svg-icons";

class Orders extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            header: 'Orders',
        }
    }

    render() {
        return (

            <div>
                <NavigationBar headerName={"Orders"} showAvatar={true}></NavigationBar>
                {
                    //show a list of products
                    this.state.orders &&
                    this.state.orders.map((order,i) => {
                        return (
                            <div className="gridProduct">


                                <div className="order-card-way">
                                    <FontAwesomeIcon className="fa-3x" icon=
                                        {
                                            (() => {
                                                switch (order.delivery) {
                                                    default:
                                                        return faBiking;
                                                    case "pickup":
                                                        return faBiking;
                                                    case "delivered":
                                                        return faShoppingBag;
                                                }
                                            })()
                                        }> </FontAwesomeIcon>
                                </div>


                                <div className="order-card align-middle">
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td className="col">
                                                <h2  > {this.sumProducts(order)} CHF</h2>
                                                <div className="card-way">{order.id}
                                                    {
                                                        (() => {
                                                            switch (order.delivery) {
                                                                default:
                                                                    return <div>Pick Up</div>;
                                                                case "pickup":
                                                                    return <div>Pick Up</div>;
                                                                case "delivered":
                                                                    if(order.city){
                                                                        return "Delivery - "+ order.city
                                                                    }else{
                                                                        return "Delivery"
                                                                    }

                                                            }
                                                        })()
                                                    }
                                                    <div className="card-date">30.03.2020</div>
                                                </div>
                                            </td>
                                            <td className="col-sm-2">
                                                <FontAwesomeIcon className="fa-2x" icon={faArrowRight}></FontAwesomeIcon>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        )
                    })
                }
                <Footer></Footer>
            </div>
        )
    }

    sumProducts(order) {
        let total = 0;
        console.log(order);
        for (let p in order.products) {

            let amount = db.collection('orders').doc(p).get()
                .then(doc => {
                    if (doc && doc.exists) {
                        console.log(doc.id);
                    } else {
                        console.log("ikn")
                    }
                })

                .catch(error => console.log(error))
        }


        return total+100;
    }




    /**
     * Get a List of all products of the database and
     * set it as the state.
     */
    componentDidMount() {


        db.collection('orders').get()
            .then(snapshot => {
                const orders = [];
                snapshot.forEach(order => {
                    const data = order.data();
                    orders.push(data)
                });
                this.setState({orders: orders})
            })
            .catch(error => console.log(error))
    }

    calculate() {

    }

}

// const Person/* = () => {                               // facade
//     orders.map((car, i) => {
//         return (
//             <div key={i}>
//                 <Link
//                     to={{ pathname: '/Carnama/'+car.id}}
//                     className="list-group-item"
//                     key={car.id}>
//                     {car.name}
//                 </Link>
//             </div>
//         )
//     });
// };*/

export default Orders;
