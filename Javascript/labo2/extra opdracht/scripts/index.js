const setup = () => {
    let aanKnop = document.getElementById('aan');
    let uitKnop = document.getElementById('uit');
    aanKnop.addEventListener('click', aandoen);
    uitKnop.addEventListener('click', uitdoen);
}

const aandoen = () => {
    let style = document.getElementById('style');
    style.className = 'rood';

}

const uitdoen = () => {
    let style = document.getElementById('style');
    style.className = 'niets';
}
window.addEventListener("load", setup); 