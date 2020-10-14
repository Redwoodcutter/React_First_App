import React from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey =>{
            return  (
            <li key={igKey}>
                <span style={{textTransform:'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
            </li>);
        });
   

    return(
      <Aux>
          <h3>Your Order</h3>
          <p>Amazing Burger with following ingredienst: </p>
          <ul>
            {ingredientSummary}
          </ul>
          <p><strong>Total Price: {props.price} </strong></p>
          <p> Continue to Checkout?</p>
          <Button btnType="Danger" clicked={props.purchadeCancelled} >CANCEL</Button>
          <Button btnType="Success" clicked={props.purchadeContinued} >CONTINUE</Button>
      </Aux>  
    );

};
export default orderSummary;