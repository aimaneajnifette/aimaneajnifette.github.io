const setup = () => {
    let buttons = document.getElementsByTagName('button');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', (e) => {
            buttons[i].classList.toggle('change');
        }
        )
    }
}

window.addEventListener("load", setup); 