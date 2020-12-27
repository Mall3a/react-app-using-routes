import React, { useState, useMemo } from 'react'
import queryString from 'query-string';
import HeroCard from '../heroes/HeroCard';
import useForm from '../../hooks/useForm';
import { useLocation } from 'react-router-dom';
import getHeroesByName from '../selectors/getHeroesByName';

const SearchScreen = ({
    history
}) => {

    //obtener location que tiene query params 
    const location = useLocation();
    //parsear query params en location
    const { q = ''} = queryString.parse(location.search);

    //Inicializar valor de input con query params 
    const [ formValues, handleInputChange ] = useForm({
        searchText: q
    });

    //obtener  input 
    const { searchText } = formValues;

    //pasar valor de query string a metodo que retorna filtrados los heroes que incluyen el nombre buscado por parametros
    //utilizar useMemo para que la busqueda se dispare solo cuando se presione enter y el query string cambie 
    const heroesFiltered =  useMemo(() => getHeroesByName(q), [q]);
    

    const handleSearch = (e) => {
        e.preventDefault();
        history.push(`?q=${searchText}`)
    }

    return (
        <div>
            <h1>Search Screen</h1>

            <hr></hr>

            <div className="row">
                <div className="col-5">
                    <h4>Search Form</h4>
                    <hr></hr>

                    <form onSubmit={handleSearch}>
                        <input 
                            type="text" 
                            placeholder="Find your hero" 
                            className="form-control" 
                            name="searchText"
                            autoComplete="off"
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button 
                            type="submit" 
                            className="btn m-1 btn-block btn-outline-primary">
                            Search...
                        </button>
                    </form>
                </div>

                <div className="col-7">
                    <h4>Results</h4>
                    <hr></hr>

                    {q==='' && 
                        (<div className="alert alert-info">
                            Search a hero
                        </div>)
                    }

                    {q!=='' &&  heroesFiltered.length === 0 &&
                        (<div className="alert alert-danger">
                            There is no hero with name { q }
                        </div>)
                    }

                    {
                        heroesFiltered.map(hero =>
                            <HeroCard 
                                key={hero.id}
                                {...hero}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default SearchScreen
