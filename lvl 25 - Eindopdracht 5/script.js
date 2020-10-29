// Haal input van je gebruiker binnen
const getUserInputFromDOM = document.querySelector(".input")

// Knop om deze input toe te voegen
const getUserSubmitFromDOM = document.querySelector(".submit")

// Waar de Output in komt
const outputToDo = document.querySelector(".output")

// Laat de Output vanuit de API
const addContentToDom = async() => {
    const GetDataFromAPI = await getAPI()
    GetDataFromAPI.forEach(item => {
        const getID = item._id;
        const getOmschrijving = item.omschrijving;
        createToDoForm(getOmschrijving, getID)
    })
    getDeleteButton().forEach(button => {
        button.addEventListener("click", () => {
            const id = button.parentElement.id;
            console.log(id)
            deleteAPI(id).then(() => {
                location.reload()
            })
        })
    })
    getCompleteButton().forEach(button => {
        button.addEventListener("click", () => {
            const id = button.parentElement.id;
            const getp = button.previousElementSibling;
            const gettext = button.previousElementSibling.textContent;
            putAPI(id, gettext, true).then((data) => {
                console.log(data)
                getp.style.textDecoration = "line-through";
            })
        })
    })
}
addContentToDom()

// Functie die als je op de knop toevoegen drukt de waarde uit de input haalt
const getButton = getUserSubmitFromDOM.addEventListener("click", () => {
    const value = getUserInputFromDOM.value;
    postAPI({ omschrijving: value, done: false }).then(() => {
        outputToDo.innerHTML = "";
        addContentToDom()
    })
})


// functie die de inhoud van de input "vorm geeft"
const createToDoForm = (input, id) => {
    // Box waar de items in kunnen
    const createParentDiv = document.createElement("div");
    createParentDiv.className = "toDoItem";
    createParentDiv.id = id;
    // Text van de gebruiker als title
    const createTitle = document.createElement("p");
    createTitle.innerHTML = input;
    createTitle.className = "titleItem";
    createParentDiv.appendChild(createTitle)
        // knop voor gedaan en om het item te verwijderen
    createParentDiv.innerHTML += `
    <svg class="iconComplete" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check" class="svg-inline--fa fa-check fa-w-16" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path fill="currentColor" d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"></path></svg>
    <svg class="iconDelete" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="trash-alt" class="svg-inline--fa fa-trash-alt fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M32 464a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128H32zm272-256a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zm-96 0a16 16 0 0 1 32 0v224a16 16 0 0 1-32 0zM432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16z"></path></svg>
    `;
    // Output
    outputToDo.append(createParentDiv)
}


// Voltooien of verwijder Knoppen functies
const getDeleteButton = () => {
    const getButton = document.querySelectorAll(".iconDelete")
    return getButton
}

const getCompleteButton = () => {
    const getButton = document.querySelectorAll(".iconComplete")
    return getButton
}