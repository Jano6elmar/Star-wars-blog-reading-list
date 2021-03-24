import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Species =(props)=>{
  const {  store, actions } = useContext(Context);  
  let nombre = useRef(null);
    return(
        <> 
        <>
      <h1>Home</h1>

      <>
      <br />
        <div className="container mt-4">
          <h1 className="charac mb-3">Species</h1>
          <div className="card-deck">
            <div className="row d-flex flex-row flex-nowrap overflow-auto">
              {
                !!store.species &&
                store.species.map((item, index) => {
                  const urlContent = item.url.replace("http://swapi.dev/api/species/", "");
                  return (
                    <div className="col-3 mx-1" key={index}>
                      <div className="card mb-3">
                      <img src={`https://starwars-visualguide.com/assets/img/species/${index + 1}.jpg`} className="card-img-top"/>
                        <div className="card-body">
                          <h5 className="card-title" key={nombre}>{item.name}</h5>
                          <p className="card-text">Classification: {item.classification} </p>
                          <p className="card-text">Designation: {item.designation}</p>
                          <p className="card-text">Average height: {item.average_height}</p>
                        </div>
                        <div className="card-footer footer">
                          <Link to={"speciesContent/" + urlContent.replace("/", "")} >
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
       </>
    )
}
export default Species;