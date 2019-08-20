import React, { Component } from 'react';

class IngredientCard extends Component {

  render () {


      return (
        <div onClick={this.props.handleClick}>
        <h1>
        {
          this.props.ingredients.attributes.name
        }
        </h1>

        </div>
      );
  }

}

export default IngredientCard;
