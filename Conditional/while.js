//example
let vipStatus = '';

let guest = {
    name: 'Sarah Kate',
    age: 21,
    ticket: true,
    guestType: 'artist'
};

switch (guest.guestType) {
    case 'artist':
        vipStatus = 'Normal';
    case 'star':
        vipStatus = 'Important';
        break;
    case 'presidential':
        vipStatus = 'Mega-important';
        break;
    default:
        vipStatus = 'None';
}
console.log(vipStatus) // Important because of not break in artist

//example
let guestsSeated = 5;

let seatsRemaining = 10;
let guestsRemaining = 7;

while (seatsRemaining > 0 && guestsRemaining > 0) {
    guestsSeated++;
    seatsRemaining--;
    guestsRemaining--;
}
console.log(guestsSeated)
//example
const guests = [
    {
        name: 'Will Alexander',
        vip: false
    },
    {
        name: 'Sarah Kate',
        vip: true
    },
    {
        name: 'Audrey Simon',
        vip: true
    },
    {
        name: 'Tau Perkington',
        vip: false
    }
];

let vips = 0;
let normies = 0;

for (let guest of guests) {
    if (guest.vip) {
        vips++;
    }
}
console.log(vips)
//example
const passengers = [
    'Will Alexander',
    'Sarah Kate',
    'Audrey Simon',
    'Tau Perkington'
];

let passengersBoard = 10;

for (let i in passengers) {
    passengersBoard++;
}
console.log(passengersBoard)


//example
let seatsLeft = 10;
let passengersStillToBoard = 8;

let passengersBoarded = 0;

while (seatsLeft > 0 && passengersStillToBoard > 0) {
    passengersBoarded++; // one passenger boards
    passengersStillToBoard--; // so there is one fewer still to board
    seatsLeft--; // and one fewer seat
}

console.log(passengersBoarded); // prints 8, as there are 8 passengers for 10 seats