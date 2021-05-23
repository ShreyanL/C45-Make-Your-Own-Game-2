var Sun;
var Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune;
var cntr_x, cntr_y;
var planets = [];

function setup() 
{
  
  createCanvas(displayWidth, displayHeight);
  
  cntr_x = displayWidth / 2;
  cntr_y = displayHeight / 2;

  Sun = new Star(cntr_x, cntr_y, 60, color("yellow"));
 
  Mercury = new Planet(cntr_x, cntr_y, 15, color("maroon"));   
  planets.push(Mercury);

  Venus = new Planet(cntr_x, cntr_y, 30, color("green"));   
  planets.push(Venus); 

}

function draw() 
{ 

  background(0);
  
  Sun.display();
    
  for (var i=0; i < planets.length; i++)
  {
    planets[i].orbitAroundPoint(cntr_x, cntr_y, 50 * (i+1), i+5);
  }
  
}