import Api from '../lib/api.js'
import ShowModal from './modal'
import creation from './creation' 
import editDataHero from './update' 
import Delete from './delete' 
import htmlTemplate from '../views/createModal.js'
import editForm from '../views/editModal.js'

window.editDataHero = editDataHero.EditarHeroe 

window.creation = creation;

window.info = (nombre,foto1, info1 ,foto2, info2 ,foto3, info3)=>{
    let modal = document.getElementById('cambiaso');
    const htmlTemplate = `
    <div>
        <h2>${nombre}</h2>
    </div>
    <div>
        <div>
        <img src="${foto1}"></img>
        <p>${info1}</p>
        </div>
        <div>
        <p>${info2}</p>
        <img src="${foto2}"></img>
        </div>
        <img src="${foto3}"></img>
        <p>${info3}</p>
        <div
        ></div>
    </div>
    `;

    modal.innerHTML = htmlTemplate;
    ShowModal();
}


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
                    <td class="nombre"><a href="#" onclick="info(${viewHeroes.nombre},${viewHeroes.foto[1]},${viewHeroes.informacion[0]},${viewHeroes.foto[2]},${viewHeroes.informacion[1]},${viewHeroes.foto[3]},${viewHeroes.informacion[2]})">${viewHeroes.nombre}"</a></td>
                    <td class="alias">${viewHeroes.alias}</td>
                    <td class="bio">${viewHeroes.bio}</td>
                    <td class="universe">${viewHeroes.universo}</td>
                    <td class="nemesis">${viewHeroes.nemesis[0]}</td>
                    <td class="foto"><img src="${viewHeroes.foto[0]}" alt="Smiley face" height="42" width="42"></td>
                    <td class="romance">${viewHeroes.romance}</td>
                    <td class="botones">
                    <button class="btn" onclick=editHero(${viewHeroes.id})><span><i class="fas fa-edit"></i></span></button>
                    <button alt="Borrar" class="btn-del" onclick=Delete(${viewHeroes.id})><span><i class="far fa-trash-alt"></i></span></button>
                    </td>

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