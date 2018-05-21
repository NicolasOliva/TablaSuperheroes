import Api from '../lib/api.js'
import App from './app.js'
const Delete = (id)=>{
    console.log('el id es',id)
    window.DeleteHero = () => {
        let modal = document.getElementById('Cambiaso');
        let htmlTemplate2 = `
        <div>
            <h3>Estas seguro?</h3>
            <div>
                <button onclick=Delete(id)>Si</button>
                <button class="close">No</button>
            </div>
        </div>
        `;
        modal.innerHTML = htmlTemplate2;
        ShowModal();
    }
    
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



};




export default Delete;