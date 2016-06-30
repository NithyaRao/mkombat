import App from './components/App';
import Home from './components/Home';
import Creature from './components/Creature';
import CreatureList from './components/CreatureList';
import Weapon from './components/Weapon';
import Fight from './components/Fight';
import CreaturePick from './components/CreaturePick';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, browserHistory } from 'react-router';
require('es6-promise').polyfill();
require('isomorphic-fetch');

render(
        <Router history={browserHistory}>
          <Route path="/" component={App}>
            <IndexRoute component={Home} />
            <Route path="AddCreature" component={Creature} />
            <Route path="CreatureList" component={CreatureList} />
            <Route path="AddWeapon" component={Weapon} />
            <Route path="Fight" component={Fight} />
            <Route path="CreaturePick" component={CreaturePick} />
          </Route>
        </Router>
  , document.getElementById('root'));
