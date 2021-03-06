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
        <th class="title">Nombre</th>
        <th class="title">Alias</th>
        <th class="title">Bio</th>
        <th class="title">Universo</th>
        <th class="title">Némesis</th>
        <th class="title">Foto</th>
        <th class="title">Romance</th>
        <th class="title">Accion</th>`;
    viewHeroes.forEach((viewHeroes)=>{
         htmlTemplate += `
            <tbody>
                <tr class="data">
                    <td><a href="#" onclick="FullInfo(${viewHeroes.id})">${viewHeroes.nombre}</a></td>
                    <td>${viewHeroes.alias}</td>
                    <td>${viewHeroes.bio}</td>
                    <td>${viewHeroes.universo}</td>
                    <td>${viewHeroes.nemesis}</td>
                    <td><img src="${viewHeroes.foto}" alt="Smiley face" height="42" width="42"></td>
                    <td>${viewHeroes.romance}</td>
                    <td><button class="btn" onclick=editHero(${viewHeroes.id})><span><i class="fas fa-edit"></i></span></button><button alt="Borrar" class="btn-del" onclick=Delete(${viewHeroes.id})><span><i class="far fa-trash-alt"></i></span></button></td>

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