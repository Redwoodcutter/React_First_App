import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';

class ContactData extends Component {
    state={
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault(); // reaload breaker.
            this.setState({loading:true});
       const order = {
           ingredients: this.props.ingredients,
           price: this.props.price,
           customer: {
               name: 'Cevdet Azbilir',
               address: {
                   street: 'Test Street 3',
                   zipCode: '41400',
                   country: 'Turkey' 
               },
               email: 'test@test.com'
           },
           deliveryMethod: 'fastest'
       }
        axios.post('/orders.json', order)
            .then(response =>{
                this.setState({ loading: false });
                this.props.history.push('/');
            })
            .catch(error=>{
                this.setState({ loading: false });
            });
        console.log(this.props.ingredients);
    }

    render(){
        let form = (
            <form>
                <input className={classes.Input} type="text" name="name" placeholder="Your Name"></input>
                <input className={classes.Input} type="email" name="email" placeholder="Your email"></input>
                <input className={classes.Input} type="text" name="street" placeholder="Your street"></input>
                <input className={classes.Input} type="text" name="postal" placeholder="Your postal"></input>
                <Button btnType="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );
        if(this.state.loading){
            form = <Spinner />;
        }
        return(
            <div className={classes.ContactData}>
                <h4>Enter Contact Data</h4>
                {form}
            </div>
        );
    }
}
export default ContactData;