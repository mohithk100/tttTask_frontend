import React,{ Component } from 'react';
import '../styles/error.css';

export default class Error extends Component{
  render(){
    if (this.props.error === 0){
      return(<div />);
    }else if (this.props.error === 1) {
      return(
        <div className="alert">Please enter a numeric value.</div>
      );
    }else if (this.props.error === 2){
      return(
        <div className="alert">N has exceeded number of unique words in the text. Please Re-enter N.</div>
      );
    }
  }
}
