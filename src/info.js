const info =(id)=>{
    Api("GET","data.json")
        .then((heroes) => {
            if(heroes){
                heroes.forEach((element) => {
                    if(element.id == id){
                        MostrarHeroe(element);                       
                  }
                });
            }
        })
        .catch((error) =>{
            alert("Error al buscar la informacion");
        })
};


const MostrarHeroe = (heroe)=>{
    let nombre = heroe.nombre;
    let foto1 = heroe.foto[1];
    let foto2 = heroe.foto[2];
    let foto3 = heroe.foto[3];
    let info1 = heroe.informacion[0];
    let info2 = heroe.informacion[1];
    let info3 = heroe.informacion[2];

    const htmlTemplate = `
    <div>
        <h2>${nombre}</h2>
    </div>
    <div>
        <div>
        <img src="${foto1}"></img>
        <p>${info1}</p>
        </div>
        <div>
        <p>${info2}</p>
        <img src="${foto2}"></img>
        </div>
        <img src="${foto3}"></img>
        <p>${info3}</p>
        <div
        ></div>
    </div>
    `;

    const modal = document.getElementById('modal2');
    modal.innerHTML = htmlTemplate;
}