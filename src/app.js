import Api from '../lib/api.js'
import ShowModal from './modal'
import creation from './creation' 
import editDataHero from './update' 
import Delete from './delete' 
import htmlTemplate from '../views/createModal.js'
import editForm from '../views/editModal.js'

window.Delete = Delete

window.editDataHero = editDataHero.EditarHeroe

window.creation = creation

window.info =(id)=>{
    Api("GET","data.json")
        .then((heroes) => {
            if(heroes){
                heroes.forEach((element) => {
                    if(element.id == id){
                        Mostrar(element);                       
                  }
                });
            }
        })
        .catch((error) =>{
            alert("Error al buscar la informacion");
        })
};


const Mostrar = (heroe)=>{
    let nombre = heroe.nombre;
    let foto1 = heroe.foto[1];
    let foto2 = heroe.foto[2];
    let foto3 = heroe.foto[3];
    let info1 = heroe.informacion[0];
    let info2 = heroe.informacion[1];
    let info3 = heroe.informacion[2];

    const htmlTemplate = `
    <div class="containerHeroe">
        <div class="tituloHeroe">
            <h2>${nombre}</h2>
        </div>
        <hr>

        <div class="divHeroe">
            <img  class="imgHeroe img1" src="${foto1}"></img>
            <p class="textHeroe textH1">${info1}</p>
        </div>

        <div class="divHeroe">
            <img  class="imgHeroe img2" src="${foto2}"></img>
            <p class="textHeroe textH2">${info2}</p>
        </div>     
        <div class="divHeroe">
            <img class="imgHeroe img1" src="${foto3}"></img>
            <p class="textHeroe textH3">${info3}</p>
        </div>
    </div>
    `;

    const mymodal = document.getElementById('myModalContent');
    mymodal.style.height = '220vh';
    mymodal.style.width = '95vw';
    
    const modal = document.getElementById('Cambiaso');
    modal.innerHTML = htmlTemplate;
    ShowModal();
}

window.createHero = () =>{
    const mymodal = document.getElementById('myModalContent');
    mymodal.style.height = '600px';
    mymodal.style.width = '600px';
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
                    <td class="nombre"><a href="#" onclick=info(${viewHeroes.id})>${viewHeroes.nombre}</a></td>
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