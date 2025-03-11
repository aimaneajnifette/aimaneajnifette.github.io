const setup = () => {
    let indexOfButton = document.getElementById("indexOf");
    let lastIndexOfButton = document.getElementById("lastIndexOf");

    indexOfButton.addEventListener("click", indexOf);
    lastIndexOfButton.addEventListener("click", lastIndexOf);
}

const indexOf = () => {
    let tekst = "De man van An geeft geen hand aan ambetante verwanten";
    let vinden = "an";
    let aantal = 0;
    let index = tekst.indexOf(vinden);
    while (index !== -1) {
        aantal++;
        tekst = tekst.substring(index+vinden.length);
        index = tekst.indexOf(vinden);
    }
    console.log(aantal)
}

const lastIndexOf = () => {
    let tekst= "De man van An geeft geen hand aan ambetante verwanten";
    let vinden = "an";
    let aantal = 0;
    let index = tekst.lastIndexOf(vinden);
    while (index !== -1) {
        aantal++;
        tekst = tekst.substring(0, index);
        index = tekst.lastIndexOf(vinden);
    }
    console.log(aantal);
}
window.addEventListener("load", setup);