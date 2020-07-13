import React, { Component } from 'react';
import Menu from './MenuComponent.js';
import Dishdetail from './Dishdetail' ;
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';


class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
}
    onSelectedDish(dishId) {
        this.setState({
            selectedDish : dishId
        });
    }
  render() {

      return (
        <div>
        <Header />
        <Menu dishes = {this.state.dishes} 
              onClick={(dishId) => this.onSelectedDish(dishId)} />
        <Dishdetail 
              dish = {this.state.dishes.find((dish) => dish.id===this.state.selectedDish ) }/>
              <Footer />
        </div>
      
        );
    
  }
  
}


export default Main;
