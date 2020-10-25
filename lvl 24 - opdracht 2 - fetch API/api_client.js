// Pokemons
// https://pokeapi.co/api/v2/pokemon/
const basicUrl = "https://pokeapi.co/api/v2/pokemon/";

const getAPI = async(pokemon) => {
    try {
        const getData = await fetch(`${basicUrl}${pokemon}`)
            .then(resp => {
                const responsJSon = resp.json()
                    .then(data => {
                        // console.log(data)
                        return data
                    });
                return responsJSon
                    // console.log(responsJSon)
            })
        return getData
    } catch {}
}