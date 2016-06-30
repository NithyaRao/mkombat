import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
  render(){
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/AddCreature">Add Creature</Link></li>
          <li><Link to="/CreatureList">Creature List</Link></li>
          <li><Link to="/AddWeapon">Add Weapon</Link></li>
          <li><Link to="/Fight">Fight</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}
