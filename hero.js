const boton1 = document.getElementById('btn');

var hero = [{ id: 1 ,lele: "puto" },{id: 2 , marciana: ""},{id:3 , mayus: ""}]



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

var newHero = {};

const cargando = ()=>{
    
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let alias = document.getElementById('alias').value;
    let bio = document.getElementById('bio').value;
    let enemigos = document.getElementById('enemigos').value;
    let universe = document.getElementById('universe').value;
        if(nombre === true){
            return newHero.nombre = nombre;
        }
    
        /*const agregar = (id, nombre, alias, bio, enemigos)=>{
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
        return agregar(id,nombre,alias,bio,enemigos);*/

}

//boton1.onclick = cargando();





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

