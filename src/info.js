const info =(nombre,foto1, info1 ,foto2, info2 ,foto3, info3)=>{
    let modal = document.getElementById('modal2');
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

    modal.innerHTML = htmlTemplate;
    ShowModal();
}