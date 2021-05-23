
class Planet
{

  constructor(x, y, size_r, fill_color)
  {
    this.x = x;
    this.y = y;
    this.size_radius = size_r;
    this.fill_color = fill_color;
    this.angle_cnt = 270;
    this.current_angle = radians(this.angle_cnt);      
  }
  
  orbitAroundPoint(c_x, c_y, dist, speed)
  {        
    this.current_angle = radians(this.angle_cnt);    
    this.x = c_x + (cos(this.current_angle) * dist);
    this.y = c_y + (sin(this.current_angle) * dist);
    
    noStroke();    
    fill(this.fill_color);
    ellipseMode(CENTER);
    ellipse(this.x,  this.y, this.size_radius, this.size_radius);
    
    this.angle_cnt += speed;
    if (this.angle_cnt > 359)
    {
      this.angle_cnt = 0;
    }
  }  

}