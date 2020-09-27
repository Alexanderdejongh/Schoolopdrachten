// Stap 1
function huiswerkMaken(vak, callback) {
    // Stap 4
    setTimeout(() => {
        console.log(`Ok, ok, ik ga nu mijn ${vak} huiswerk maken`);
        callback()
    }, 1000)
}
// Stap 2

function klaarMetHuiswerk() {
    console.log('Kijk Paps / Mams, ik ben klaar met mijn huiswerk!')
};

// Stap 3

huiswerkMaken('wiskunde', klaarMetHuiswerk)