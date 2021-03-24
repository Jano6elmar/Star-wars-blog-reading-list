import React, { useContext, useEffect } from 'react';
import { Context } from '../store/appContext';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const PeopleContent = (props) => {
    const { store, actions } = useContext(Context);  

    useEffect(() => {
        window.scrollTo(0, 0); // iniciar la pagina desde arriba
        actions.getPeople1(props.match.params.id);        

    }, []);    

    return (
        <>
        <br/>
        <br/>
        <br/>
            {
                !!store.people1 ? (
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
                                        <h1 className="text-center">{store.people1.name}</h1>
                                        <p className="mt-4 text-justify">Maecenas ac pellentesque ipsum, sed blandit velit. Nulla et rhoncus ex, at tristique neque. Donec sed gravida felis. Sed sollicitudin ullamcorper massa, at convallis lectus molestie ut. Donec nec rhoncus lorem, ac aliquet massa. Donec pulvinar arcu nec sem scelerisque, et efficitur dolor suscipit. Sed quis rhoncus purus. Nulla egestas eget felis vel placerat. Sed egestas lectus eu ligula gravida, ac tincidunt elit tincidunt. Praesent et vehicula mauris. Proin imperdiet, nunc eu ultrices fermentum, urna massa consectetur massa, non egestas ex ante id ante. Etiam id nulla mauris. Aliquam erat volutpat. Morbi commodo elit quis diam cursus condimentum. Duis fermentum mauris ex, vitae egestas mauris hendrerit quis. Suspendisse nec est sed ex facilisis aliquet egestas quis quam.</p>
                                    </div>
                                </div>
                                <hr />
                            </div>
                        </div>
                        <div className="container text-center mt-4 text-danger">
                            <div className="row">
                                <div className="col-md-2">
                                    <h6>Name</h6>
                                    <h6 className="mt-3">{store.people1.name}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Birth Year</h6>
                                    <h6 className="mt-3">{store.people1.birth_year}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Gender</h6>
                                    <h6 className="mt-3">{store.people1.gender}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Height</h6>
                                    <h6 className="mt-3">{store.people1.height}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Skin Color</h6>
                                    <h6 className="mt-3">{store.people1.skin_color}</h6>
                                </div>
                                <div className="col-md-2">
                                    <h6>Eye Color</h6>
                                    <h6 className="mt-3">{store.people1.eye_color}</h6>
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

export default PeopleContent;