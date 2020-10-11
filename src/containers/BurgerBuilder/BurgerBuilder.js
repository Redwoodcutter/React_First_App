import React, {Component} from 'react';
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

class BurgerBuilder extends Component {
    //constructor(props){
    //    super(props);
    //        this.state={...}
    //    }
    // }
    //object not a array -- >
    state={
        ingredients: {
            sala: 1,
            bacon: 1,
            cheese: 2,
            meat:2,
        }

    }
    render(){
        return(
           <Aux>
               <Burger ingredients={this.state.ingredients} />
               <BuildControls />
           </Aux>
        );
    }
}

export default BurgerBuilder