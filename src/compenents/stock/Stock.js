import React, {Component} from 'react';
import '../../Assets/css/default.css';
import NavigationBar from "../NavigationBar";
import Footer from "../Footer"
import {db} from "../../Fire";
class Stock extends Component {
    constructor(props) {
        super(props);
        this.state ={
            products: null
        }
    }

    render() {
        return (
            <div>
                <NavigationBar></NavigationBar>
                <header>
                    <button type="button">+</button>
                </header>
                <div>Products</div>
                {
                    //show a list of pr0oducts
                    this.state.products &&
                        this.state.products.map(p=>{
                            return(
                                <div>
                                    <p>{p.name}</p>
                                </div>
                            )
                        })
                }

                <Footer></Footer>
            </div>



        )
    }

    /**
     * Get a List of all products of the database and
     * set it as the state.
     */
    componentDidMount() {
        db.collection('products').get()
            .then(snapshot =>{
                const products = []
                snapshot.forEach(p=>{
                    const data = p.data()
                    products.push(data)

                })
                this.setState({products: products})
            })
            .catch(error=>console.log(error))
    }


}

export default Stock;
