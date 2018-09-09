


function setup() {

  myCanvas = createCanvas(windowWidth, windowHeight);

  push();
  rectMode(CENTER);
  stroke(0);
  translate(900,200);
  fill(0);
  rotate(-PI/4);
  rect(-70,-80,10,50);
  pop();   //spoon

  strokeWeight(2);
  fill(255);
  triangle(1000,100,1000,300,800,300);
  triangle(800,320,1000,320,800,520);
  triangle(1000,350,1000,550,800,550); // upper shape
  
  noFill();
  strokeWeight(1);
  for(var i = 0; i < 200; i+=20){
  	triangle(800,300,800+i,300-i,800+i,300);
  }
  for(var i = 0; i < 200; i+=5){
  	triangle(800,520,800,520-i,800+i,520-i );
  }
  for(var i = 0; i < 200; i+=3){
  	triangle(1000,550,1000,550-i,1000-i,550);
  }
  for(var i = 0; i < 200; i+=10){
  	for(var j = 0; j <160; j+=10){
  		rect(800+i,570+j,10,10);   
  	}
  }                                  //lines
 
  fill(255);
  noStroke();
  triangle(800,570,800,810,860,810);
  triangle(1001,570,1001,810,941,810);
  noFill();
  stroke(0);
  strokeWeight(2);
  triangle(800,570,1000,570,900,970); //lower shaper and fill

  // // strokeWeight(1.5);
  // // fill(255);
  // // ellipse(875,766+20,15,20);
  // // ellipse(925,766+20,15,20);
  // noFill();
  // ellipse(900,800+20,30,20);
  // ellipse(900,800+20,30,50);
  // rectMode(CENTER);
  // noStroke();
  // fill(255);
  // rect(900,787.5+20,37,26);   //paper

  

}




