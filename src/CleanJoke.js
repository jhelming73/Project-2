import React, { Component, Link, } from "react";
import "./App.css";


class CleanJoke extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <div className="CleanJoke">
                <div>{this.props.joke}</div>
            </div>
        )
    }
}
export default CleanJoke;