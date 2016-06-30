/* eslint-disable jsx-quotes, react/prop-types, max-len, no-underscore-dangle */

import React from 'react';

export default (props) => {
  return <tr><td>{props.creature.name}</td><td>{props.creature.health}</td><td><img src={props.creature.image} className="img-circle" style={{width:'104'},{height:'110'}}/></td><td>{props.creature.wins}</td><td>{props.creature.losses}</td></tr>;
};
