import Api from '../lib/api.js'
import ShowModal from './modal' //este es el modal que viene de modal.js
import creation from './creation' // este es el crear ale
import editHeroe from './update' // este es el update de nico
import Delete from './delete' // eliminar de ale

window.ShowModal = ShowModal;

window.Delete = Delete;

window.creation = creation;

window.ShowModal = () =>{
    let modal = document.getElementById('Cambiaso');
    let htmlTemplate = `
    <div id="formulario" class="form" action="" name="formulario">
    <h2 class="form-titulo form-titulo1">Crea tu propio Heroe</h2>
    <div class="form-container">
            <div class="field">
                <input type="text" class="form-text input" maxlength="20"  name="nombre" placeholder="Nombre" id="nombre">
                <label for="nombre">Nombre</label>
            </div>

            <div class="field">
                <input type="text" class="form-text input"maxlength="20"   name="alias" placeholder="Alias" id="alias" >
                <label for="alias">Alias</label>
            </div>

            <div class="field">
                <input type="text" class="form-text input" maxlength="20"  name="universe" placeholder="Universo" id="universe">
                <label for="universe">Universo</label>
            </div>

            <div class="field">
                <input type="text" class="form-text input" maxlength="20"   name="nemesis" placeholder="Nemesis" id="enemigos">
                <label for="enemigos">Nemesis</label>
            </div>

            <div class="field">
                <input type="text" class="form-text input"   name="foto" placeholder="Foto" id="foto">
                <label for="foto">Foto</label>
            </div>

            <div class="field">
                <input type="text" class="form-text input" maxlength="30"  name="romance" placeholder="Romance" id="romance">
                <label for="romance">Romance</label>
            </div>

            <div class="field bio-field">
                <textarea class="form-text input" name="bio" placeholder="Biografia" id="bio" ></textarea>
                <label for="bio">Biografia</label>
            </div>

            <input type="button" class="form-button" value="CREAR" id="btn" onclick="creation();">
            
        </div>
    </div>                        
    `

    modal.innerHTML = htmlTemplate;
    ShowModal();
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
                    <td><button onclick=editHeroe(${viewHeroes.id})>Editar</button><button onclick=Delete(${viewHeroes.id})>Borrar</button></td>
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