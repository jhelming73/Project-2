import React, { Component } from "react";
import "./App.css";


class CleanJoke extends Component {
    constructor(props) {
        super()
    }
    render() {
        // console.log(this.props.joke)
        return (
            <div>{this.props.joke}</div>
        )
    }
}
export default CleanJoke;