import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';


import Footer from './components/Footer';
import PeopleContent from './components/peopleContent';
import FilmsContent from './components/filmsContent';
import PlanetsContent from './components/planetsContent';
import SpeciesContent from './components/speciesContent';
import StarshipsContent from './components/starshipsContent';
import VehiclesContent from './components/vehiclesContent';
import injectContext from './store/appContext';

import Films from './views/Films';
import Home from './views/home';
import People from './views/People';
import Planets from './views/Planets';
import SideBar from './views/Sidebar';
import Species from './views/Species';
import Starships from './views/Starships';
import Vehicles from './views/Vehicles';

const App = props => {
  return (
    <BrowserRouter>
     <SideBar/>
        <Switch>
        <Route exact path="/"  render={(props) => <Home {...props} />} />
        <Route exact path="/People" render={(props) => <People {...props} />}/>
        <Route exact path="/Films" render={(props) => <Films {...props} />}/>
        <Route exact path="/Starships" render={(props) => <Starships {...props} />}/>
        <Route exact path="/Vehicles" render={(props) => <Vehicles {...props} />}/>
        <Route exact path="/Species" render={(props) => <Species {...props} />}/>
        <Route exact path="/Planets"render={(props) => <Planets {...props} />}/>
        <Route exact path="/peopleContent/:id" component={PeopleContent} />
        <Route exact path="/filmsContent/:id" component={FilmsContent} />
        <Route exact path="/starshipsContent/:id" component={StarshipsContent} />
        <Route exact path="/vehiclesContent/:id" component={VehiclesContent} />
        <Route exact path="/speciesContent/:id" component={SpeciesContent} />
        <Route exact path="/planetsContent/:id" component={PlanetsContent} />
        
        <Route render={() => {
          return <h1>Page Not Found</h1>
        }} />
      </Switch>
        <Footer/>
    </BrowserRouter>
  )
}

export default injectContext(App);
