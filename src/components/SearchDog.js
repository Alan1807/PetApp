import React, { useState } from 'react';
import { useFetchTypes } from '../hooks/useFetchTypes';

import '../styles/SearchDogs.css';

export const SearchDog = ({ setPetFilters }) => {

    const [filter, setFilter] = useState({
        name: '',
        type: '',
        gender: ''
    });
    const types = useFetchTypes();

    const handleChange = (e) => {
        setFilter({
            ...filter,
            [e.target.name]: e.target.value
        });
    }

    const handleSearch = () => {
        setPetFilters(filter);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        handleSearch();
    }

    return (
        <form onSubmit={ handleSubmit }>
            <div className="container-fluid mb-3">
                <div className="row">
                    <div className="col">
                        <div className="form-group">
                            <label>Nombre</label>
                            <input className="form form-control" placeholder="Nombre" onChange={ handleChange } name="name" autoComplete="off" />
                        </div>
                    </div>

                    <div className="col-3">
                        <div className="form-group">
                            <label>Tipo</label>
                            <select id="inputState" className="form-control" onChange={ handleChange } name="type"> 
                                <option defaultValue value=''>Tipo</option>
                                {
                                    types.map( type => {
                                        return <option key={ type.name } value={ type.name }>{ type.name }</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="col-2">
                        <div className="form-group">
                            <label>Genero</label>
                            <select className="form-control" onChange={ handleChange } name="gender"> 
                                <option defaultValue value=''>Ambos</option>
                                <option key="Male" value="Male">Macho</option>
                                <option key="Female" value="Female">Hembra</option>
                            </select>
                        </div>
                    </div>

                    <div className="col-2">
                        <button className="btn btn-primary btn-block mt-4" type="button" onClick={ handleSearch }>
                            <span className="fa fa-search"></span> Buscar
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
