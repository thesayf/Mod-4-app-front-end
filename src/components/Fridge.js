import React, { Component } from 'react';
import IngredientCard from './IngredientCard'

class Fridge extends Component {

  render () {

      return (
        <div>

        {

          this.props.fridgeItems.map(items => {
              return <IngredientCard ingredients={items}/>
          })

        }

        <button onClick={this.props.fetchRecipies}>Search for recipies </button>

        </div>
      );

  }

}


export default Fridge;
