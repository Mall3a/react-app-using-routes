import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import getHeroesByPublishers from '../selectors/getHeroesByPublishers'
import HeroCard from './HeroCard';

const HeroList = ({
    publisher
}) => {

    const heroes = useMemo(() => 
        getHeroesByPublishers(publisher), 
    [publisher]);

    return (
        <div className="card-columns animate__animated animate__fadeIn">    
            {
                heroes.map( hero => {
                    return (  

                        <HeroCard 
                            key={hero.id}
                            {...hero}
                        />
                      
                    );
                })
            }
        </div>
    )
}

HeroList.propTypes = {

}

export default HeroList
