const view = document.getElementById('view');
view.addEventListener('click', function(){
    const xhr = new XMLHttpRequest();

    xhr.open('GET', 'data.json', true);

    xhr.onload = function(){
        if (this.status === 200) {
            var viewHeroes = JSON.parse(this.responseText);

            let htmlTemplate = '';
            viewHeroes.forEach((viewHeroes)=>{
                 htmlTemplate += `

                        <th>Nombre</th>
                        <th>Alias</th>
                        <th>Bio</th>
                        <th>Universo</th>
                        <th>Némesis</th>
                        <th>Foto</th>
                        <th>Romance</th>

                <tbody>
                    <tr>
                        <td>${viewHeroes.nombre}</td>
                        <td>${viewHeroes.alias}</td>
                        <td>${viewHeroes.bio}</td>
                        <td>${viewHeroes.universo}</td>
                        <td>${viewHeroes.nemesis}</td>
                        <td>${viewHeroes.foto}</td>
                        <td>${viewHeroes.romance}</td>
    
                    </tr> 
                </tbody>
                `;
            })

            document.getElementById('table').innerHTML = htmlTemplate;
        }
    }
    xhr.send();
});