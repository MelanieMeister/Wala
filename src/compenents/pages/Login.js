import React, {Component} from "react";
import {Link} from "react-router-dom";
// import { useForm } from "react-hook-form";
import Fire from "../../Fire"
import firebase from "firebase";
import {db, auth} from "../../Fire"

class Login extends Component {

    componentDidMount() {
        console.log('mounted')
        db.collection('products').get()
            .then(snapshot =>{
                const products = []
                snapshot.forEach(p=>{
                    const data = p.data()
                    products.push(data)
                })

                console.log(snapshot)
            })
            .catch(error=>console.log(error))
    }

    constructor(props) {
        super(props);
        // this.login = this.login.bind(this);
        // this.handleChange = this.handleChange.bind(this);
        this.state = {
            email: '',
            password: ''
        }
    }

    login(e) {
        e.preventDefault();
        Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error => {
            console.log(error);
        }));
    }

    emailChanged = (event) => {
        this.setState({
            email: event.target.value
        })
    };
    pwChanged = (event) => {
        this.setState({
            password: event.target.value
        })
    };
    handleSubmit = (e) => {
        let msg = Fire.database().ref('messages').orderByKey().limitToLast()
        Fire.database().ref('messages').push({
            kk: 'f',
            id: 'SDFJIOF89'
        });
        // Fire.database().ref('products').push({
        //     id: 2,
        //     name: 'Apple',
        //     price: 0.70,
        //     measure: 'piece'
        // })
        this.state({
            email: this.state.email+' 2'
        })
    };

    render() {
        return (
            <div>v
                <form onSubmit={this.handleSubmit}>
                    <label>E-Mail</label>
                    <input type="email" value={this.state.email}
                           onChange={this.emailChanged}/>
                    <label>Password</label>
                    <input type="password" value={this.state.password}
                           onChange={this.pwChanged}/>

                    <input type="submit"/>
                    {/*<Link to="/Wala">*/}
                    {/*    <input type="submit"/>*/}
                    {/*</Link>*/}
                </form>
            </div>
        );
    }
}

export default Login

// const { register, handleSubmit, watch, errors } = useForm();
// const onSubmit = data => {
//     console.log(data);
// }; // your form submit function which will invoke after successful validation
//
// console.log(watch("example")); // you can watch individual input by pass the name of the input

//
