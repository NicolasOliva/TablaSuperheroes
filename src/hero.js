//ARRAY DE PRACTICA SIMULANDO LA INFORMACION DE UN PEQUEÑO JSON ==============>

var hero = [{ id: 1 ,nombre : "puto" },{id: 2 , nombre: "marciana"},{id:3 , nombre : "roberto"}]




//VARIABLE DONDE SE ENVIARAN LOS DATOS DEL NUEVO HEROE A CREAR ================>

var newHero = {};





// FUNCION PARA BORRAR HEROES ==========>



//FIN FUNCION PARA BORRAR HEROES






/*FUNCION PARA CREAR UN HEROE , LUEGO DE CARGADO SE EJECUTARA LA SEGUNDA FUNCION QUE LO AGREGARA AL ARRAY HERO
O AL JSON UNA VES LO TENGAMOS====================================>  */

const cargando = (hero)=>{
    let id = document.getElementById('id').value;
    let nombre = document.getElementById('nombre').value;
    let alias = document.getElementById('alias').value;
    let bio = document.getElementById('bio').value;
    let enemigos = document.getElementById('enemigos').value;
    let universe = document.getElementById('universe').value;
    if(id === "" || nombre === "" || alias === "" || bio === "" || enemigos === "" || universe === ""){
        alert('Tu Heroe no esta completo!!')
        return false;
    }else{
        let newHero = {
            id: id,
            nombre: nombre,
            alias: alias,
            bio: bio,
            enemigos:enemigos,
            universe:universe
        }
        if(hero.indexOf(newHero) === -1){
            hero.push(newHero);
        } else{
            alert('Ese heroe ya existe!')
        }
    }
}

export default cargando

//FIN FUNCION PARA CREAR UN HEROE============================================================================
/*FUNCION PARA CARGAR EL NUEVO HEROE AL ARRAY HERO , CUANDO TENGAMOS EL JSON SE ENCARAGARA DE CARGARLO AL MISMO
================================>  */