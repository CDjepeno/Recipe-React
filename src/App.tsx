import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Main from './components/Main';
import NotFound from './components/NotFound';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route exact path='/pseudo/:pseudo' component={Main}/>
        <Route component={NotFound}/>
      </Switch>
    </BrowserRouter>
    );
}

export default App;
