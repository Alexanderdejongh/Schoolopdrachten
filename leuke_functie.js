const addlandenbutton = () => {
    const getParentDiv = document.getElementById("knoppenbox")
    if (getParentDiv.innerHTML == "") {
        withoutDoubleCountries.forEach(land => {
            const makeButton = document.createElement("button")
            const addButton = getParentDiv.append(makeButton)
            makeButton.className = "knoppen";
            const button = makeButton.innerHTML = land;
        })
    } else if (getParentDiv.innerHTML !== "") {
        getParentDiv.innerHTML = "";
    }
};