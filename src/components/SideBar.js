import React, { useEffect, useState } from 'react';
import { DogGrid } from './DogGrid';
import { SearchDog } from './SearchDog';
import { useFetchTypes } from '../hooks/useFetchTypes';

import '../styles/SideBar.css';

export const SideBar = ({ setShowModalDetail }) => {

    // Carga los tipos de mascotas
    const types = useFetchTypes();

    // State de nombre, tipo y genero de cada card
    const [petFilters, setPetFilters] = useState({
        name: '',
        type: '',
        gender: ''
    });

    const { name, type, gender } = petFilters;        

    // State que indica si el side bar está abierto o cerrado
    const [sideBar, setSideBar] = useState({
        clase: 'side-bar p-2',
        filterClass: 'fadeOut',
        filtrosOcultos: true
    });

    const { clase, filterClass, filtrosOcultos } = sideBar;

    // Click al botón del side bar
    const handleSideBar = () => {
        if (clase.includes('side-bar p-2')) {
            setSideBar({
                clase: 'side-bar-open p-2',
                filterClass: 'fadeIn',
                filtrosOcultos: false
            });
        }
        else {
            setSideBar({
                clase: 'side-bar p-2 side-bar-close',
                filterClass: 'fadeOut',
                filtrosOcultos: true
            });
        }
    }

    useEffect(() => {
        
        setTimeout(() => {

            if (filterClass.includes('fadeOut')) {
                setSideBar({
                    ...sideBar,
                    filtrosOcultos: true
                });
            }
            else {
                setSideBar({
                    ...sideBar,
                    filtrosOcultos: false
                });
            }

        }, 500);

    }, [filterClass])

    return (
        <div className="container-fluid">
            <div className="row fill-window">
                <div className={ clase }>
                    <div className="d-flex flex-row-reverse">
                        <button type="button" className="btn btn-outline-primary" onClick={ handleSideBar }>
                            <span className="fa fa-bars"></span>
                        </button>
                    </div>
                    <div className={ filterClass } hidden={ filtrosOcultos }>
                        <div className="form-group" >
                            <label>Nombre</label>
                            <input type="text" className="form-control" placeholder="Nombre" />
                        </div>
                        <div className="form-group" >
                            <label>Tipo</label>
                            <select id="inputState" className="form-control" name="type"> 
                                <option defaultValue value=''>Tipo</option>
                                {
                                    types.map( type => {
                                        return <option key={ type.name } value={ type.name }>{ type.name }</option>
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group" >
                            <label>Genero</label>
                            <select className="form-control" name="gender"> 
                                <option defaultValue value=''>Ambos</option>
                                <option key="Male" value="Male">Macho</option>
                                <option key="Female" value="Female">Hembra</option>
                            </select>
                        </div>
                        <div >
                            <button className="btn btn-primary btn-block mt-4" type="button">
                                <span className="fa fa-search"></span> Buscar
                            </button>
                        </div>
                    </div>
                </div>
                <div className="col pt-3 mb-4">
                    <SearchDog setPetFilters={ setPetFilters } />
                    <DogGrid 
                        petName={ name } 
                        petType={ type } 
                        petGender={ gender } 
                        setShowModalDetail={ setShowModalDetail } 
                    />
                </div>
            </div>            
        </div>
    )
}
