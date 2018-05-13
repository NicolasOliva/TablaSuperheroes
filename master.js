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
  var json = " ";
    Request(method,url)
    .then((res) => {
      if(res){
        json = "hola";
        console.log(json);
        return json;
      }
    })
    .catch((error) =>{
      alert("Error al buscar la informacion");
    })
console.log(json);
    return json;
}

var f = new Object();

f = Data("GET","data.json");

console.log("letra   " + f);


d = Data("GET","data.json");

console.log("letra   " + d);
