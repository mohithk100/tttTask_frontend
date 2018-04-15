import React,{ Component } from 'react';
import '../styles/table.css';
import '../styles/materialize.min.css';


export default class Table extends Component{
  constructor(){
    super();
    this.state = {data : null };
  }

  componentWillMount(){
    this.setState({ data: this.props.data});
  }
  
  render() {
    let rows = this.state.data.frequency.map(obj => {
      return <TableRow data={obj} />
    })
    return(
      <div className="container table">
        <div className="header">Word Frequency Table</div>
        <table className="highlight centered responsive-table">
          <thead>
            <tr>
                <th>Word</th>
                <th>Frequency</th>
            </tr>
          </thead>

          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

const TableRow = (props) => {
  return (
    <tr>
      <td>
        { props.data.word }
      </td>
      <td>
        { props.data.value }
      </td>
    </tr>
  );
}
