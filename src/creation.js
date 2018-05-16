import Api from '../lib/api.js'
import App from './app.js'
// FUNCION PARA BORRAR HEROES ==========>



//FIN FUNCION PARA BORRAR HEROES






/*FUNCION PARA CREAR UN HEROE , LUEGO DE CARGADO SE EJECUTARA LA SEGUNDA FUNCION QUE LO AGREGARA AL ARRAY HERO
O AL JSON UNA VES LO TENGAMOS====================================>  */

const creation = (hero)=>{
    Api("GET","data.json")
    .then((hero) => {
    if(hero){
        let id = hero.length +1;
        let nombre = document.getElementById('nombre').value;
        let alias = document.getElementById('alias').value;
        let bio = document.getElementById('bio').value;
        let enemigos = document.getElementById('enemigos').value;
        let universe = document.getElementById('universe').value;
        let foto = document.getElementById('foto').value;
        let romance = document.getElementById('romance').value;
        if(id === "" || nombre === "" || alias === "" || bio === "" || enemigos === "" || universe === ""){
            alert('Tu Heroe no esta completo!!')
            return false;
        }else{
            let newHero = {
                id: id,
                nombre: nombre,
                alias: alias,
                bio: bio,
                universo:universe,
                nemesis:enemigos,
                foto:foto,
                romance:romance
            }
            if(hero.indexOf(newHero) === -1){
                hero.push(newHero);
            } else{
                alert('Ese heroe ya existe!')
            }
        }
        App(hero)
    }
    })
    .catch((error) =>{
        alert("Error al buscar la informacion");
    })


}

export default creation

//FIN FUNCION PARA CREAR UN HEROE============================================================================
/*FUNCION PARA CARGAR EL NUEVO HEROE AL ARRAY HERO , CUANDO TENGAMOS EL JSON SE ENCARAGARA DE CARGARLO AL MISMO
================================>  */