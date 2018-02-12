class Song {

  constructor(artist, title){
    this.artist = artist;
    this.title = title;
  }

  getTitle(){
    return "title is: " + this.title + " by " + this.artist;
  }

}

var mySong1 = new Song("Talking Heads", "Psycho Killer");
var mySong2 = new Song("Stevie Wonder", "Higher Ground");

console.log(mySong1.getTitle());
console.log(mySong2.getTitle());

//Exercise:

//Add a method to the Song class that returns the string "title is {title} by {artist}.
//Next, create an instance of it with your favorite Talking Heads song and
//use the method you just created to log the title of the song. Then, 
//create another instance of it with your favorite Stevie Wonder song and
//log the title of the song. Export the class using the es6 export method.
export {Song}