import React from 'react'
import PropTypes from 'prop-types'
import { Navbar } from '../components/ui/Navbar'
import { Redirect, Route, Switch } from 'react-router-dom'
import MarvelScreen from '../components/marvel/MarvelScreen'
import HeroeScreen from '../components/heroes/HeroeScreen'
import DcScreen from '../components/dc/DcScreen'
import SearchScreen from '../components/search/SearchScreen'

const DashboardRoutes = props => {
    return (
        <div>
            <Navbar />

            <div className="container mt-3">
                <Switch>
                    <Route exact path="/marvel" component={ MarvelScreen }></Route>
                    <Route exact path="/dc" component={ DcScreen }></Route>
                    <Route exact path="/hero/:heroeId" component={ HeroeScreen }></Route>
                    <Route exact path="/search" component={ SearchScreen }></Route>
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </div>
    )
}

DashboardRoutes.propTypes = {

}

export default DashboardRoutes
