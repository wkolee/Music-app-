

var divs = document.getElementsByTagName('div');
var boxes = document.getElementsByClassName('box');
var app = divs[0];
var controls = divs[1];
var picture = divs[2];

//array with colors in them
var colors = [

   'red', 
   'blue', 
   'green',
    'grey',
    'yellow',
    'brown',
    'purple',
    'black',
    'Maroon',
    'IndianRed',
    'Chartreuse',
    'LightGreen'
    ];

// have window object handle resize event and load event
window.addEventListener("load", flipFlop);
window.addEventListener("resize", flipFlop);


//make a resize handler
function flipFlop(evtObj){
  var winWidth = window.innerWidth;
  var winHeight = window.innerHeight;
  if(winWidth >= winHeight){
    makeHorizontal();
  }
  else{
    makeVertical();
  }
  //--helper functions ---
  function makeVertical(){
    //alert("Gotta make it VERTICAL ||||");
    for(var i= 0; i < boxes.length; i++){
      if(boxes[i].classList.contains("horizontal")){
        boxes[i].classList.remove("horizontal");
      }
      boxes[i].classList.add("vertical")
    }
  }
  function makeHorizontal(){
    //alert("Gotta make it HORIZONTAL ----")
    for(var i=0; i < boxes.length; i++){
      if(boxes[i].classList.contains("vertical")){
        boxes[i].classList.remove("vertical");
      }
      boxes[i].classList.add("horizontal");
    }
  }
}




//HTML element wrapper
function id(idString){
	return document.getElementById(idString);
}
// Gather all the elements
var choices = id("choices");
var pictureFrame = id("pictureFrame");
var songTitle = id("songTitle");
var body = id('tb');


//listen for a change event in the choices element
pictureFrame.addEventListener('mouseover', changeColor);
choices.addEventListener("change", playNewSong);
window.addEventListener("load", function(e){
    adjustRem();
    choices.selectedIndex = 0;
    songTitle.innerHTML = "";
});
window.addEventListener("resize", adjustRem);

//event handler functions below
function adjustRem(e){
    document.documentElement.style.fontSize = (window.innerWidth / 50) + "px";
}
function playNewSong(){
	var index = choices.selectedIndex;	
	showThePicture();
	showTheTitle(); 
	playTheSong();
}
	//---helper functions below----//
	function showThePicture(){
		var index = choices.selectedIndex;
        if(index !== 0){
            //use the index to get the name of the picture
            var pictureFile = songs[index].picture + ".png" && songs[index].picture + ".gif";
            var picturePath = "pictures/" + pictureFile;
            //Set the picture as the background of the frame;
            pictureFrame.style.background = "url(" + picturePath + ") no-repeat center";
            pictureFrame.style.backgroundSize = "contain";
        }
        else{
            pictureFrame.style.background = "black";            
        }
	}
	function showTheTitle(){
		var index = choices.selectedIndex;
        if(index !== 0){

          songTitle.innerHTML = songs[index].song;
        }



            songTitle.innerHTML = songs[index].song;            
        
	}
	function playTheSong(){
		var index = choices.selectedIndex;
		//point the player's scr property to the song's title with .mp3 extention
		//play the player: player.play();
		player.src = "songs/" + songs[index].song + ".mp3";
		player.play();
		autoPlay();		

		
		
	}



function autoPlay(){
	var index = choices.selectedIndex;
    alert(songTitle.innerHTML = songs[index].song);
	


}

//get random color when mouse move over picture frame
function changeColor(){
   var randColor = colors[Math.floor(Math.random()*colors.length)];
   body.style.backgroundColor = randColor;
}


