let guests=['kiran','ramu','sangam']
guests.unshift('deepak')//push,unshift,pop
guests.pop() //remove last element from list
console.log(guests)
console.log('Number of guests '+ guests.length)

class Episode{
	constructor(title,duration,hasBeenWatched){
		//using this keyword assigns the received arguments to the corresponding fields in new instance
		this.title=title,
		this.duration=duration,
		this.hasBeenWatched=hasBeenWatched
	}
}

//Create instance
let firstEpisode=new Episode('firstEpisode',20,true)
let secondEpisode=new Episode('secondEpisode',30,false)
let thirdEpisode=new Episode('thirdEpisode',40,true)


let episodes=[]
episodes.push(firstEpisode,secondEpisode,thirdEpisode,thirdEpisode)
console.log(episodes)
console.log('Number of episode before POP '+ episodes.length)
episodes.pop()
console.log('Number of episode after POP '+ episodes.length)