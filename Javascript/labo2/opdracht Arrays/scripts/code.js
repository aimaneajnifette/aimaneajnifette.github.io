const setup = () => {
    let familie = ['a', 'b', 'c', 'd', 'e'];
    console.log(familie.length);
    for (let i = 0; i < familie.length; i+=2) {
        console.log('familielid ' + familie[i]);
    }
    voegNaamToe(familie)

    for (let i = 0; i < familie.length; i++) {
        console.log('familielid ' + familie[i]);
    }
    console.log(familie.join(' - '));
}

const voegNaamToe = (leden) => {
    let naam = prompt('Geef een extra naam in:', null);
    leden.push(naam);
}
window.addEventListener("load", setup); 