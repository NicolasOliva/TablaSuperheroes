const boton1 = document.getElementById('btn');
var onload = () =>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET',"data.json",true),

    xhr.onload = ()=>{
            if(this.status == 200){
                console.log(JSON.parse(this.responseText))
        }

    };

    xhr.send();

};

onload();

const cargando = ()=>{
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let alias = document.getElementById('id').value;
    let bio = document.getElementById('id').value;
    let enemigos = document.getElementById('id').value;
    let universe = document.getElementById('id').value;
        if(nombre === true){
            agregar(nombre) = nombre;
        }


}

boton1.onclick = cargando();

var hero = [{ id: 1 ,lele: "puto" },{id: 2 , marciana: ""},{id:3 , mayus: ""}]

var newHero = {};

const agregar = (id, nombre, alias, bio, enemigos)=>{
    newHero.id = id;
    newHero.nombre = nombre;   
    newHero.alias=alias;
    newHero.bio=bio;
    newHero.enemigos=enemigos; 
    if(id === "" || nombre === "" || alias === "" || bio === "" || enemigos === ""){
        alert('Tu Heroe no esta completo!!')
        return false;
    } 
};

const agregarID = ()=>{
    
};

//agregar(1 , "acuaman" , "roberto", "era gay");

const agregarName = (res)=>{
    newHero.nombre = res;
};



















const masHeroes = (hero , newHero)=>{
    if(hero.indexOf(newHero) === -1){
        hero.push(newHero);
    } else{
        alert('Ese heroe ya existe!')
    }

};

masHeroes(hero , "arg");


const menosHeroes = (hero , badHero)=>{
    if(hero.indexOf(badHero) === -1){
        console.log('you sucks!');

    } else{
        
        hero.splice(hero.indexOf(badHero),1);
    }
}


menosHeroes(hero , );





/*for (let i = 0; i < hero.length; i++) {
    const element = hero[i].id;
    if(element === number){
        return x = element;
    }
}

const eliminar = (x) => {

    let array = hero;

    array.splice(x,1);

    return;
}*/

