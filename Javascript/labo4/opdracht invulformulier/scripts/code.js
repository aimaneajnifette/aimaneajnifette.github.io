const setup = () => {
    let btnSubmit = document.getElementById('btnSubmit')
    btnSubmit.addEventListener('click', aanroepen);
}

const aanroepen = () => {
    let textInput = document.getElementById("textInput").value;
    let result = metSpaties(textInput);
    console.log(result);
}
const metSpaties = (inputText) => {
    let result="";
    for(let i = 0; i < inputText.length; i++) {
        result += inputText.charAt(i) + " ";
    }
    return result;
}
window.addEventListener("load", setup);