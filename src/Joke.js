import React, { Component } from "react";
import "./App.css";


class Joke extends Component {
    constructor(props) {
        super()
    }
    render() {
        console.log(this.props.jokes)
        return (
            <div>{this.props.jokes}</div>
        )
    }
}
export default Joke;