import Api from '../lib/api.js'
import ShowModal from './modal' //este es el modal que viene de modal.js
import creation from './hero' // este es el crear ale
import editHeroe from './update' // este es el update de nico
import borrarHeroe from './delete' // eliminar de ale

window.ShowModal = ShowModal;

window.borrarHeroe = borrarHeroe;


//para editar dependiendo su modal
// window.mimodal = () => {
//     // pisar estilo del id="Cambiaso" del index.html
//    ShowModal();
// }



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
                    <td><button onclick=borrarHeroe(${viewHeroes.id})>Editar</button><button onclick=borrarHeroe(${viewHeroes.id})>Borrar</button></td>
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