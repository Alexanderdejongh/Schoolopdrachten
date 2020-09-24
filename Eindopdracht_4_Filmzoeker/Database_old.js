/*

< ---- first try ---- >

// functie die de posters presenteert in de div (filmsContainer)
// Div waar de posters gepresenteerd moeten worden
const filmsContainer = (document.querySelector(
    ".filmsContainer"
).innerHTML = `${postersUrl}`);

const postersUrl = movies.map((posters) => {
    return posters.Poster;
});

const putPosterInHTML = postersUrl.forEach(() => {
    const newDiv = document.createElement("div");
    for (let i = 0; i < postersUrl.length; i++) {
        // gemaakte div per poster
        filmsContainer.appendChild(newDiv);
        newDiv.style.backgroundImage = [i];
    }
});

console.log(putPosterInHTML);

const movieNames = movies.map((names) => {
    return names.Title;
});

// console.log(movieNames);

*/