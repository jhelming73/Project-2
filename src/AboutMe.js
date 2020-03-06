import React, { Component } from "react";

export class AboutMe extends Component {
  constructor( props ){
    super();
    this.state = { ...props };
  }
//   componentWillMount(){
//     window.location = this.state.route.loc;
  
  render(){
    return (
    <div className="About_Me_Picture">
        <a className="AboutMeButton" href="https://www.linkedin.com/in/jared-helming-pmp-b371617/">LinkedIn</a> 
    </div>
    )
}
}


export default AboutMe;

// https://inneka.com/programming/react/react-router-external-link-2/