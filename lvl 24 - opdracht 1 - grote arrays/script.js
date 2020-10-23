// Functie die knoppen aanmaakt
const createButton = (addinnerHTML) => {
    const makeButton = document.createElement("button")
    const getParentDiv = document.querySelector(".dataFromJS")
    const addButtontoDom = getParentDiv.appendChild(makeButton)
    addButtontoDom.className = addinnerHTML;
    makeButton.innerHTML = addinnerHTML;
}

// Output
const output = document.querySelector(".output")

// getElement
const getElement = (id) => {
    return document.querySelector(id);
};

// Eventlistners
const addEventListenerfunc = (button, func) => {
    return button.addEventListener("click", func);
};



// ___________________________________________________________________________________

// Subopdracht: landenlijst
// creeer de knop
createButton("Landenlijst")

// inporteerd de knop
const getLandenButton = getElement(".Landenlijst")

// output.
const addLandenContentToDom = () => {
    output.innerHTML = `${getPersons}`;
};

// Filteren op
const getRegion = randomPersonData.map(countries => countries.region)
const withoutDoubleCountries = [...new Set(getRegion)];
const getPersons = withoutDoubleCountries.map(addContentForCountry).join("")


// innerHTML
function addContentForCountry(data) {
    return `<div class="Landenbox">
        <p>${data}</p>
    </div> `;
}

// EventListener
addEventListenerfunc(getLandenButton, addLandenContentToDom)

// _________________________________________________________________________________

// Subopdracht: steenbokvrouwen
// creeer de knop
createButton("Steenbokvrouwen")

// inporteerd de knop
const getSteenbokvrouwen = getElement(".Steenbokvrouwen")

function compareFunction(a, b) {
    console.log(a.name)
    return a.name - b.name;
}

// Filteren op
const getGender = randomPersonData.filter((person) => {
    return person.gender === "female";
});
const vrouwenDertigPlus = getGender.filter(person => {
    return person.age >= 30;
});
const steenbokvrouw30plus = vrouwenDertigPlus.filter(capricorn => {
    if (capricorn.birthday.mdy.split("/", 1) == "12" &&
        capricorn.birthday.dmy.split("/", 1) >= "22" ||
        capricorn.birthday.mdy.split("/", 1) == "01" &&
        capricorn.birthday.dmy.split("/", 1) <= "19") {
        return capricorn;
    };
}).sort((a, b) => b.name.localeCompare(a.name, 'es', { ignorePunctuation: true }));

// console.log(steenbokvrouw30plus)
const getSteebbok = steenbokvrouw30plus.map(addContentSteenbokvrouwen).join("")

// output.
const addsteenbokvrouw = () => {
    output.innerHTML = `${getSteebbok}`;
};

// innerHTML
function addContentSteenbokvrouwen(data) {
    return `<div class="VrouwenBox">
        <img class="picture" src="${data.photo}">    
        <p>Name: ${data.name} ${data.surname}</p>
    </div> `;
}

// EventListener
addEventListenerfunc(getSteenbokvrouwen, addsteenbokvrouw)

// _________________________________________________________________________________
// Subopdracht: ouwe creditcards
// creeer de knop
createButton("ouwe-creditcards")

// inporteerd de knop
const getouweCreditcards = getElement(".ouwe-creditcards")

// Filteren op
const getCreditCard = randomPersonData.filter((person => person.age >= 18))
    .filter((expiredCreditCard) => {
        const dateThisYear = new Date().getFullYear(); //* 2020.
        const dateNextYear = new Date().getFullYear() - 1999; //* 21.
        const expirationDate = expiredCreditCard.credit_card.expiration.split("/");
        if (expirationDate[1] == dateThisYear || expirationDate[1] == dateNextYear) {
            return expiredCreditCard;
        }
    })
    .sort((expirationDateOne, expirationDateTwo) => expirationDateOne.credit_card.expiration.split("/")[0] - expirationDateTwo.credit_card.expiration.split("/")[0]);

const mapCreditcard = getCreditCard.map(addContentouwCreditcards).join("")

// output.
const addCreditCardContent = () => {
    output.innerHTML = `${mapCreditcard}`;
};

// innerHTML
function addContentouwCreditcards(data) {
    return `<div class="Creditcard">
        <h2 class="Title">${data.credit_card.number}</h2>
        <p>Name: ${data.name} ${data.surname}</p>
        <p>Phone: ${data.phone}</p>
        <p>Expiration: ${data.credit_card.expiration}</p>
    </div> `;
}

// EventListener
addEventListenerfunc(getouweCreditcards, addCreditCardContent)

// _________________________________________________________________________________
// Subopdracht: meeste mensen
// creeer de knop
createButton("DeMeesteMensen")

// inporteerd de knop
const getDeMeesteMensen = getElement(".DeMeesteMensen")

// // Filteren op

const countRegions = getRegion.reduce((land, aantalPersonen) => {
    let count = land[aantalPersonen];
    land[aantalPersonen] = count === undefined ? 1 : ++count;
    return land;
}, {});

const sortCountryRegons = Object.entries(countRegions)
const createContentCountedCountries = sortCountryRegons
    .sort(compareFunction)
    .map(addCountofCountry)

function compareFunction(a, b) {
    return a[1] - b[1];
}

// innerHTML
function addCountofCountry(key) {
    return `<div class="Landenbox">
        <p>${key[1]} personen uit <b>${key[0]}</b> </p> 
    </div> `;
}

// output.
const addCountedCountriesContent = () => {
    output.innerHTML = `${createContentCountedCountries}`;
};

// EventListener
addEventListenerfunc(getDeMeesteMensen, addCountedCountriesContent)

// _________________________________________________________________________________
// Subopdracht: gemiddelde leeftijd
// Maak een knop
createButton("gem_leeftijd_perland")

// inporteerd de knop
const getGemiddeldeLeeftijd = getElement(".gem_leeftijd_perland")

// _______________________________

// output.

const getParentDiv = document.getElementById("knoppenbox")
withoutDoubleCountries.forEach(land => {
    const makeButton = document.createElement("button")
    const addButton = getParentDiv.append(makeButton)
    makeButton.className = "knoppen";
    const button = makeButton.innerHTML = land;
})


const laatKnoppenzienofNiet = () => {
    if (getParentDiv.style.display == "none") {
        getParentDiv.style.display = "grid";
    } else if (getParentDiv.style.display != "none") {
        getParentDiv.style.display = "none"
    }
}

// Knoppen aanmaken in de DOM
addEventListenerfunc(getGemiddeldeLeeftijd, laatKnoppenzienofNiet)

// ___________________________
// Haal alle knoppen op
const alleLandenKnoppen = document.querySelectorAll(".knoppen");
const landKnop = document.querySelector(".knoppen");


// maakt een functie die het aantal personen per land keer de leeftijd

// en dan de uitkomst deelt door het aantal personen in dat land!

const watGebeurter = alleLandenKnoppen.forEach(button => {
    button.addEventListener("click", () => {
        let totalAge = '';
        randomPersonData.map(person => {
            if (button.innerText == person.region) {
                totalAge += `${person.age},`;
            }
        })
        const arrayofTotalAge = totalAge.split(",")
        arrayofTotalAge.splice(-1, 1)
        const totalAgenumber = arrayofTotalAge.map(num => {
            return Number(num)
        })
        const totaleLeeftijd = totalAgenumber.reduce(sum, 0);
        const gemiddeldeLeeftijd = Math.floor(totaleLeeftijd / totalAgenumber.length)
        console.log(gemiddeldeLeeftijd)
        output.innerHTML = `<p>De gemiddelde persoon in ${button.innerText} is ${gemiddeldeLeeftijd} oud</p>
    </div>`;
    })
})

// Alle personen filteren
// somMaker
function sum(accumulator, value) {
    return accumulator + value;
}