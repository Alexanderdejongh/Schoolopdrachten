// Documentatie: https://github.com/vasanthv/jsonbox#readme
// Opdracht https://board.wincacademy.nl/unit/view/id:5313

const basicUrl = "https://jsonbox.io/box_009bc53c7821e76a244b/";

const getAPI = async() => {
    try {
        const getData = await fetch(basicUrl, {
            method: "GET",
        })
        const result = await getData.json();
        let createData = Object.keys(result).map((key) => ({
            _id: result[key]._id,
            omschrijving: result[key].omschrijving,
            done: result[key].done,
        }));
        return createData;
    } catch (err) {
        console.log("Can not make a Get request");
    }
}


// Functie die de ToDo's Post op de JSon
const postAPI = async(data) => {
    try {
        const getData = await fetch(basicUrl, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            },
        });
        return await getData.json()
    } catch (err) {
        console.log("Can not make a Post request");
    }
}

// functie die de gepostte informatie weer verwijdert
const deleteAPI = async(id) => {
    try {
        const getData = await fetch(basicUrl + id, {
            method: "DELETE",
        });
    } catch (err) {
        console.log("Can not Delete this item!");
    }
}

// functie die een put request maakt
const putAPI = async(id, descValue, doneValue) => {
    try {
        const getData = await fetch(basicUrl + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                omschrijving: descValue,
                done: doneValue,
            }),
        }).then();
        console.log(getData)
        return await getData.json();
    } catch (err) {
        console.log("Can not update this item!");
    }
}