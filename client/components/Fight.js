import React from 'react';
import CreaturePick from './CreaturePick';

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weapons: [], creatures: [] };
    // this.create = this.create.bind(this);
  }
  //
  componentDidMount() {
    fetch('/weapons/all')
    .then(r => r.json())
    .then(i => {
      console.log('weapons all', i);
      fetch('/creatures')
      .then(r => r.json())
      .then(j => {
        console.log('didmount',j);
        this.setState({ creatures: j.creatures, weapons: i.weapons });
      });
    });
  }


  render() {
    console.log('state is is ', this.state);
     return (
       <div>
         <h1>Are you ready to Kombat?</h1>
         <div>
             <label>Pick Creature 1 </label>
             <CreaturePick ref='creature1' creatures={this.state.creatures} weapons={this.state.weapons} />
           </div>
           <div>
             <label>Pick Creature 2 </label>
             <CreaturePick ref='creature2' creatures={this.state.creatures} weapons={this.state.weapons} />
           </div>
           <button className='btn btn-primary' onClick={this.create}>Create</button>
       </div>
     );
  }
 }

export default Fight;
