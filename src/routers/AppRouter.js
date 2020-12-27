import React from 'react'
import PropTypes from 'prop-types'

import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";

import LoginScreen from '../components/login/LoginScreen';

import DashboardRoutes from './DashboardRoutes';

const AppRouter = props => {
    return (
        <Router>
        <div>
          <Switch>
            <Route exact path="/login" component={ LoginScreen }></Route>
            <Route path="/" component={ DashboardRoutes }></Route>
          </Switch>
        </div>
      </Router>
    )
}

AppRouter.propTypes = {

}

export default AppRouter
