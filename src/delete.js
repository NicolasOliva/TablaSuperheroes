import Api from '../lib/api.js'
import App from './app.js'
const borrarHeroe = (id)=>{
    console.log('el id es',id)

    Api("GET","data.json")//a futuro cambiar a DELETE
        .then((hero) => {
        if(hero){
            console.log(hero)
            hero.forEach((element,index)=>{
                if(element.id == id){
                    console.log('vot a borrar a ',element.nombre,'en el index ', index)
                    hero.splice(index ,1)
                    
                }
            })
            App(hero)
        }
        })
        .catch((error) =>{
            alert("Error al buscar la informacion");
        })



};




export default borrarHeroe;