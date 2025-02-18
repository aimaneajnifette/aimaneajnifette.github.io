const setup = () => {
    document.getElementById("btn").addEventListener("click", verander)
}

const verander = () => {
    document.getElementById("txtOutput").innerHTML="Welkom!";
}
window.addEventListener("load", setup); 