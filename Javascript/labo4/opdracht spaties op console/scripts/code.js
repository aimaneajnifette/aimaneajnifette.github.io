const setup = () => {
    let btnSubmit = document.getElementById("btnSubmit");
    btnSubmit.addEventListener("click", toConsole);
}

const toConsole = () => {
    let Input = document.getElementById("textInput").value;
    let Output = ""
    for(let i = 0; i < Input.length; i++) {
        Output += Input.charAt(i) + " ";
    }
    console.log(Output);
}
window.addEventListener("load", setup);