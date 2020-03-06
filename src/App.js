import React, { Component } from 'react';
import { Route, Link, Switch, Redirect } from 'react-router-dom';
import Joke from "./Joke";
import CleanJoke from "./CleanJoke";
import './App.css';
import AboutMe from "./AboutMe";
import axios from "axios";
import Home from "./Home";
import Header from "./Header";


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
        url: 'http://api.icndb.com/jokes/random/',
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
      url: 'http://api.icndb.com/jokes/random/',
    })
      .then(response => {
        // console.log(response)
        // console.log(response.data.value.joke)

        this.setState({
          joke: response.data.value.joke
        })
      })
      .catch(error => {
        console.log(error);
      })

  }

  newCleanJoke() {
    axios({
      method: 'get',
      url: 'http://api.icndb.com/jokes/random?exclude=[explicit]',
    })
      .then(response => {
        // console.log(response)
        // console.log(response.data.value.joke)

        this.setState({
          joke: response.data.value.joke
        })
      })
      .catch(error => {
        console.log(error);
      })

  }

  handleClick = (event) => {
    this.newJoke()
    let jokeButtonClicked = event.target.value
    this.setState({ jokeButtonClicked })
    // console.log(jokeButtonClicked)
    console.log("dirty Chuck")
  }

  handleCleanClick = (event) => {
    this.newCleanJoke()
    let jokeButtonClicked = event.target.value
    this.setState({ jokeButtonClicked })
    console.log(jokeButtonClicked)
    console.log("clean")
  }

  render() {
    console.log(this.state.joke)
    return (
      <body>
      <div className="App">
      <Header />
        
        {/* <div className="Joke-area"> 
          <Joke joke={this.state.joke} />
        </div> */}
       
          
          {/* <button onClick={this.handleCleanClick}>Clean Chuck </button> */}
          {/* <CleanJoke /> */}

        <nav>
          <Link to='/'className="Home"> Home </Link>
          <Link to='/About_Me'className="AboutMeButton"> About Me </Link>
          {/* <Link to='/park/:id'> Park Detail </Link> */}
        </nav>

        <main>
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/About_Me" component={AboutMe} />
          <Route path="/CleanJoke" render={() => <CleanJoke joke={this.state.joke}/>} />
          <Route path="/Joke" render={() => <Joke joke={this.state.joke}/>} />
          </Switch>
        </main>

        <section className="JokeButtons">
        <Link to='/CleanJoke' > <button onClick={this.handleCleanClick}>Clean Chuck </button> </Link>
        <Link to='/Joke' > <button onClick={this.handleClick}>Everything Chuck </button> </Link>
        </section>
        
      </div>
      </body>
    );
  }
}

export default App;
