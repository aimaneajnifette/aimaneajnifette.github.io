const setup = () => {
    let lijst = document.getElementsByClassName('belangrijk')
    for(let i = 0; i < lijst.length; i++) {
        lijst[i].className += ' opvallend'
    }
}
window.addEventListener("load", setup); 