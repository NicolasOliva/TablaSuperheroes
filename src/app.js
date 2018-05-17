import Api from '../lib/api.js'
import ShowModal from './modal'
import creation from './creation' 
import editDataHero from './update' 
import Delete from './delete' 
import htmlTemplate from '../views/createModal.js'
import editForm from '../views/editModal.js'

window.Delete = Delete;
window.editDataHero = editDataHero.EditarHeroe 
window.creation = creation;

window.createHero = () =>{
    let modal = document.getElementById('Cambiaso');
    modal.innerHTML = htmlTemplate;
    ShowModal();
}

window.editHero = (id) =>{
    let modal = document.getElementById('Cambiaso');
    modal.innerHTML = editForm;
    ShowModal();
    editDataHero.BuscarID(id);
}


const view = (viewHeroes) =>{
    let htmlTemplate = `                        
        <th>Nombre</th>
        <th>Alias</th>
        <th>Bio</th>
        <th>Universo</th>
        <th>Némesis</th>
        <th>Foto</th>
        <th>Romance</th>
        <th>Accion</th>`;
    viewHeroes.forEach((viewHeroes)=>{
         htmlTemplate += `
            <tbody>
                <tr>
                    <td><a href="#" onclick="funcionsera(${viewHeroes.id})">${viewHeroes.nombre}</a></td>
                    <td>${viewHeroes.alias}</td>
                    <td>${viewHeroes.bio}</td>
                    <td>${viewHeroes.universo}</td>
                    <td>${viewHeroes.nemesis}</td>
                    <td><img src="${viewHeroes.foto}" alt="Smiley face" height="42" width="42"></td>
                    <td>${viewHeroes.romance}</td>
                    <td><button onclick=editHero(${viewHeroes.id})>Editar</button><button onclick=Delete(${viewHeroes.id})>Borrar</button></td>
                </tr> 
            </tbody>
            `;
    })

    document.getElementById('table').innerHTML = htmlTemplate;
};



const Data = (method,url) => {
    Api(method,url)
      .then((res) => {
        if(res){
          view(res)
        }
      })
      .catch((error) =>{
        alert("Error al buscar la informacion");
      })
}

Data("GET","data.json");


export default view ;