import React,{ Component } from 'react';
import Error from './error';
import Loader from './loader'
import axios from 'axios';
import '../styles/input.css'
import '../styles/materialize.min.css'


export default class Input extends Component{
  constructor(){
    super();
    this.state = {
      N: null,
      loading: false,
      error:0,
    };
  }

  update(e){
    e.preventDefault();
    this.setState({ N: e.target.value});
  }

  submit(){
    if(isNaN(this.state.N)){
      this.setState({error:1});
      return;
    }
    this.setState({loading:true});
    axios.post('https://tttbackend.herokuapp.com/api/getfrequency/' , {'N':this.state.N})
    .then(response => {
      if (response.data.success){
        this.setState({loading:false});
        this.props.setData(response.data);
      }else{
        this.setState({loading: false});
        this.setState({error:2});
      }
    });
  }

  _handleKeyPress = (e) => {
    console.log("in func");
    if(e.key === 'Enter'){
      this.submit();
    }
  }

  render(){
    if (this.state.loading){
      return(
        <Loader/>
      );
    }else{
        return (
          <div className="container">
          <div className="row">
            <div className="col s6 offset-s3">
              <div className="header">terribly tiny tales task</div>
            </div>
          </div>
          <div className="row">
            <div className="col s12">
              <div className="row input">
                <div className="input-field col s6 offset-s3">
                  <input type="text" onChange = {this.update.bind(this)} onKeyPress={this._handleKeyPress}/>
                  <label>Enter Number</label>
                  <Error error={this.state.error}/>
                  <button className="btn waves-effect waves-light" type="submit" name="action" onClick = {this.submit.bind(this)}>Submit
                  <i className="material-icons right">send</i>
                  </button>
                </div>
              </div>
            </div>
          </div>
          </div>
        );
    }
  }
}
