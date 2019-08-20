import React, { Component } from 'react';
import './App.css';
import Ingredients from './components/Ingredients'
import Fridge from './components/Fridge'

class App extends Component {

  state = {
      ingredients: [],
      fridgeItems: []
  }

  componentDidMount = () => {
    fetch("http://localhost:3000/ingredients").then(res => res.json()).then(ingredients => {
        this.setState({ingredients: ingredients.data})
    })
  }

  handleClick = (ingredient) => {
      this.setState({fridgeItems: [...this.state.fridgeItems, ingredient.id]})
  }

  renderFriedgeItems = () => {

    return this.state.fridgeItems.map(item => {
        return this.state.ingredients.find(ingredient => ingredient.id === item)
      })

  }

  fetchRecipies = () => {

    const fridgeItems = this.state.fridgeItems.map(item => {
        return this.state.ingredients.find(ingredient => ingredient.id === item)
      })

    const fridgeItemsObj = {fridgeItems}

    fetch("http://localhost:3000/ingredients", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(fridgeItemsObj)
    })

  }

  render() {
    console.log(this.state.fridgeItems);
    return (
      <div>
        <Ingredients ingredients={this.state.ingredients} handleClick={this.handleClick}/>
        <Fridge fetchRecipies={this.fetchRecipies} fridgeItems={this.renderFriedgeItems()}/>
      </div>
    );

  }

}

export default App;
