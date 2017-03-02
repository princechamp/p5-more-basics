var  a = 50;
var b = 50;
var newHeight = 50;
var newWidth = 50;

function setup(){
    createCanvas(600,400);
    background(50);
    a=50;
    b=50;
}

function draw(){
    // background(50);
    if (mouseIsPressed) { 
        noStroke();
        fill(150,0,255,50)
        ellipse(mouseX,mouseY,newWidth,newHeight);
        
    }
  
    
}