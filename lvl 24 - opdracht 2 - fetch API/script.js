// Output
const output = document.querySelector(".output")

// Creer knop
const createButton = (addinnerHTML, className) => {
    const makeButton = document.createElement("button")
    makeButton.style.display = "block"
    const addButtontoDom = output.appendChild(makeButton)
    addButtontoDom.className = className;
    makeButton.innerHTML = addinnerHTML;
}

// Creer knop2
const createButton2 = (addinnerHTML, className) => {
    const makeButton = document.createElement("button")
    const addButtontoDom = createParentDiv.appendChild(makeButton)
    addButtontoDom.className = className;
    makeButton.innerHTML = addinnerHTML;
}

// getElement
const getElement = (id) => {
    return document.querySelector(id);
};

// Eventlistners
const addEventListenerfunc = (button, func) => {
    return button.addEventListener("click", func);
};

createButton("Klik om de app te openen", "openButton")

const getStartButton = getElement(".openButton")

const createParentDiv = document.createElement("div")
createParentDiv.className = "buttonbox";
const sytleOfbox = createParentDiv.style.display = "none";
const addNewDiv = output.append(createParentDiv)
const pokemonHarizard = createButton2("charizard", "pokemon")
const pokemonVenusaur = createButton2("venusaur", "pokemon")
const pokemonBlastoise = createButton2("blastoise", "pokemon")
const pokemonButterfree = createButton2("butterfree", "pokemon")
const pokemonPidgeotto = createButton2("pidgeotto", "pokemon")


// innerHTML
function choosYourPokemon() {
    document.querySelector(".openButton").style.display = "none"
    createParentDiv.style.display = "block";
}

// eventlistener
addEventListenerfunc(getStartButton, choosYourPokemon)

// Knoppen
const getPokemonButton = document.querySelectorAll(".pokemon")
    // console.log(getPokemonButton)


const actOnButtonClick = getPokemonButton.forEach((button) => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;
        const getPokemonbyButton = getAPI(buttonValue)
        output.style.height = "50vh"
        getPokemonbyButton.then(data => {
            const dataOfAPI = Array(data)
            dataOfAPI.map(data => {
                outputPokemons.innerHTML = `<div class="pokemonCard">
        <div class="name_HP">
        <h2 class="name">${data.name}</h2>
        <h2 class="HP">HP:${data.stats[0].base_stat}</h2>
        </div>
        <div class="plaatjeBox">
        <img src="${data.sprites.front_default}"class="plaatje">
        </div>
        <p><b>Weight:</b> ${data.weight}</p>
    </div>`
            })
        })
    })
})

// Output Pokemons
const outputPokemons = getElement(".pokemons")