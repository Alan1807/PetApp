import React, { useEffect } from 'react';

import '../styles/ModalDetail.css';
import defaultImg from '../img/default_pet.png';
import { getPetById } from '../helpers/getDogs';
import { useFetchPetDetail } from '../hooks/useFetchPetDetail';
import { CarrouselImage } from './CarrouselImage';
import { ReactSVG } from 'react-svg';
import pruebaSVG from '../img/footer_modal.svg';

export const ModalDetail = ({ petId, setShowModalDetail }) => {
    
    // const { id, type, primary, secondary, age, size, gender, name, image, description, 
    //     photos, videos, attributes, tags, contact, published_at } 
    // = useFetchPetDetail( petId );

    const { data, loading }= useFetchPetDetail( petId );

    return (
        <div className="modal-background d-flex justify-content-center d-flex align-items-center">
            <div className="modal-detail col-4 p-0">
                <div className="modal-detail-header">
                    <a className="fa fa-times modal-detail-close" 
                        onClick={ () => setShowModalDetail({ petId: 0, showModal: false }) }>                            
                    </a>
                    <div id="indicadoresCarousel" className="carousel slide" data-ride="carousel">                        
                        <ol className="carousel-indicators">
                            {
                                data.photos !== undefined &&
                                data.photos.map( (photo, index) => (
                                    index === 0 ?
                                    <li data-target="#indicadoresCarousel" data-slide-to={ index } className="active"></li> :
                                    <li data-target="#indicadoresCarousel" data-slide-to={ index } ></li>
                                ))
                            }
                        </ol>
                        <div className="carousel-inner">
                            {
                                data.photos !== undefined &&
                                data.photos.map( (photo, index) => (
                                    <CarrouselImage key={ index } photo={ photo.large } index={ index } />
                                ))
                            }
                        </div>
                        <a className="carousel-control-prev" href="#indicadoresCarousel" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#indicadoresCarousel" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>
                <div className="modal-detail-body">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="pl-3 pr-3 pb-1 pt-2">
                                <label className="name-detail">
                                    { data.name } { data.primay } { data.secondary }
                                </label>                                
                                &nbsp;
                                {
                                    data.gender === 'Male' ?
                                    <span className="fa fa-mars text-primary"></span> :
                                    <span className="fa fa-venus female-icon"></span>
                                } 
                            </h4>
                            <hr className="ml-3 mr-3 mb-3 mt-3" />                            
                        </div>
                    </div>   
                    <div className="row">
                        <div className="col pl-5 size-detail">
                            <div className="form-inline">
                                <span className="fa fa-paw fa-lg"></span>&nbsp;
                                <h6 className="mb-0">{ data.age }</h6>
                            </div>                            
                            <p className="ml-3">Edad</p>
                        </div>
                        <div className="col size-detail">
                            <div className="form-inline">
                                <span className="fa fa-arrows-alt-v fa-lg"></span>&nbsp;
                                <h6 className="mb-0">{ data.size }</h6>
                            </div>                            
                            <p className="ml-3">Tamaño</p>
                        </div>
                        <div className="col size-detail">
                            <div className="form-inline">
                                <span className="fa fa-clipboard fa-lg"></span>&nbsp;
                                <h6 className="mb-0">{ data.status }</h6>
                            </div>                            
                            <p className="ml-3">Estatus</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <p className="pl-3 pr-3 pt-0 text-left">{ data.description }</p>
                        </div>
                    </div>
                </div>
                <div className="modal-detail-footer pb-3">
                    <div className="row">
                        <div>
                            {/*<ReactSVG src="../img/footer_modal.svg" />*/}
                            <img src={ pruebaSVG } alt="prueba" />
                        </div>
                        <div className="col-12 pl-4 ml-1 pt-2">
                            <h5>Contacto</h5>
                        </div>                        
                        <div className="col-12 pl-4 ml-1">                            
                            <span className="fa fa-envelope"></span>&nbsp;
                            { 
                                data.contact === undefined ?
                                "Sin email" :
                                data.contact.email
                            }
                        </div>
                        <div className="col-12 pl-4 ml-1 mt-2">                            
                            <span className="fa fa-phone"></span>&nbsp;
                            { 
                                data.contact === undefined ?
                                "Sin teléfono" :
                                data.contact.phone
                            }
                        </div>
                        <div className="col-12 pl-4 ml-1 mt-2">                            
                            <span className="fa fa-map-marker-alt"></span>&nbsp;
                            { 
                                data.contact === undefined ?
                                "Sin dirección" :
                                data.contact.country
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
