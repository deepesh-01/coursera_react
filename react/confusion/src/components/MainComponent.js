import React, { Component } from 'react';
import Home from './HomeComponent'
import Menu from './MenuComponent.js';
import Contact from './ContactComponent';
import Dishdetail from './Dishdetail' ;
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import { DISHES } from '../shared/dishes';
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotion';
import {Switch, Route, Redirect} from 'react-router-dom';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes: DISHES,
      comments : COMMENTS,
      leader:LEADERS,
      promotions:PROMOTIONS
    };
}

  render() {
    const HomePage = () => {
      return(
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotions={this.state.promotions.filter((promotions) => promotions.featured)[0]}
              leader={this.state.leader.filter((leader) => leader.featured)[0]}/>
      )
    }

    const DishWithId = ({match}) => {
      return(
          <Dishdetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };

      return (
        <div>
        <Header />
            <Switch>
              <Route path="/home" component={HomePage}></Route>
              <Route exact path = "/menu" component={() => <Menu
                      dishes={this.state.dishes} />} />
              <Route path='/menu/:dishId' component={DishWithId} />        
              <Route exact path ="/contactus" component={Contact}></Route>
              <Redirect to="/home" ></Redirect>
            </Switch>
        <Footer />
        </div>
      
        );
    
  }
  
}


export default Main;
