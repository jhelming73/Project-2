import React, { Component } from "react";

export class AboutMe extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
  componentWillMount(){
    window.location = this.state.route.loc;
  }
  render(){
    return (<section>Redirecting...</section>);
  }
}

export default AboutMe;

// https://inneka.com/programming/react/react-router-external-link-2/