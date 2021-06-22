import React from 'react';

import '../styles/DogGridItem.css';

export const DogGridItem = ({ id:petId, image, name, age, primary, status, secondary, gender, setShowModalDetail }) => {

    const handleCardClick = (e) => {
        setShowModalDetail({
            petId: e.target.name,
            showModal: true
        });
    }

    return (
        <div className="card col-2 p-0 conteriner-fluid">
            <img src={ image } alt={ name } name={ petId } onClick={ handleCardClick } />
            <div className="row">
                <div className="col-12 pl-3 pr-3">
                    <p className="item-name text-left">{ name } 
                    {
                        gender === 'Male' ? 
                            <span className="fa fa-mars text-primary fa-lg ml-1"></span> : 
                            <span className="fa fa-venus female-icon fa-lg ml-1"></span>
                    }
                    </p>
                    <p className="text-left mb-0">
                        { primary } { secondary }
                    </p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 pl-3 pb-1">
                    <p className="text-left item-status">{ status.toUpperCase() }</p>
                </div>
                <div className="col-6 pr-3 pb-1">
                    <p className="text-right item-age">{ age }</p>
                </div>
            </div>
        </div>
    )
}
