const passengers = [
    {
        name: 'Will Alexander',
        ticketNumber: 209542
    },
    {
        name: 'Sarah Kate',
        ticketNumber: 169336
    },
    {
        name: 'Audrey Simon',
        ticketNumber: 779042
    },
    {
        name: 'Tau Perkington',
        ticketNumber: 703911
    }
]

for(let passanger of passengers){
	console.log('Boarding passanger '+passanger.name+ 'With Ticklet Number '+passanger.ticketNumber)
}
