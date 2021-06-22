import React from 'react';
import { useFetchDogs } from '../hooks/useFetchDogs';
import { usePaged } from '../hooks/usePaged';
import { DogGridItem } from './DogGridItem';

export const DogGrid = ( { petName, petType, petGender, setShowModalDetail } ) => {

    const { state: page, nextPage, prevPage } = usePaged(1, '');
    const { data: dogs, loading } = useFetchDogs(page, petName, petType, petGender);

    return (
        <div>
            { loading && <h3>Loading...</h3> }
            <div className="container-fluid">
                <div className="card-grid d-flex d-flex-row justify-content-center">
                    {
                        dogs.map( (dog) => (
                            <DogGridItem key={ dog.id } setShowModalDetail={ setShowModalDetail } { ...dog } />
                        ))
                    }
                </div>

                <div className="row">
                    <div className="col">
                        <button className="btn btn-primary btn-block" onClick={ prevPage }>Anterior</button>
                    </div>
                    <div className="col-lg-8"></div>
                    <div className="col">
                        <button className="btn btn-primary btn-block" onClick={ nextPage }>Siguiente</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
