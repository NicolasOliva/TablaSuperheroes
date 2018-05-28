const EnviarEmail = () => {

let email = document.getElementById('email').value;
let contraseña = document.getElementById('password').value;
let asunto = document.getElementById('asunto').value;
let mensaje = document.getElementById('mensaje').value;

if(email == "" || contraseña == "" || asunto == "" || mensaje == ""){
  alert("Debe completar todos los campos");

}else {

    Email.send(email,
           "tablasuperheroe@hotmail.com",
           asunto,mensaje,
           "smtp-mail.outlook.com",
           email,
           contraseña,
           function done(message) {alert("Mensaje enviado correctamente.")} );

    }

}
