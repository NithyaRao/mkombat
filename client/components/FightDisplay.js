import React from 'react';

class FightDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
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
    console.log('FlightDisplay state is: ', this.props.creatures[0].name);
    if (this.props.creatures[0].name === undefined) return <div/>;
     return (
      <div>
         <h1>Welcome to Mortal Kombat!</h1>
         <div className="row">
           <div className="col-sm-6">
             <div className="row">
               <label>Creature1 : {this.props.creatures[0].name}</label>
             </div>
             <div className="row">
                <div className="col-sm-6">
                 <img src={this.props.creatures[0].image} className="img-circle" style={{width:'104'},{height:'110'}}/>
                </div>
                <div className="col-sm-6">
                   <img src={this.props.weapons[0].image} className="img-circle" style={{width:'104'},{height:'110'}}/>
                </div>
                <div class="progress">
                   <div className="progress-bar progress-bar-success" id={this.props.creatures[0]._id} style={{width: this.props.creatures[0].health + '%'}} >
                     {this.props.creatures[0].health}
                   </div>
                </div>
             </div>
           </div>
           <div className="col-sm-6">
             <div className="row">
               <label>Creature2: {this.props.creatures[1].name}</label>
             </div>
             <div className="row">
               <div className="col-sm-6">
                <img src={this.props.creatures[1].image} className="img-circle" style={{width:'104'},{height:'110'}}/>
               </div>
               <div className="col-sm-6">
                  <img src={this.props.weapons[1].image} className="img-circle" style={{width:'104'},{height:'110'}}/>
               </div>
             </div>
             <div class="progress">
                <div className="progress-bar progress-bar-success" id= {this.props.creatures[1]._id} style={{width: this.props.creatures[1].health + '%'}} >
                  {this.props.creatures[1].health}
                </div>
              </div>
            </div>
         </div>
    </div>
     );
  }
 }

export default FightDisplay;
