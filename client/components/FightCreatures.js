import React from 'react';
import CreaturePick from './CreaturePick';
// import FightDisplay from './FightDisplay';

class FightCreatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weapons: [], creatures: [] };
    // this.create = this.create.bind(this);
  }
  //
  // componentDidMount() {
  //   fetch('/weapons/all')
  //   .then(r => r.json())
  //   .then(i => {
  //     console.log('weapons all', i);
  //     fetch('/creatures')
  //     .then(r => r.json())
  //     .then(j => {
  //       console.log('didmount',j);
  //       this.setState({ creatures: j.creatures, weapons: i.weapons });
  //     });
  //   });
  // }


  render() {
    console.log('state is is ', this.state);
     return (
      <div>
         <div className="row">
           <div className="col-sm-6">
               <label>Pick Creature 1 </label>
               <CreaturePick ref='creature1' creatures={this.props.creatures} weapons={this.props.weapons} />
           </div>
           <div className="col-sm-6">
               <label>Pick Creature 2 </label>
               <CreaturePick ref='creature2' creatures={this.props.creatures} weapons={this.props.weapons} />
           </div>
           <button className='btn btn-primary' onClick={this.props.create}>Create</button>
        </div>

      </div>
     );
  }
 }

export default FightCreatures;
