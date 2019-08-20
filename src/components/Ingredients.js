import React, { Component } from 'react';
import IngredientCard from './IngredientCard'

class Ingredients extends Component {


  render () {

    console.log(this.props);
      return (
        <div>

        {

          this.props.ingredients.map(ingredient => {
            return <IngredientCard ingredients={ingredient} handleClick={() => this.props.handleClick(ingredient)}/>
          })


        }

        </div>
      );
  }

}


export default Ingredients;
