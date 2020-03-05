import React, { Component } from "react";
import "./App.css";

class Joke extends Component {
    constructor(props) {
        super()
    }
    render() {
        // console.log(this.props.joke)
        return (
            <div className="Joke-area">
                <div>{this.props.joke}</div>
                <div>
                 Everything Joke
                </div>
            </div>
        )
    }
}
export default Joke;