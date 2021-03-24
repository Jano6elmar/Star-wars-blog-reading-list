import { useContext } from "react"
import { Link } from "react-router-dom"
import { Context } from "../store/appContext"



const style = {
  width: "150px",
  height: "60px"
}
const style1 = {
  backgroundColor: "black"
}
const styleCollapse = {
  backgroundColor: ""
}
const SideBar = () => {
  const { store, actions, setStore } = useContext(Context);
  
  const deleteFav = i => {
    console.log(i)
    let fav1 = [...store.favorites];
    fav1.splice(i, 1)
     /* setStore({
       fav1
     }) */

     } 
    



  return (
    <>
      {/* <!-- Navigation --> */}
      <nav class="navbar navbar-expand-lg fixed-top" style={style1}>
        <div class="container">
          {/* <a class="navbar-brand" href="#">Star Wars</a> */}

          <Link to={"/"} >
            <button type="button" className="btn ">

              <img className="sidebartitulo" src={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/694px-Star_Wars_Logo.svg.png"} style={style} />
            </button>
          </Link>


          <button class="navbar-toggler bg-light" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" style={styleCollapse}>
            <span class="navbar-toggler-icon" ></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive"  >
            <ul class="navbar-nav ml-auto" >
              <li class="nav-item active" >

              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/People">Characters</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Films">Films</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Starships">Starships</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Vehicles">Vehicles</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Species">Species</Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/Planets">Planets</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="dropdown ">
          <button className="btn btn-outline-light " type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className="fas fa-bookmark"></i>  Favorites
                            </button>
          <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
            {!!store.favorites &&
              store.favorites.length !== 0 &&
              store.favorites.map((value, i) => {
                return (<div className="row-inline">
                  <li key={i} className="list-group-item" ><i className="far fa-star "></i> {value}</li>
                  <button className="btn col- inline" 
                  onClick={() => { actions.deleteFavorite(value) }}> 
                  <i className="fas fa-trash-alt" /> 
                  </button>
                  </div>)

              })}

          </div>
        </div>


      </nav>

      {/* <!-- Page Content --> */}
      <div class="container">

        <div class="row">

          {/* <!-- Blog Entries Column --> */}
          <div class="col-md-8">


          </div>
        </div>
      </div>


    </>


  )
}
export default SideBar
