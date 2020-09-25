function searchForFilms(name) {
    // console.log(name);
    return movies.filter((movie) => movie.Title.includes(name));
}

// console.log(movies.filter((movie) => movie.Title.includes("Av")));
// console.log(searchForFilms("Av"));

document.querySelector(".filmzoeker").innerHTML = `
<h1 class="filmzoekerTitle">Filmzoeker</h1>
<ul class="FilmCategorieen">
    <li id="newFilm"><a class="button" href="#">Nieuwste films</a></li>
    <li id="avengersFilm"><a class="button" href="#">Avengers</a></li>
    <li id="xManFilm"><a class="button" href="#">X-Men</a></li>
    <li id="princessFilm"><a class="button" href="#">Princess</a></li>
    <li id="batmanFilm"><a class="button" href="#">Batman</a></li>
</ul>
<div class="userInputBox">
    <input type="text" id=userInput>
    
</div>
`;
/*<input type="submit" id=userClick>*/
function addMovieNumber(movie) {
    document.querySelector(".filmsTitle").innerHTML = `
<h1 class="titleMovies"> We have (${movie.length} movies)</h1>
`;
}

addMovieNumber(movies);

document.querySelector(".filmsContainer").innerHTML = `
${movies.map(addContent).join("")}
`;

// console.log(movieMap);

function addContent(movie) {
    return `<div class="posters">
    <a href="//www.imdb.com/title/${movie.imdbID}/" target="_blank"></a>
    <div class="showWhenHover">
        <h2 class="movieName">${movie.Title}</h2>
        <div class="extra-Info">
            <p class="type">Type:${movie.Type}</p>
            <p class="year">Year:${movie.Year}</p>
        </div>
    </div>
    
    <img class="filmPoster" src="${movie.Poster}">
    
</div> `;
}

// elementByIdFunction("newFilm", niewsteFilms);

// Ik moet de herhaling van deze code nog comprimeren...
// element en eventlistener

const elementByIdFunction = (Id, func) => {
    document.getElementById(Id).addEventListener("click", func);
};

const changeInnerHTML = (filter) => {
    document.querySelector(".filmsContainer").innerHTML = `
${filter.map(addContent).join("")}
`;
    addMovieNumber(filter);
};

// New Movies
const niewsteFilms = movies.filter((movie) => movie.Year <= 2014);

`${elementByIdFunction("newFilm", changeInnerHTML(niewsteFilms))}`;
// opgeschoonde functie
const newFilm = document.getElementById("newFilm");
// const clickNewFilm = newFilm.addEventListener("click", changeInnerHTML(niewsteFilms));

const clickNewFilms = newFilm.addEventListener("click", () => {
    document.querySelector(".filmsContainer").innerHTML = `
${niewsteFilms.map(addContent).join("")}
`;
    addMovieNumber(niewsteFilms);
});

// Avengers
const avengersFilm = document.getElementById("avengersFilm");
const clickAvengersFilm = avengersFilm.addEventListener("click", () => {
    document.querySelector(".filmsContainer").innerHTML = `
${searchForFilms("Av").map(addContent).join("")}
`;
    addMovieNumber(searchForFilms("Av"));
});

// X-Men
const xmenFilm = document.getElementById("xManFilm");
const clickxmenFilm = xmenFilm.addEventListener("click", () => {
    document.querySelector(".filmsContainer").innerHTML = `
${searchForFilms("X-M").map(addContent).join("")}
`;
    addMovieNumber(searchForFilms("X-M"));
});

// Princess
const princessFilm = document.getElementById("princessFilm");
const clickPrincessFilm = princessFilm.addEventListener("click", () => {
    document.querySelector(".filmsContainer").innerHTML = `
${searchForFilms("Princ").map(addContent).join("")}
`;
    addMovieNumber(searchForFilms("Princ"));
});

// Batman
const batmanFilm = document.getElementById("batmanFilm");
const clickBatmanFilm = batmanFilm.addEventListener("click", () => {
    document.querySelector(".filmsContainer").innerHTML = `
${searchForFilms("Bat").map(addContent).join("")}
`;
    addMovieNumber(searchForFilms("Bat"));
});

// const avengersFilm = movies.find((movie) => movie.Title == "Avengers");
// console.log(avengersFilm);

// als je op (kop) Filmzoeker klikt ga je naar de Homepage
const getHomeButton = document.querySelector(".filmzoekerTitle");
const homeButton = getHomeButton.addEventListener("click", () => {
    location.href = "index.html";
});

//
// searchForFilms(unerInput)

const userInput = document.getElementById("userInput");

const getUserInput = userInput.addEventListener("input", () => {
    // const value = event.data;
    const value = userInput.value;
    console.log(value);
    document.querySelector(".filmsContainer").innerHTML = `
${searchForFilms(value).map(addContent).join("")}
`;
    addMovieNumber(searchForFilms(value));
});