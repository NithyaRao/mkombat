import React from 'react';


class Weapon extends React.Component {
  constructor(props) {
    super(props);
     this.state = { attack: []};
    this.create = this.create.bind(this);
  }

  componentDidMount() {
    fetch('/weapons/attack')
    .then(r => r.json())
    .then(j => {

      console.log('attack values', j); 
      this.setState({ attack: j.values.values });
    });
  }

  create(e) {
    const name = this.refs.name.value;
    const attack = this.refs.attack.value;
    const image = this.refs.image.value;
    const body = JSON.stringify({ name, attack ,image });

    fetch('/weapons', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then((r) => {
      console.log(r);
      //this.transitionTo('/');
    });

    e.preventDefault();
  }

  render() {
     return (
       <div>
         <h1>Add a Weapon</h1>
         <form>
           <div className='form-group'>
             <label>Name: </label>
             <input className='form-control' ref='name' type='text' />
           </div>
           <div className='form-group'>
            <label>Attack</label>
            <select className='form-control' ref='attack'>
              {this.state.attack.map((t, i) => <option key={i}>{t}</option>)}
            </select>
          </div>
          <div className='form-group'>
            <label>Image URL: </label>
            <input className='form-control' ref='image' type='text' />
          </div>
           <button className='btn btn-primary' onClick={this.create}>Create</button>
         </form>
       </div>
     );
   }
 }

export default Weapon;
