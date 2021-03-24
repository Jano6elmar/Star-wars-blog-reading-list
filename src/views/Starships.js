import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Starships = () => {
  const { store, actions } = useContext(Context);
  let nombre = useRef(null);

  return (
    <>
      <h1>Home</h1>

      <>
      <br />
        <div className="container mt-4">
          <h1 className="charac mb-3">Starships</h1>
          <div className="card-deck">
            <div className="row d-flex flex-row flex-nowrap overflow-auto">
              {
                !!store.starships &&
                store.starships.map((item, index) => {
                  const urlContent = item.url.replace("http://swapi.dev/api/starships/", "");
                  return (
                    <div className="col-3 mx-1" key={index}>
                      <div className="card mb-3">
                      <div className="card-body">
                      <img src={`https://starwars-visualguide.com/assets/img/starships/${index + 1}.jpg`} className="card-img-top"/>
                          <h5 className="card-title" key={nombre}>{item.name}</h5>
                          <p className="card-text">Model: {item.model} </p>
                          <p className="card-text">Manufacturer: {item.manufacturer}</p>
                          <p className="card-text">Cost in credits: {item.cost_in_credits}</p>
                        </div>
                        <div className="card-footer footer">
                          <Link to={"starshipsContent/" + urlContent.replace("/", "")} >
                            <button type="button" className="btn btn-primary">Learn More</button>
                          </Link>
                          <button onClick={() => actions.addFavorite(item.name)} href="" className="float-right btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></button>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
          </div>
        </div>
      </>
    </>
  )
}
export default Starships;