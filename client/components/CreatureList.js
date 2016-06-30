/* eslint-disable jsx-quotes, react/prop-types */

import React from 'react';
import CreatureDetail from './CreatureDetail';

class CreatureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { creatures: [] };
  }

  componentDidMount() {
    fetch('/creatures')
    .then(r => r.json())
    .then(j => {
      console.log(j);
      this.setState({ creatures: j.creatures });
    });
  }

  render() {
    return (
      <div>
        <h2>List of All Creatures</h2>
        <table className="table table-striped table-bordered">
          <thead>
           <tr>
             <th>Name</th>
             <th>Health</th>
             <th>Image</th>
             <th>Wins</th>
             <th>Losses</th>
           </tr>
          </thead>
          <tbody>
          {this.state.creatures.map((c, i) => <CreatureDetail key={c._id} creature={c}/>)}
          </tbody>
        </table>
      </div>
    );
  }
}

export default CreatureList;
