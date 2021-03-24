import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Home = props => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <div className="mx-5">
            <h1>Welcome</h1>
            <h5>Choose a Section to read</h5>
            </div>
            
            <div className="card-deck  ">
            <div className="row d-flex flex-row flex-nowrap overflow-auto ">
            <div className="col-3 mx-1 " >
                <div className="card mb-3">
                    <img src="https://starwars-visualguide.com/assets/img/categories/character.jpg" className="card-img-top" />
                    <div className="card-body">

                    </div>
                    <div className="card-footer">
                        <Link to={"/People"} >
                            <button type="button" className="btn btn-primary">Characters</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-3 mx-1" >
                <div className="card mb-3">
                    <img src="https://starwars-visualguide.com/assets/img/categories/films.jpg" className="card-img-top" />
                    <div className="card-body">

                    </div>
                    <div className="card-footer">
                        <Link to={"/Films"} >
                            <button type="button" className="btn btn-primary">Films</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-3 mx-1" >
                <div className="card mb-3">
                    <img src="https://starwars-visualguide.com/assets/img/categories/starships.jpg" className="card-img-top" />
                    <div className="card-body">

                    </div>
                    <div className="card-footer">
                        <Link to={"/Starships"} >
                            <button type="button" className="btn btn-primary">Starships</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-3 mx-1" >
                <div className="card mb-3">
                    <img src="https://starwars-visualguide.com/assets/img/categories/vehicles.jpg" className="card-img-top" />
                    <div className="card-body">

                    </div>
                    <div className="card-footer">
                        <Link to={"/Vehicles"} >
                            <button type="button" className="btn btn-primary">Vehicles</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-3 mx-1" >
                <div className="card mb-3">
                    <img src="https://starwars-visualguide.com/assets/img/categories/species.jpg" className="card-img-top" />
                    <div className="card-body">

                    </div>
                    <div className="card-footer">
                        <Link to={"/Species"} >
                            <button type="button" className="btn btn-primary">Species</button>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="col-3 mx-1" >
                <div className="card mb-3">
                    <img src="https://starwars-visualguide.com/assets/img/categories/planets.jpg" className="card-img-top" />
                    <div className="card-body">

                    </div>
                    <div className="card-footer">
                        <Link to={"/Planets"} >
                            <button type="button" className="btn btn-primary">Planets</button>
                        </Link>
                    </div>
                </div>
            </div>

            </div>
            </div>
            





















        </>

    )
}

export default Home;