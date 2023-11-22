import React, {Component} from "react";
//Class components
class Welcome extends Component {
  render() {
    return <h1>Hello,{this.props.name} a.k.a {this.props.heroname}</h1>
  }
}
export default Welcome;
//ClassComponent using props by {this.props.attribute} syntax