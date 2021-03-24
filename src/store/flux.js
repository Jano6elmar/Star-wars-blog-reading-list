const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            people: null,
            films: null,
            starships: null,
            vehicles: null,
            species: null,
            planets: null,
            people1: null,
            films1: null,
            starships1: null,
            vehicles1: null,
            species1: null,
            planets1: null,
            favorites: []
        },
        actions: {
            getPeople: () => {
                fetch("https://swapi.dev/api/people/")
                    .then(response => response.json())
                    .then(data => {
                        console.log(data);
                        setStore({
                            people: data.results
                        })

                    })
            },
            getFilms() {
                fetch("https://swapi.dev/api/films/")
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);
                        setStore({
                            films: data.results
                        })

                    })

            },
            getStarships() {
                fetch("https://swapi.dev/api/starships/")
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);
                        setStore({
                            starships: data.results
                        })

                    })

            },

            getVehicles() {
                fetch("https://swapi.dev/api/vehicles/")
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);
                        setStore({
                            vehicles: data.results
                        })

                    })

            },
            getSpecies() {
                fetch("https://swapi.dev/api/species/")
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);
                        setStore({
                            species: data.results
                        })

                    })

            },
            getPlanets() {
                fetch("https://swapi.dev/api/planets/")
                    .then(resp => resp.json())
                    .then(data => {
                        console.log(data);
                        setStore({
                            planets: data.results
                        })

                    })

            },
            getPeople1: (id) => {
                fetch("https://swapi.dev/api/people/" + id)
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({
                            people1: data
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getFilms1(id) {
                fetch("https://swapi.dev/api/films/" + id)
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({
                            films1: data
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getStarships1(id) {
                fetch("https://swapi.dev/api/starships/" + id)
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({
                            starships1: data
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },

            getVehicles1(id) {
                fetch("https://swapi.dev/api/vehicles/" + id)
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({
                            vehicles1: data
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getSpecies1(id) {
                fetch("https://swapi.dev/api/species/" + id)
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({
                            species1: data
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            getPlanets1(id) {
                fetch("https://swapi.dev/api/planets/" + id)
                    .then((response) => {
                        console.log(response);
                        return response.json();
                    })
                    .then((data) => {
                        console.log(data);
                        setStore({
                            planets1: data
                        })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            },
            /* favorites: name => {
                let store = getStore();
                setStore({
                    favorites: store.favorites.concat(name),
                })

            },
            deleteFavorite: (favorite) => {
                let store = getStore();
                setStore({
                    favorites: store.favorites.splice(favorite,1)
                })
            }, */

            getList:() =>{
                if (localStorage.getItem('lista')){
                    let u = localStorage.getItem('lista');
                    setStore({ favorites:JSON.parse(u)})
                }
            },
            saveList: () =>{
                localStorage.setItem('lista', JSON.stringify(getStore().favorites))
            },
            addFavorite: (name) => {
                if (getStore().favorites.includes(name)){
                    alert('ya está en favoritos')
                    console.log('elemento ya está en lista favoritos')

                }else {
                    setStore({
                        favorites: getStore().favorites.concat(name)
                    })
                }
                getActions().saveList();
            },
            deleteFavorite:(item) =>{
                setStore({
                    favorites: getStore().favorites.filter(fav=> fav !== item)
                })
                getActions().saveList();
            }

        }



    }
}


export default getState;

