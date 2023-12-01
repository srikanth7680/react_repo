import React,{Component} from "react";

class Message extends Component {
  // constructor() {
  //   super()
  //   this.
      state = {
      message : 'Hello srikanth'
    }
  
  changeMessage() {
    this.setState({
      message: 'thank you for subscrbing us!!'
    })
  }

  render() {
    return(
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={() =>this.changeMessage()}>subscribe</button>
      </div>
    )
    
  }
}
export default Message;     