const setup = () => {
    let btnSubstring = document.getElementById('btnSubstring');
    btnSubstring.addEventListener('click', substring);

}

const substring = () => {
    let txtInput = document.getElementById('txtInput');
    let tekst = txtInput.value;
    let beginwaarde = document.getElementById("beginwaarde");
    let begin = beginwaarde.value;
    let eindwaarde = document.getElementById("eindwaarde");
    let einde = eindwaarde.value;
    let result = tekst.substring(begin, einde);
    console.log(result);
    document.getElementById('resultaat').innerHTML = result;
}
window.addEventListener("load", setup);