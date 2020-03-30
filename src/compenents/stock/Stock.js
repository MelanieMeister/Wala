import React, {Component, useState} from 'react';
import '../../Assets/css/default.css';
import NavigationBar from "../NavigationBar";
import Footer from "../Footer"
import {db,storage} from "../../Fire";

class Stock extends Component {
    constructor(props) {
        super(props);
        this.state ={
            products: null
        }
    }

    render() {
        return (
            <div id="stock">
                <NavigationBar  headerName={"Stock"} showAvatar={true}></NavigationBar>
                {
                    //show a list of pr0oducts
                    this.state.products &&
                        this.state.products.map(p=>{
                            return(
                                <div className="order-card stock-card align-middle">
                                    <div className="container stockGrid">
                                        <div className="row firstCol">
                                            <img className="stockImage" src={this.getImage(p.imageUrl)}/>
                                        </div>
                                        <div className="secondCol col-sm-9">
                                            <h2 className="">{p.name}</h2>
                                            <div className= {
                                                (() => {
                                                    if(p.stock <5){
                                                        return "stock-label stock-label-small"
                                                    }else if(p.stock <20){
                                                        return "stock-label stock-label-medium"
                                                    } return "stock-label stock-label-big"
                                                })()
                                            }>Stock: {p.stock}</div>
                                        </div>
                                    </div>
                                    <a></a>
                                </div>
                            )
                        })
                }
                <Footer></Footer>
            </div>
        )
    }

    getImage = e => {
        // Create a reference to the file we want to download
        var starsRef =storage.ref().child(e);

        // Get the download URL
        starsRef.getDownloadURL().then(function(url) {
            // Insert url into an <img> tag to "download"
        }).catch(function(error) {

            // A full list of error codes is available at
            switch (error.code) {
                case 'storage/object-not-found':
                    // File doesn't exist
                    break;

                case 'storage/unauthorized':
                    // User doesn't have permission to access the object
                    break;

                case 'storage/canceled':
                    // User canceled the upload
                    break;


                case 'storage/unknown':
                    // Unknown error occurred, inspect the server response
                    break;
            }
        });
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
