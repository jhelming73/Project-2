import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Joke from "./Joke";
import './App.css';

import axios from "axios";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saying: []
    }
  }

  goChuck() {
    axios({
      method: 'get',
      url: 'http://api.icndb.com/jokes/random/',
      // headers: { 'Accept': 'application/json'}
    })
      .then(response => {
        console.log(response)
        // console.log(response.data.value.joke)

        this.setState({
          goChuck: response
        })
      })
      .catch(error => {
        console.log(error);
      })

  }


  componentDidMount() {
    this.goChuck()
  }

  handleClick = (event) => {
    this.newJoke()
    let jokeButtonClicked = event.target.value
    this.setState({ jokeButtonClicked })
    console.log(jokeButtonClicked)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chuck Norris</h1>
        </header>
        <div className="Joke-area">
          <Joke jokes={this.state.jokes} />
        </div>
                {/* </div>
                <button onClick={this.handleClick}>New Joke </button>
                <div> */}
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
