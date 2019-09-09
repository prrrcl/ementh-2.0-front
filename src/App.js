import React, { useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';

import Navbar from './components/Navbar.js';
import PrivateRoute from './components/routes/PrivateRoute';
import AnonRoute from './components/routes/AnonRoute';

import Private from './pages/Private';
import Signup from './pages/Signup';
import Login from './pages/Login';

import AuthProvider from './contexts/auth-context';

import './App.css';

const App = (props) => {
    return (
      <Router>
        <AuthProvider>
          <div className="container">
            <h1>Basic React Authentication</h1>
            <Navbar />
            <Switch>
              <AnonRoute path="/signup" component={Signup} />
              <AnonRoute path="/login" component={Login} />
              <PrivateRoute path="/private" component={Private} />
            </Switch>
          </div>
        </AuthProvider>
      </Router>
    )
}

export default App;
