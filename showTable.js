const xhr = new XMLHttpRequest();

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
                    <td>${viewHeroes.nombre}</td>
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



const Request = (method,url) => {
  let promise = new Promise((resolve,reject) => {
      xhr.open(method,url,true);
      xhr.send();
      xhr.onload = () => {
        if(xhr.readyState == 4 && xhr.status == 200){
          resolve(JSON.parse(xhr.responseText));
        }else{
          reject("Error");
        }
      }
  })
  return promise;
 }

const Data = (method,url) => {
  Request(method,url)
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
