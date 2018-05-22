import Api from '../lib/api.js'
import App from './app.js'

const Delete = (id)=>{
    console.log('el id es',id)
    Api("GET","data.json")//a futuro cambiar a DELETE
        .then((hero) => {
        if(hero){
            console.log(hero)
            hero.forEach((element,index)=>{
                if(element.id == id){
                    hero.splice(index ,1)
                    
                }
            })
            App(hero)
        }
        })
        .catch((error) =>{
            alert("Error al buscar la informacion");
        })

    return confirm('')

};




export default Delete;