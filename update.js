var heroes = [
    {
        "id" : 1,
        "nombre" : "Batman",
        "alias" : "Bruce Wayne",
        "bio" : "Sus padres fueron asesinados delante de el cuando era un niño. A partir de ese día decidió vivir para combatir al crimen organizado y descubrir quien fue el asesino de sus padres",
        "universo" : "DC",
        "enemigos" : ["Joker","Scarecrow","Dos caras","..."],
        "foto" : "https://png.icons8.com/color/1600/batman.png",
        "romance" : "Gatúbela"
    },
    {
        "id" : 2,
        "nombre" : "Spiderman",
        "alias" : "Peter Parker",
        "bio" : "Fue picado por una araña y ahora posee habilidades arácnidas",
        "universo" : "Marvel",
        "foto" : "https://orig00.deviantart.net/3bd9/f/2017/183/0/7/spider_man_homecoming_icon_by_xanisu-dbete4j.png",
        "enemigos" : ["Duende verde","Venom","Kraven","..."],
        "romance" : "Mary Jane"
    },
    {
        "id" : 3,
        "nombre" : "Spawn",
        "alias" : "Albert Francis Simmons",
        "bio" : "Un Hellspawn es un demonio de naturaleza simbiótica creado con el objetivo a largo plazo de encontrar un comandante perfecto para las tropas del infierno, para enfrentarse a las tropas del cielo en el próximo armagedón.",
        "universo" : "DC",
        "enemigos" : ["Mafia italiana","Malebolgia","Clown/Violator","..."],
        "foto" : "https://png.icons8.com/color/1600/spawn.png",
        "romance" : "Wanda"
    },
    {
        "id" : 4,
        "nombre" : "Superman",
        "alias" : "Clark Kent",
        "bio" : "nació con el nombre de Kal-El en el planeta Krypton; su padre, el científico Jor-El, y su madre Lara Lor-Van, lo enviaron en una nave espacial con destino a la Tierra cuando era un niño, momentos antes de la destrucción de su planeta.",
        "universo" : "DC",
        "foto" : "http://webiconspng.com/wp-content/uploads/2017/09/Superman-PNG-Image-94012.png",
        "enemigos" : "Lex Luthor",
        "romance" : "Lois Lane"
    },
    {
        "id" : 5,
        "nombre" : "Flash",
        "alias" : "Jay Garrick",
        "bio" : "Jay Garrick era un estudiante universitario en 1938 que accidentalmente inhaló vapores de agua pesada después de tomar un descanso para fumar dentro de su laboratorio donde había estado trabajando. Como resultado, descubrió que podía correr a una velocidad sobrehumana y que tenía reflejos igualmente rápidos.",
        "universo" : "DC",
        "foto" : "https://png.icons8.com/metro/1600/the-flash-head.png",
        "enemigos" : ["Weather Wizard","Reverse Flash","..."],
        "romance" : "Dale Arden"
    },
    {
        "id" : 6,
        "nombre" : "Black Panther",
        "alias" : "T'Challa",
        "bio" : "T'Challa obtuvo el título y los atributos de la Pantera Negra al derrotar a los diversos campeones de las tribus de Wakanda. Uno de sus primeros actos fue disolver y exiliar a Hatut Zeraze, la policía secreta de Wakanda, y su líder, su hermano adoptivo Hunter el Lobo Blanco.",
       "universo" : "Marvel",
       "foto" : "http://pluspng.com/img-png/black-panther-png-image-black-panther-png-marvel-cinematic-universe-wiki-fandom-powered-by-wikia-429.png",
       "enemigos" : "Achebe",
       "romance" : "Ororo Munroe/Tormenta"
    }
]

function BuscarID(id){   //se le pasa el json(heroes) y el id que se desea buscar
    let flag = 0;

      for(var i = 0; i < heroes.length && flag == 0; i++){
        if(heroes[i].id == id){
          flag = 1;
          console.log(heroes[i]);
          MostrarHeroe(heroes[i]);
          return heroes[i];
        }
      }
      if (flag == 0){
        alert("Heroe no encontrado");
      }
}

function MostrarHeroe(heroe){  //se le pasa el heroe que se desea mostrar
    debugger
  //Esta funcion modifica el form del update.html con la informacion del heroe seleccionado
  document.getElementById('nombre').value = heroe.nombre;
  document.getElementById('alias').value = heroe.alias;
  document.getElementById('bio').value = heroe.bio;
  document.getElementById('universo').value = heroe.universo;
  document.getElementById('enemigos').value = heroe.enemigos;
  document.getElementById('romance').value = heroe.romance;

}
const editar = (heroeEditado)=>{
    heroes.forEach((element,index) => {
        if(element.id == heroeEditado.id)
            element.nombre = heroeEditado.nombre //ejemplo 1
            heroes[index].nombe = heroeEditado.nombre //ejemplo 2
    });
    
}