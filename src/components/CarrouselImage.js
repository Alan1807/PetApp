import React from 'react';

import '../styles/ModalDetail.css';

export const CarrouselImage = ({ photo, index }) => {
    return (
        <>
            {
                index === 0 ?
                <div className="carousel-item active">
                    <img className="d-block modal-img" src={ photo } />
                </div> :
                <div className="carousel-item">
                    <img className="d-block modal-img" src={ photo } />
                </div>
            }
            
        </>
    )
}
