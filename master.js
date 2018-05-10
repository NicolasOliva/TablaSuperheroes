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
        console.log(res);
      }
    })
    .catch((error) =>{
      alert("Error al buscar la informacion");
    })
}

Data("GET","data.json");
