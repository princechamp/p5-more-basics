var  a = 50;
var b = 50;
var newHeight = 75;
var newWidth = 40;

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
        fill(150,0,25,150)
        rect(mouseX,mouseY,newWidth,newHeight);
        
    }
  
    
}