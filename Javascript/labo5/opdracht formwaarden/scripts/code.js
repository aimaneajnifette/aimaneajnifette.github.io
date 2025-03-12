const setup = () => {
    let btnResultaat = document.getElementById('btnResultaat');
    btnResultaat.addEventListener('click', toonResultaat);
}

const toonResultaat = () => {
    let roker = document.getElementById('roker');
    if (roker.checked) {
        console.log("hij is een roker");
    } else {
        console.log("hij is geen roker");
    }
}
window.addEventListener("load", setup); 