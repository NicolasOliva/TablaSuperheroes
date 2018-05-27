// Get the modal
const modales = document.getElementById('myModal2');

// Get the <span> element that closes the modal
const spans = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
const showModals = () => {
    modales.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
spans.onclick = ()=> {
    modales.style.display = "none";
}


export default show