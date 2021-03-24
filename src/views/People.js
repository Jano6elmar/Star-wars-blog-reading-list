import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const People = () => {
  const { store, actions } = useContext(Context);
  let nombre = useRef(null);

  return (
    <>
      <h1>Home</h1>

      <>
      <br />
      <h1 id="nav-sw-logo" href="/" itemprop="logo" data-cto="swlogo" title="Star Wars Logo"></h1>
        <div className="container mt-4">
        <h1 id="nav-sw-logo" href="/" itemprop="logo" data-cto="swlogo" title="Star Wars Logo"></h1>
          <h1 className="charac mb-3">Characters</h1>
          <div className="card-deck">
            <div className="row d-flex flex-row flex-nowrap overflow-auto">
              {
                !!store.people &&
                store.people.map((item, index) => {
                  const urlContent = item.url.replace("http://swapi.dev/api/people/", "");
                  return (
                    <div className="col-3 mx-1" key={index}>
                      <div className="card mb-3">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`} className="card-img-top"/>
                        <div className="card-body">
                          <h5 className="card-title" key={nombre}>{item.name}</h5>
                          <p className="card-text">Gender: {item.gender} </p>
                          <p className="card-text">Hair Color: {item.hair_color}</p>
                          <p className="card-text">Eye Color: {item.eye_color}</p>
                        </div>
                        <div className="card-footer footer">
                          <Link to={"peopleContent/" + urlContent.replace("/", "")} >
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
export default People