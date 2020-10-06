const API_KEY = "998ad3189801c59241f26b8d24d17b0e";
const url = `https://api.themoviedb.org/3/movie/550?api_key=998ad3189801c59241f26b8d24d17b0e`;

const getMovieById = async() => {
    const res = await fetch(url, { method: "GET" });
    const data = await res.json();
    console.log(data);
};
try {
    const res = await fetch(url, { method: "GET" });
    return await res.json();
} catch (error) {
    console.log(error);
}

// // voorbeeld
// const getMovieById = async (movieId) => {
//   // api.themoviedb.org/3/find/tt6105098?external_source=imdb_id&api_key=jouwkeyhier
//   const movieByIDEndpoint = `${base_endpoint}/find/${movieId}?external_source=imdb_id&api_key=${API_KEY}`;
//   try {
//     const res = await fetch(movieByIDEndpoint, { method: "GET" });
//     return await res.json();
//   } catch (error) {
//     console.log(error);
//   }
// };