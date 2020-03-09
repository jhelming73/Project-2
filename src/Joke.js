import React, { Component } from "react";
import "./App.css";

class Joke extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="Joke-area">
                <div>{this.props.joke}</div>
            </div>
        )
    }
}
export default Joke;