import React, { useState } from 'react';
import { DogGrid } from './components/DogGrid';
import { SearchDog } from './components/SearchDog';
import { ModalDetail } from './components/ModalDetail';

export const DogsApp = () => {

    const [petFilters, setPetFilters] = useState({
        name: '',
        type: '',
        gender: ''
    });

    const { name, type, gender } = petFilters;

    const [showModalDetail, setShowModalDetail] = useState({
        petId: 0,
        showModal: false
    });

    const { petId, showModal } = showModalDetail;

    return (
        <div>
            
            {
                !!showModalDetail.showModal && <ModalDetail petId={ petId } setShowModalDetail={ setShowModalDetail } /> 
            }

            <div className="container-fluid">
                <h1>Dogs App</h1>
                <hr />
                <SearchDog setPetFilters={ setPetFilters } />
                <DogGrid petName={ name } petType={ type } petGender={ gender } setShowModalDetail={ setShowModalDetail } />
            </div>
            
        </div>
    )
}
