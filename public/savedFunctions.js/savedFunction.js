/* saveList:() =>{
           localStorage.setItem('lista', JSON.stringify(getStore().favorites))
       },
       addCharacter: (personaje) =>{
           if(getStore().favorites.includes(personaje)){
               alert('El personaje ya se encuentra en la lista de favoritos')

           }else{
               setStore({
                   favorites: getStore().favorites.concat(personaje)
               })
           }
       },
       getList: () =>{
           if(localStorage.getItem('lista')){
               let u = localStorage.getItem('lista');
               setStore({ favorites:JSON.parse(u)})
           }
       }, */