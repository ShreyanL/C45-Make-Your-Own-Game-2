class Star
{
  constructor(x, y, size_r, fill_color)
  {
    this.x = x;
    this.y = y;
    this.size_radius = size_r;
    this.fill_color = fill_color;     
  }
  
  display()
  {
    noStroke(); 
    fill(this.fill_color);
    ellipseMode(CENTER);
    ellipse(this.x,  this.y, this.size_radius, this.size_radius);
  }
  
  
}