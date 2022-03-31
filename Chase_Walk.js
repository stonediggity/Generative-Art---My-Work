//Chase and plot logic...

//Idea is to use the random walker concept but to have a "chaser" that is following the random walker.

//First define canvas width and height and then define the start locations for the walker and chaser

width = 400;
height = 400;

var walker = [width/4, height/4]

var chaser = [3*width/4, 3*height/4];

function setup() {
  createCanvas(width, height)
  background(51);
}

function draw() {
  
  stroke(255)
  strokeWeight(2)
  point(x,y)
  
  var r= floor(random(4))
  
  switch(r) {
    case 0:
       x = x + 1;
      break;
      case 1:
      x = x -1;
      break;
      case 2:
      y = y+1;
      break;
      case 3: 
      y = y -1;
      break;
      
      
  }
}





//Just chase logic only (work in progress)
var walker;

var chaser;

let distanceToChaserList = [];

var distanceToChaser;

width = 200;
height = 200;
walker = [width/4, height/4];
chaser = [3*width/4, 3*height/4];
distanceToChaserList.push(Math.sqrt(((walker[0]-chaser[0])**2) + ((walker[1] - chaser[1])**2)));

// console.log(walker)
// console.log(chaser)
// console.log(distanceToChaserList)

//First selet the random path variable

//define the distance array for each possible outcome

for (var i = 0; i<10; i++){
    walkerPath = (Math.floor(Math.random()*4))
    console.log(walkerPath)
    
    switch(walkerPath) {
        case 0:
          walker[0] = walker[0] + 1;
          break;
          case 1:
          walker[0] = walker[0] -1;
          break;
          case 2:
          walker[1] = walker[1]+1;
          break;
          case 3: 
          walker[1] = walker[1] -1;
          break;
    }
    
    console.log(walker)
    distanceToChaser = Math.sqrt((walker[0]-chaser[0])**2) + ((walker[1] - chaser[1])**2);
    
    console.log(distanceToChaser)
    
    if (distanceToChaser > distanceToChaserList.slice(-1)) {
        console.log("You are getting away!")
    }
    
    distanceToChaserList.push(distanceToChaser)
    }
console.log(distanceToChaserList)
