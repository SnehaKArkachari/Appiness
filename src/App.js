import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Login from './components/Login';

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/Dashboard" component={Dashboard} />
          </Switch>
        </BrowserRouter>
      </div>
    </>
  )
}
export default App;
