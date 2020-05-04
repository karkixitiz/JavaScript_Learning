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

console.log(firstEpisode,secondEpisode,thirdEpisode)