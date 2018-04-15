import React, { Component } from 'react';
import Input from './components/input';
import Table from './components/table';
import './styles/materialize.min.css'


class App extends Component {
  constructor(){
    super();
    this.state = {
      data: null ,
    };
  }

  setData(d){
    this.setState({data: d });
  }

  render() {
      if (!this.state.data){
        return(
          <Input setData = {this.setData.bind(this)}/>
        );
      }else{
          return(
            <Table data={this.state.data}/>
          );
      }
  }
}

export default App;
