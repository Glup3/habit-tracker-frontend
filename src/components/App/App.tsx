import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HabitsPage from '../../pages/HabitsPage';

import LandingPage from '../../pages/LandingPage';
import LoginPage from '../../pages/LoginPage';
import NotFoundPage from '../../pages/NotFoundPage';
import RegisterPage from '../../pages/RegisterPage';
import Navbar from '../Navbar';
import ProtectedRoute from '../ProtectedRoute';

import { AppStyle } from './AppStyle';

function App() {
  return (
    <AppStyle>
      <Navbar />
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/login" component={LoginPage} />
        <ProtectedRoute path="/habits" component={HabitsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </AppStyle>
  );
}

export default App;
