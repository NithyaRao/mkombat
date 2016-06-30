import React from 'react';
import CreaturePick from './CreaturePick';
import FightCreatures from './FightCreatures';
import FightDisplay from './FightDisplay';

class Fight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { weapons: [], creatures: [], creature1: {}, weapon1: {},creature2: {}, weapon2: {}};
    this.create = this.create.bind(this);
    this.fight = this.fight.bind(this);
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

 // subtractHealth(src, trg) {
 //     let r = Math.floor(Math.random() * src[1].attack) + 1;
 //     console.log('r:', r);
 //    //  trg[0].health -= r;
 //     console.log('src health',src[0].health );
 //     console.log('trg health',trg[0].health );
 //  }

 subtractHealth(attacker, defender) {
         // hit the target
     console.log('attacker:', attacker);
     let damage = Math.floor(Math.random() * attacker[1].attack)+1;

     console.log(attacker[0].name, ' hits, damage: ', damage, defender[0].name, ' hew health: ', defender[0].health - damage);
     defender[0].health -= damage;

    document.getElementById('bar1').innerHTML = defender[0].health < 0 ? 0 : defender[0].health;

     if (defender[0].health > 0) {
       setTimeout(() => {
         this.subtractHealth(defender, attacker);
       }, 50);
     }
  }

fight() {
   let srcCreature = [this.state.creature1, this.state.weapon1];
   let targetCreature =  [this.state.creature2 , this.state.weapon2];
   console.log('In fight:', srcCreature);
   this.subtractHealth(srcCreature, targetCreature);
 }



 create(e) {
     const creature1Id = this.refs.fightcreatures.refs.creature1.refs.creature.value;
     const weapon1Id = this.refs.fightcreatures.refs.creature1.refs.weapon.value;
     const creature2Id = this.refs.fightcreatures.refs.creature2.refs.creature.value;
     const weapon2Id = this.refs.fightcreatures.refs.creature2.refs.weapon.value;
     console.log('fight create:',creature1Id.name);
    //  const type = this.refs.section.refs.type.value;
    //  const body = JSON.stringify({ quantity, amount, type });
     //
    //  fetch('//localhost:3333/sections', { method: 'post', body, headers: { 'Content-Type': 'application/json' } })
    //  .then(r => r.json())
    //  .then(() => this.refresh());
    this.state.creature1 =  this.state.creatures.find(c=> c._id == creature1Id);
    this.state.weapon1 =  this.state.weapons.find(w=> w._id == weapon1Id);
    this.state.creature2 =  this.state.creatures.find(c=> c._id == creature2Id);
    this.state.weapon2 =  this.state.weapons.find(c=> c._id == weapon2Id);
    console.log('creature 1: ', this.state.creature1);

    this.forceUpdate();

     e.preventDefault();
   }


  render() {
     let displayElement='';
     let displayButton='none';
    //   this.state.creature1  ? shouldDisplay = 'none': this.state.shouldDisplay = 'block';
   if (this.state.creature1) {
      displayElement = <FightDisplay ref='fightdisplay'  creatures={[this.state.creature1 , this.state.creature2]} weapons={[this.state.weapon1, this.state.weapon2]} /> ;
      displayButton = 'inline';
    }
    console.log('state is is ', this.state);
     return (
      <div>
        <h1>Are you ready to Kombat?</h1>
        <div className="row">
            <FightCreatures ref='fightcreatures' create={this.create}  creatures={this.state.creatures} weapons={this.state.weapons} />
        </div>
        <div className="row">
          {displayElement}

        </div>
          <button className='btn btn-primary' style={{display:{displayButton}}} onClick={this.fight}>Fight</button>
      </div>
     );
  }
 }

export default Fight;
