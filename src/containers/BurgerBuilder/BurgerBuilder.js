import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.8,
    meat: 1.5,
    bacon: 0.1,
}

class BurgerBuilder extends Component {
    //constructor(props){
    //    super(props);
    //        this.state={...}
    //    }
    // }
    //object not a array -- >
    state={
        ingredients: {
            sala: 0,
            bacon: 0,
            cheese: 0,
            meat:0,
        },
        totalPrice: 10
    }

    addIngredientHandler = (type) => {
        //Update ingredients
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        //Update Price
        updatedIngredients[type] = updatedCount;
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients: updatedIngredients})
    };

    removeIngredientHandler = (type) => {

    };

    render(){
        return(
           <Aux>
               <Burger ingredients={this.state.ingredients} />
               <BuildControls
                ingredientAdded = {this.addIngredientHandler}
               />
           </Aux>
        );
    }
}

export default BurgerBuilder