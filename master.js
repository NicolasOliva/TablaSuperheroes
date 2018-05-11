const xhr = new XMLHttpRequest();

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
        return res;
      }
    })
    .catch((error) =>{
      alert("Error al buscar la informacion");
    })
}

var heroes = Data("GET","data.json");
console.log(heroes);

function BuscarID(heroes, id){   //se le pasa el json(heroes) y el id que se desea buscar
    let flag = 0;
      for(var i = 0; i < heroes.length && flag == 0; i++){
        if(heroes[i].id == id){
          flag = 1;
          return heroes[i];
        }
      }
      if (flag == 0){
        alert("Heroe no encontrado");
      }
}

function MostrarHeroe(heroe,elemento){  //se le pasa el heroe que se desea mostrar y el elemento html donde va a estar

  //Esta funcion modifica el form del update.html con la informacion del heroe seleccionado

  document.getElementById('nombre').innerHTML = ${heroe.nombre};
  document.getElementById('alias').innerHTML = ${heroe.alias};
  document.getElementById('bio').innerHTML = ${heroe.bio};
  document.getElementById('universo').innerHTML = ${heroe.universo};
  document.getElementById('enemigos').innerHTML = ${heroe.enemigos};
  document.getElementById('romance').innerHTML = ${heroe.romance};

}
