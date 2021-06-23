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
        <div className="col-3 p-0 conteriner-fluid">
            <div className="card">
                <div className="p-0 m-0 card-img-container d-flex justify-content-center">
                    <img src={ image } alt={ name } name={ petId } onClick={ handleCardClick } />
                </div>                
                <div className="row card-desc-container">
                    <div className="col-12 pl-5 pr-5 pt-3">
                        <p className="item-name text-left cut-text"> 
                        {
                            gender === 'Male' ? 
                                <span className="fa fa-mars text-primary fa-lg ml-1"></span> : 
                                <span className="fa fa-venus female-icon fa-lg ml-1"></span>
                        }
                        &nbsp;
                        { name }
                        </p>
                        <p className="item-desc text-left mb-0">
                            { primary } { secondary }
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6 pl-5 pb-1">
                        <p className="text-left item-status mb-0">{ status.toUpperCase() }</p>
                    </div>
                    <div className="col-6 pr-5 pb-1 mb-0">
                        <p className="text-right item-age mb-0">{ age }</p>
                    </div>
                </div>
            </div>            
        </div>
    )
}
