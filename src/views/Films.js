import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Films = () => {
  const { store, actions } = useContext(Context);
  let nombre = useRef(null);

  return (
    <>
      <h1>Home</h1>

      <>
      <br />
        <div className="container mt-4">
          <h1 className="charac mb-3">Films</h1>
          <div className="card-deck">
            <div className="row d-flex flex-row flex-nowrap overflow-auto">
              {
                !!store.films &&
                store.films.map((item, index) => {
                  const urlContent = item.url.replace("http://swapi.dev/api/films/", "");
                  return (
                    <div className="col-3 mx-1" key={index}>
                      <div className="card mb-3">
                      <img src={`https://starwars-visualguide.com/assets/img/films/${index + 1}.jpg`} className="card-img-top"/>
                        <div className="card-body">
                          <h5 className="card-title" key={nombre}>{item.title}</h5>
                          <p className="card-text">Episode: {item.episode_id} </p>
                          <p className="card-text">Director: {item.director}</p>
                          <p className="card-text">Producer: {item.producer}</p>
                        </div>
                        <div className="card-footer footer">
                          <Link to={"filmsContent/" + urlContent.replace("/", "")} >
                            <button type="button" className="btn btn-primary">Learn More</button>
                          </Link>
                          <button onClick={() => actions.addFavorite(item.title)} href="" className="float-right btn btn-outline-danger btn-sm"><i className="far fa-heart"></i></button>
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
export default Films;