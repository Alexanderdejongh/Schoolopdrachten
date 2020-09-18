const superPowes = [{
        name: "Batman",
        publisher: "DC Comics",
        alter_ego: "Bruce Wayne",
        first_appearance: "Detective Comics #27",
        weight: "210",
    },
    {
        name: "Superman",
        publisher: "DC Comics",
        alter_ego: "Kal-El",
        first_appearance: "Action Comics #1",
        weight: "220",
    },
    {
        name: "Flash",
        publisher: "DC Comics",
        alter_ego: "Jay Garrick",
        first_appearance: "Flash Comics #1",
        weight: "195",
    },
    {
        name: "Green Lantern",
        publisher: "DC Comics",
        alter_ego: "Alan Scott",
        first_appearance: "All-American Comics #16",
        weight: "186",
    },
    {
        name: "Green Arrow",
        publisher: "DC Comics",
        alter_ego: "Oliver Queen",
        first_appearance: "All-American Comics #16",
        weight: "195",
    },
    {
        name: "Wonder Woman",
        publisher: "DC Comics",
        alter_ego: "Princess Diana",
        first_appearance: "The Incredible Hulk #180",
        weight: "165",
    },
    {
        name: "Blue Beetle",
        publisher: "DC Comics",
        alter_ego: "Dan Garret",
        first_appearance: "Mystery Men Comics #1",
        weight: "145",
    },
    {
        name: "Spider Man",
        publisher: "Marvel Comics",
        alter_ego: "Peter Parker",
        first_appearance: "Amazing Fantasy #15",
        weight: "167",
    },
    {
        name: "Captain America",
        publisher: "Marvel Comics",
        alter_ego: "Steve Rogers",
        first_appearance: "Captain America Comics #1",
        weight: "220",
    },
    {
        name: "Iron Man",
        publisher: "Marvel Comics",
        alter_ego: "Tony Stark",
        first_appearance: "Tales of Suspense #39",
        weight: "250",
    },
    {
        name: "Thor",
        publisher: "Marvel Comics",
        alter_ego: "Thor Odinson",
        first_appearance: "Journey into Myster #83",
        weight: "200",
    },
    {
        name: "Hulk",
        publisher: "Marvel Comics",
        alter_ego: "Bruce Banner",
        first_appearance: "The Incredible Hulk #1",
        weight: "1400",
    },
    {
        name: "Wolverine",
        publisher: "Marvel Comics",
        alter_ego: "James Howlett",
        first_appearance: "The Incredible Hulk #180",
        weight: "200",
    },
    {
        name: "Daredevil",
        publisher: "Marvel Comics",
        alter_ego: "Matthew Michael Murdock",
        first_appearance: "Daredevil #1",
        weight: "200",
    },

    {
        name: "Silver Surfer",
        publisher: "Marvel Comics",
        alter_ego: "Norrin Radd",
        first_appearance: "The Fantastic Four #48",
        weight: "unknown",
    },
];

// Map, Filter, Reduce

// _________________________________________________________________

// 1

const namesOfSuperPowers = superPowes.map((item) => {
    return item.name;
});

// console.log(namesOfSuperPowers);

// _________________________________________________________________

// 2

const findLightSuperPowers = superPowes.filter((item) => {
    return item.weight <= Number(190);
});

const namesLightSuperPowers = findLightSuperPowers.map((item) => {
    return item.name;
});

// console.log(namesLightSuperPowers);

// _________________________________________________________________

// 3

const find200PoundSuperPowers = superPowes.filter((item) => {
    return item.weight == Number(200);
});

const found200oundSuperPowers = find200PoundSuperPowers.map((item) => {
    return item.name;
});

// console.log(found200oundSuperPowers);

// _________________________________________________________________

// 4

// frist_appearance

const fristAppearance = superPowes.map((item) => {
    for (i = 0; i < superPowes.length; i++) {
        return (
            "Superhero [" +
            item.name +
            "]" +
            " in de Film" +
            "[" +
            item.first_appearance +
            "]"
        );
    }
});

// console.log(fristAppearance);

// _________________________________________________________________

// 5

// Maak een array met alle superhelden van DC Comics

const deComics = superPowes.filter((item) => item.publisher === "DC Comics");
const deMarvels = superPowes.filter(
    (item) => item.publisher === "Marvel Comics"
);

// const deComics = superPowes.filter((item) => {
//     if (item.publisher === "DC Comics") {
//         return item.name + "is at DC Comics";
//     }
// });

// const dcComics = superPowes.map((item) => {
//     for (i = 0; i < superPowes.length; i++) {
//         if (item.publisher === "DC Comics") {
//             return item.name + "is at DC Comics";
//         } else if (item.publisher !== "DC Comics") {
//             // return "                [" + item.name + "]" + "is not at DC Comics";
//         }
//     }
// });
// console.log(deMarvels);

// const dcComics2 = superPowes.map((item) => {
//     if ("DC Comics" === item.publisher) {
//         return item.name + "is at " + item.publisher;
//     }
// });

// const dcComics = superPowes.map((item) => {
//     if ("DC Comics" === item.publisher) {
//         console.log(Array(item.name, "is at ", item.publisher));
//     } else if ("DC Comics" !== item.publisher) {
//         console.log(item.name, "is not at DC Comics, but at ", item.publisher);
//     }
// });

// const dcComics = superPowes.map((item) => {
//     for (i = 0; i < superPowes.length; i++) {
//         if ("DC Comics" === item.publisher) {
//             return Array(item.name, "is at ", item.publisher);
//         } else if ("DC Comics" !== item.publisher) {
//             superPowes.shift(item);
//         }
//     }
// });

// console.log(dcComics);
// undefined
// const dcComics = superPowes.forEach((item) => {
//     if (item.publisher === "DC Comics") {
//         return item.name + "is at " + item.publisher;
//     }
// });

// console.log(deComics, deMarvels);

// _________________________________________________________________

// 6

// Tel het gewicht van alle superhelden van DC Comics bij elkaar op..

const theComicsWeight = deComics.map((item) => {
    return Number(item.weight);
});

const totalWeightComics = theComicsWeight.reduce(sum, 0);

// const lookingForUnkownWeight = deMarvels.filter(
//     (item) => item.weight === "unknown"
// );

// const popUnknownWeight = lookingForUnkownWeight.pop();

const deKnownMarvelsWeiht = deMarvels.filter(
    (item) => item.weight !== "unknown"
);

const deMarvelsWeight = deKnownMarvelsWeiht.map((item) => {
    return Number(item.weight);
});

const totalWeightMarvels = deMarvelsWeight.reduce(sum, 0);

function sum(accumulator, value) {
    return accumulator + value;
}

// console.log(totalWeightMarvels);

// _________________________________________________________________

// 8

// Bonus: zoek de zwaarste superheld!

const deKnownWeihtOfAall = superPowes.filter(
    (item) => item.weight !== "unknown"
);

const totalWeight = deKnownWeihtOfAall.map((item) => {
    return Number(item.weight);
});

// function findMaxWeight(acc, val) {
//     if (val > acc) {
//         return acc;
//     }
// }

// const findedMaxWeight = totalWeight.reduce(findMaxWeight);

const shortcutFindedMaxWeight = totalWeight.reduce((a, b) => (a > b ? a : b));
console.log(shortcutFindedMaxWeight);