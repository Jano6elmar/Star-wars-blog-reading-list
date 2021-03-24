import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const FilmsContent = (props) => {
    const { store, actions } = useContext(Context);  

    useEffect(() => {
        window.scrollTo(0, 0); // iniciar la pagina desde arriba
        actions.getFilms1(props.match.params.id);        

    }, []);    

    return (
        <>
        <br/>
        <br/>
        <br/>
            {
                !!store.films1 ? (
                    <>
                        <div className="container mt-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="img-container">
                                        <img src="https://place-hold.it/800x600" className="card-img-top" alt="..." />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="">
                                        <h1 className="text-center">{store.films1.title}</h1>
                                        <p className="mt-4 text-justify">{store.films1.opening_crawl} </p>
                                           </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="container text-center mt-4 text-danger">
                            <div className="row">
                                <div className="col-md-2">
                                    <h6>Title</h6>
                                    <h6 className="mt-3">{store.films1.title}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Episode</h6>
                                    <h6 className="mt-3">{store.films1.episode_id}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Release date</h6>
                                    <h6 className="mt-3">{store.films1.release_date}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Director</h6>
                                    <h6 className="mt-3">{store.films1.director}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Producer</h6>
                                    <h6 className="mt-3">{store.films1.producer}</h6>
                                </div>
                                
                               
                            </div>
                        </div>
                    </>
                )
                : (
                    <h1>Loading...</h1>
                )
        }
        </>
    )
}

export default FilmsContent;