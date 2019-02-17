// Let and Const Practice

// const name = "John"
// let age = 101
// const pets = ["cat", "dog"]
// const petName = []

// function runForLoop() {
//     let name;
//     for (let i = 0; i < pets.length; i++) {
//         let pet = {
//             type: pets[i]
//         }
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         pet.name = name;
//         petName.push(pet)
//     }
//     return name
// }

const carrots = ["bright orange", "ripe", "rotten"]

 mapVegetables(arr) => {
    arr.map(carrot => {
        return { type: "carrot", name: carrot }
    })
}

console.log(mapVegetables())