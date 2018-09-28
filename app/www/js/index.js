/* https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.6.1/p5.min.js */

var NUM = 100;
var BS = 20;
var bcolor;

var x = [];
var y = [];
var xi = [];
var yi = [];


function setup()
{
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  init();
  bcolor = color(255, 80, 80);
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
    fill(bcolor);
    ellipse(x[i], y[i], BS, BS);
  }
  
  var d = dist(x[0], y[0], x[1], y[1]);
  if(d<BS*10)
  {
    stroke(255);
    strokeWeight(1);
    line(x[0], y[0], x[1], y[1]);
  }
  
  if(d<BS*6)
  {
    if(d<BS*4)
    {
      fill(255, 0, 0, 60);
      noStroke();
    }
    else
    {
      fill(255, 255, 0, 60);
      noStroke();
    }
    
    ellipse(x[0], y[0], BS*1, BS*1);
    ellipse(x[0], y[0], BS*2, BS*2);
    ellipse(x[0], y[0], BS*3, BS*3);
    ellipse(x[0], y[0], BS*4, BS*4);
    
    ellipse(x[1], y[1], BS*1, BS*1);
    ellipse(x[1], y[1], BS*2, BS*2);
    ellipse(x[1], y[1], BS*3, BS*3);
    ellipse(x[1], y[1], BS*4, BS*4);
    
  }
  
  fill(255, 255, 255);
  ellipse(x[0], y[0], BS, BS);
  ellipse(x[1], y[1], BS, BS);
}


function init()
{
  NUM = int(random(20, 100));
  BS = random(10, 50);
  bcolor = color(random(255), random(255), random(255));

  for(var i=0; i<NUM; i++)
  {
    x[i] = random(width);
    y[i] = random(height);
    xi[i] = (random(1)>0.5?1:-1) * random(0.2, 3);
    yi[i] = (random(1)>0.5?1:-1) * random(0.2, 3);
  }
}


function mousePressed()
{
  init();
  return false;
}


function windowResized()
{
  resizeCanvas(windowWidth, windowHeight);
}