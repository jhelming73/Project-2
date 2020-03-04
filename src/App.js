import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import './App.css';

import axios from "axios";


class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      saying: []
    }
  }

  goChuck () {
    axios({
      method: 'get',
      url: 'http://api.icndb.com/jokes/random/',
      // headers: { 'Accept': 'application/json'}
    })
    .then(response => {
      console.log(response)
      // console.log(response.data.value.joke)
      
      this.setState({
        beer: response
      })
    }) 
    .catch(error => {
      console.log(error);
    })
    
  }


  componentDidMount() {
    this.goChuck()
  }

  render() {
    return (
        <div>
          <p>Hello</p>
          <nav>
        
          {/* <Link to='/'> Home </Link> */}
          {/* <Link to='/park/:id'> Park Detail </Link> */}
          </nav>
          <main>
            {/* <Switch>
            <Route path='/' exact render={() => <ParkList parks={this.state.parks}/>} />
            <Route path='/park/:id' render={(props) => <ParkDetail {...props} parks={this.state.parks}/>} />
            </Switch> */}
          </main>
        </div>
    );
  }
}

export default App;
