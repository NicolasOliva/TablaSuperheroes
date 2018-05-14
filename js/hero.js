//ARRAY DE PRACTICA SIMULANDO LA INFORMACION DE UN PEQUEÑO JSON ==============>

var hero = [{ id: 1 ,nombre : "puto" },{id: 2 , nombre: "marciana"},{id:3 , nombre : "roberto"}]




//VARIABLE DONDE SE ENVIARAN LOS DATOS DEL NUEVO HEROE A CREAR ================>

var newHero = {};





// FUNCION PARA BORRAR HEROES ==========>

const borrarHeroe = ()=>{
    let nombre = document.getElementById('nombre1').value;
    hero.forEach((element)=>{
        if(element.nombre == nombre){
            hero.splice(element ,1)
        }
    })

};

//FIN FUNCION PARA BORRAR HEROES






/*FUNCION PARA CREAR UN HEROE , LUEGO DE CARGADO SE EJECUTARA LA SEGUNDA FUNCION QUE LO AGREGARA AL ARRAY HERO
O AL JSON UNA VES LO TENGAMOS====================================>  */

const cargando = ()=>{
    let nombre = document.getElementById('nombre').value;
    let id = document.getElementById('id').value;
    let alias = document.getElementById('alias').value;
    let bio = document.getElementById('bio').value;
    let enemigos = document.getElementById('enemigos').value;
    let universe = document.getElementById('universe').value;

    const agregar = (id, nombre, alias, bio, enemigos , universe)=>{
        newHero.id = id;
        newHero.nombre = nombre;   
        newHero.alias=alias;
        newHero.bio=bio;
        newHero.enemigos=enemigos; 
        newHero.universe=universe;
        if(id === "" || nombre === "" || alias === "" || bio === "" || enemigos === "" || universe === ""){
            alert('Tu Heroe no esta completo!!')
            return false;
        }

         
    };    
    return agregar(id,nombre,alias,bio,enemigos,universe);
    
};

//FIN FUNCION PARA CREAR UN HEROE============================================================================




/*FUNCION PARA CARGAR EL NUEVO HEROE AL ARRAY HERO , CUANDO TENGAMOS EL JSON SE ENCARAGARA DE CARGARLO AL MISMO
================================>  */

const masHeroes = (hero , newH)=>{
        if(hero.indexOf(newH) === -1){
            hero.push(newH);
        } else{
            alert('Ese heroe ya existe!')
        }
    
    };

//FIN FUNCION PARA CARGAR HEROES


const mostrarmenu = () => {
    let formulario = document.getElementById('formulario');
    formulario.style.display='block';
}

const ocultarmenu = ()=>{
    let formulario = document.getElementById('formulario');
    formulario.style.display='none';
}