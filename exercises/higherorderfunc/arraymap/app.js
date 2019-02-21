//Problem 1
// var numbers = [2,3,4,8,10]

// var doubles = numbers.map(function(double){
//     return double * 2
// })

// console.log(doubles);

//Problem 2

// var numbers = [1,2,3,4,5, 100]

// var changingToStrings = numbers.map(function(number){
//     return number.toString()
// })

// console.log(changingToStrings);

// Problem 3

// var names = ["danny", "tiffany", "bill", "kyle", "eric"]

// var bigNames = names.map(function(name){
//     return name.charAt(0).toUpperCase() + name.slice(1); //you can also do [0] instead of charAt(0)
// })

// console.log(bigNames);

//Problem 4

// var names = [
//     {
//         name: 'Dna',
//         age: 5
//     },
//     {
//         name: 'Homie G',
//         age: 20
//     },
//     {
//         name: 'Tigo',
//         age: 25
//     }
// ]

// var justNames = names.map(function(name){
//     return name.name
// })

// console.log(justNames);

//Problem 5

// var people = [
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]

// var canGoIn = people.map(function(person){
//     if(person.age >= 18){
//         return person.name + " you can go in!"
//     } else{
//         return person.name + " Go away!"
//     }
// })

// console.log(canGoIn);

var humans = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

var humansHTML = humans.map(function(human) {
    return `<h1> ${human.name} </h1>` + ` <h2>${human.age}</h2>`
})

console.log(humansHTML);