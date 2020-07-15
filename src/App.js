import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';

import Main from './components/Main';
import People from './components/People';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';
import Person from './components/Person';
import Films from './components/Films';
import Film from './components/Film';
import Starships from './components/Starships';
import Starship from './components/Starship';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className={'app'}>
        <div className='container'>
          <Switch>
            <Route exact path='/' component={Main} />
            <Route exact path='/people' component={People} />
            <Route exact path='/people/:id' component={Person} />
            <Route exact path='/films' component={Films} />
            <Route exact path='/films/:id' component={Film} />
            <Route exact path='/starships' component={Starships} />
            <Route exact path='/starships/:id' component={Starship} />
            <Route exact component={NotFound} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
