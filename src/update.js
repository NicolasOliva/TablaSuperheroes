import Api from '../lib/api.js'
import App from './app.js'



const BuscarID = (id) => {
    Api("GET","data.json")
        .then((heroes) => {
            if(heroes){
                heroes.forEach((element) => {
                    if(element.id == id){
                        MostrarHeroe(element);
                    }
                });
            }
        })
        .catch((error) =>{
            alert("Error al buscar la informacion");
        })



}

const MostrarHeroe = (heroe) => {

    document.getElementById('id').value = heroe.id;
    document.getElementById('nombre').value = heroe.nombre;
    document.getElementById('alias').value = heroe.alias;
    document.getElementById('bio').value = heroe.bio;
    document.getElementById('universe').value = heroe.universo;
    document.getElementById('enemigos').value = heroe.nemesis;
    document.getElementById('romance').value = heroe.romance;
  }

const ObtenerDatosForm = () => {

    let id = parseInt(document.getElementById('id').value);
    let nombre = document.getElementById('nombre').value;
    let alias = document.getElementById('alias').value;
    let bio = document.getElementById('bio').value;
    let universo = document.getElementById('universe').value;
    let nemesis = document.getElementById('enemigos').value;
    let romance = document.getElementById('romance').value;

    if(nombre == "" || alias == "" || bio == "" || universo == "" || nemesis == "" || romance == ""){
      alert("Debe completar todos los campos");
      return false;
    }else {
      let heroe = {id,nombre,alias,bio,universo,nemesis,romance};
      return heroe;
    }

}

const EditarHeroe = () => {

    let HeroeModificado = ObtenerDatosForm();

    Api("GET","data.json")
        .then((heroList) => {
            let hero = []
            if(heroList){
                heroList.forEach((element) => {
                    if(element.id == HeroeModificado.id){
                        element = HeroeModificado;
                    }
                    hero.push(element)
                });
                App(hero);
            }
        })
        .catch((error) =>{
            alert("Error al buscar la informacion");
        })


}

export default {BuscarID, EditarHeroe};
