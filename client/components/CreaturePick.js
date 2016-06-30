import React from 'react';

class CreaturePick extends React.Component {
  constructor(props) {
    super(props);
    console.log('Prop in creaturepick is', props);
    this.state = { weapons: [], creatures: [] };
  }

  // componentDidMount() {
    // fetch('/weapons/all')
    // .then(r => r.json())
    // .then(i => {
    //   console.log('weapons all', i);
    //   fetch('/creatures')
    //   .then(r => r.json())
    //   .then(j => {
    //     console.log('didmount',j);
    //     this.setState({ creatures: j.creatures, weapons: i.weapons });
    //   });
    // });
    // }

  // create(e) {
  //   const name = this.refs.name.value;
  //   const attack = this.refs.attack.value;
  //   const image = this.refs.image.value;
  //   const body = JSON.stringify({ name, attack ,image });
  //
  //   fetch('/weapons', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
  //   .then(r => r.json())
  //   .then((r) => {
  //     console.log(r);
  //     //this.transitionTo('/');
  //   });
  //
  //   e.preventDefault();
  // }

  render() {
    console.log('Inside creaturepick', this.props);
    return (
       <div>
         <form>
           <div className='form-group'>
            <label>Creature Name</label>
            <select className='form-control' ref='creature'>
              {this.props.creatures.map((c, i) => <option value={c._id} key={c._id}>{c.name}</option>)}
            </select>
          </div>
          <div className='form-group'>
            <label>Weapon </label>
            <select className='form-control' ref='weapon'>
              {this.props.weapons.map((w, i) => <option value={w._id} key={w._id}>{w.name}</option>)}
            </select>
          </div>
       </form>
       </div>
     );
   }
 }

export default CreaturePick;
