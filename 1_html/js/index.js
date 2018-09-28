/* https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js */

var NUM = 100;
var BS = 20;

var x = [];
var y = [];
var xi = [];
var yi = [];

function setup()
{
  createCanvas(windowWidth,windowHeight);
  background(0);
  init();
}


function draw()
{  
  for(var i=0; i<NUM; i++)
  {
    x[i] += xi[i];
    if(x[i]>width || x[i]<0) { xi[i] *= -1; }
  
    y[i] += yi[i];
    if(y[i]>height || y[i]<0) { yi[i] *= -1; }
  }
  
  background(0);
  
  noStroke();
  for(var i=0; i<NUM; i++)
  {
    fill(255, 0, 0);
    ellipse(x[i], y[i], BS, BS);
  }
  
  fill(255, 255, 255);
  ellipse(x[0], y[0], BS, BS);
  ellipse(x[1], y[1], BS, BS);
  
  stroke(128);
  line(x[0], y[0], x[1], y[1]);
}


function init()
{
  NUM = int(random(20, 100));
  BS = random(5, 40);
  for(var i=0; i<NUM; i++)
  {
    x[i] = random(width);
    y[i] = random(height);
    xi[i] = (random(1)>0.5?1:-1) * random(0.5, 3);
    yi[i] = (random(1)>0.5?1:-1) * random(0.5, 3);
  }
}


function mousePressed()
{
  init();
}

function touchMoved() 
{
  fill(120, 120, 0, 80);
  ellipse(mouseX, mouseY, 300, 300);
  // prevent default
  return false;
}