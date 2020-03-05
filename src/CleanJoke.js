import React, { Component, Link,  } from "react";
import "./App.css";


class CleanJoke extends Component {
    constructor(props) {
        super()
    }
    render() {
        // console.log(this.props.joke)
        return (
            <div className="CleanJoke">
                <div>{this.props.joke}</div>
                <div>
                    Clean Joke
                </div>
            </div>
        )
    }
}
export default CleanJoke;