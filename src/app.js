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

window.deleteHero =(id)=>{

    Api("GET","data.json")
        .then((heroes) => {
            if(heroes){
                heroes.forEach((element) => {
                    if(element.id == id){
                        Borrando(element);                      
                  }
                });
            }
        })
        .catch((error) =>{
            alert("No encuentro el Heroe");
        })
};


const Borrando = (heroes)=>{
    let borrar = heroes.id;
    let nombre = heroes.nombre;   
    
    const htmlTemplate2 = `
        <div class="div-confirm">
            <div class="estasSeguro">
                <h4>Realmente quieres borrar a "${nombre}"?<h4>
            </div>
            <div class="btn-confirmContainer">
                <button class="btn-confirm" id="deleteButton" onclick="Delete(${borrar})">Si</button>
                <button class="btn-confirm" id="boton-cancelar">No</button>
            </div>
        </div>`
    

    const modal = document.getElementById('myModal');
    const modal1 = document.getElementById('Cambiaso');
    modal1.innerHTML = htmlTemplate2;
    ShowModal();

    const cancelar = document.getElementById('boton-cancelar');

    cancelar.onclick = ()=>{
        modal.style.display = "none";
    } 

    const header = document.getElementById('modal-header');
    header.style.background="white";

    const mymodal = document.getElementById('myModalContent');
    mymodal.style.margin='0 auto';
    mymodal.style.height = '250px';
    mymodal.style.width = '400px';
    modal.style.background='none';
}

const Mostrar = (heroe)=>{
    let nombre = heroe.nombre;
    let foto1 = heroe.foto[1];
    let foto2 = heroe.foto[2];
    let foto3 = heroe.foto[3];
    let info1 = heroe.informacion[0];
    let info2 = heroe.informacion[1];
    let info3 = heroe.informacion[2];
    let info4 = heroe.informacion[3];
    let enemigo1 = heroe.nemesis[0];
    let enemigo2 = heroe.nemesis[1];
    let enemigo3 = heroe.nemesis[2];
    let alias = heroe.alias;
    let romance = heroe.romance;

    const htmlTemplate = `
    <div class="containerHeroe shadow-z-1">
        <div class="tituloHeroe">
            <h2>${nombre}</h2>
        </div>

    <div class="superContainer">
        
        <div class="containerHeroe1">
            <div class="divHeroe">
            <h4 class="textHistory">Historia</h4>
                <div class="containerHeroe2">
                    <div class="divImgPrincipal">
                        <h3>${nombre}</h3>
                        <img class="img3" src="${foto3}"></img>
                    </div>
                    <div class="divInfoPrincipal">
                        <h3 class="">Informacion General</h3>
                        <div>
                            <div class="infoTable">
                                <h4>Nombre Real </h4>
                                <div>
                                    <p>${alias}</p>
                                </div>
                            </div>
                            <div class="infoTable">
                                <h4>Enemigos </h4>
                                <div class="enemigos">
                                    <p>${enemigo1}</p>
                                    <p>${enemigo2}</p>
                                    <p>${enemigo3}</p>
                                </div> 
                            </div>
                            <div class="infoTable">
                                <h4>Romance </h4>
                                <div>
                                    <p>${romance}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <p class="textHeroe textH1">${info1}</p>
                <img  class="imgHeroe img1" src="${foto1}"></img>
                <p class="textHeroe textH2">${info2}</p>
                <img  class="imgHeroe img2" src="${foto2}"></img>
                <p class="textHeroe textH3">${info3}</p>
                
            </div>

            <div class="divHeroe">
                
            </div>  

            <div class="divHeroe">
                
            </div>

        </div>
       
    </div>
    </div>
    `;

    const mymodal = document.getElementById('myModalContent');
    mymodal.style.height = '280vh';
    mymodal.style.width = '90vw';
    const header = document.getElementById('modal-header')
    header.style.background="white";

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
                    <button alt="Borrar" class="btn-del" onclick=deleteHero(${viewHeroes.id})><span><i class="far fa-trash-alt"></i></span></button>
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