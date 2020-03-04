import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Joke from "./Joke";
import './App.css';
import AboutMe from "./AboutMe";
import axios from "axios";


class App extends Component {
  constructor() {
    super();
    this.state = {
      joke: []
    }
  }

  componentDidMount() {
    this.newJoke()
      axios({
        method: 'get',
        url: 'http://api.icndb.com/jokes/15',
        headers: { 'Accept': 'application/json'}
      })
        .then(response => {
          // console.log(response.data)
          // console.log(response.data.value.joke)
  
          this.setState({
            joke: response.data.value.joke
          })
        })
        .catch(error => {
          console.log(error);
        })
  }

  newJoke() {
    axios({
      method: 'get',
      url: 'http://api.icndb.com/jokes/15',
      headers: { 'Accept': 'application/json'}
    })
      .then(response => {
        // console.log(response)
        // console.log(response.data.value.joke)

        // this.setState({
        //   joke: response.data.value.joke
        // })
      })
      .catch(error => {
        console.log(error);
      })

  }

  handleClick = (event) => {
    this.newJoke()
    let jokeButtonClicked = event.target.value
    this.setState({ jokeButtonClicked })
    console.log(jokeButtonClicked)
  }

  render() {
    console.log(this.state.joke)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Chuck Norris</h1>
        </header>
        <div className="Joke-area">
          <Joke joke={this.state.joke} />
        </div>
        <div>
          <AboutMe />
        </div>
          <button onClick={this.handleClick}>New Joke </button>
          <button onClick={this.handleClick}>About Me </button>
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
