import React from 'react';


class Creature extends React.Component {
  constructor(props) {
    super(props);
     this.state = { };
    this.create = this.create.bind(this);
  }

  create(e) {
    const name = this.refs.name.value;
    const image = this.refs.image.value;
    const body = JSON.stringify({ name, image });

    fetch('/creatures', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    .then(r => r.json())
    .then((r) => {
      console.log(r);
        this.transitionTo('AddCreature');
    });

    e.preventDefault();
  }

  render() {
     return (
       <div>
         <h1>Add a Creature</h1>
         <form>
           <div className='form-group'>
             <label>Name: </label>
             <input className='form-control' ref='name' type='text' />
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

export default Creature;
