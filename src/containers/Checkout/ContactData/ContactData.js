import React, { Component } from 'react';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import classes from './ContactData.css';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
class ContactData extends Component {

    state={
        orderForm: {
            name: 'Cevdet Azbilir',
            street: 'Test Street 3',
            zipCode: '41400',
            country: 'Turkey', 
            email: 'test@test.com',
            deliveryMethod: 'fastest'
        },
        loading:false
    }

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
           price: this.props.price
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
                <Input inputtype="input" type="text" name="name" placeholder="Your Name"></Input>
                <Input inputtype="input" type="email" name="email" placeholder="Your email"></Input>
                <Input inputtype="input" type="text" name="street" placeholder="Your street"></Input>
                <Input inputtype="input" type="text" name="postal" placeholder="Your postal"></Input>
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