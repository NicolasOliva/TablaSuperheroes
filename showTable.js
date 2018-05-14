const view = () =>{
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);

    xhr.onload = function(){
        if (this.status === 200) {
            var viewHeroes = JSON.parse(this.responseText);

            let htmlTemplate = `                        
                <th>Nombre</th>
                <th>Alias</th>
                <th>Bio</th>
                <th>Universo</th>
                <th>Némesis</th>
                <th>Foto</th>
                <th>Romance</th>
                <th>Accion</th>`;
            viewHeroes.forEach((viewHeroes)=>{
                 htmlTemplate += `
                <tbody>
                    <tr>
                        <td>${viewHeroes.nombre}</td>
                        <td>${viewHeroes.alias}</td>
                        <td>${viewHeroes.bio}</td>
                        <td>${viewHeroes.universo}</td>
                        <td>${viewHeroes.nemesis}</td>
                        <td><img src="${viewHeroes.foto}" alt="Smiley face" height="42" width="42"></td>
                        <td>${viewHeroes.romance}</td>
                        <td><button onclick=borrarHeroe(${viewHeroes.id})>Editar</button><button onclick=borrarHeroe(${viewHeroes.id})>Borrar</button></td>
                    </tr> 
                </tbody>
                `;
            })

            document.getElementById('table').innerHTML = htmlTemplate;
        }
    }
    xhr.send();
};
view();