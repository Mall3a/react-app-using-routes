import React from 'react'
import PropTypes from 'prop-types'
import HeroList from '../heroes/HeroList'

const DcScreen = props => {
    return (
        <div>
            <h1>DC Screen</h1>
            <hr/>
            
            <HeroList publisher="DC Comics" />
        </div>
    )
}

DcScreen.propTypes = {

}

export default DcScreen
