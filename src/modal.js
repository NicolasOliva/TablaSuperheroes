// Get the modal
const modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
const showModal = () => {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = ()=> {
    modal.style.display = "none";
}


export default showModal