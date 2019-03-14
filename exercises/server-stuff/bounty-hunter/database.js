const uuid = require('uuid')

module.exports = [

 {  
     fName: "Obi-Wan",
     lName: "Kenobi",
     alive: true,
     reward: 4500,
     type: 'Jedi',
     id: uuid.v4()
}, {  
    fName: "Darth",
    lName: "Vader",
    alive: true,
    reward: 6500,
    type: 'Sith',
    id: uuid.v4()
},{  
    fName: "Mace",
    lName: "Windu",
    alive: true,
    reward: 3500,
    type: 'Jedi',
    id: uuid.v4()
},{  
    fName: "Darth",
    lName: "Maul",
    alive: true,
    reward: 2500,
    type: 'Sith',
    id: uuid.v4()
},{  
    fName: "Master",
    lName: "Yoda",
    alive: true,
    reward: 25000,
    type: 'Jedi',
    id: uuid.v4
}
]