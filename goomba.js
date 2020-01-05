class Goomba
{
  constructor()
  {
    this.r = 100;
    this.x = width;
    this.y = height-this.r;
  }

  move()
  {
    this.x -= 10;
  }

  show()
  {
    this.r = (windowWidth+windowHeight)/40;
    this.y = height-this.r;
    image(goombaImg,this.x,this.y,this.r,this.r);
    //rect(this.x,this.y,this.r,this.r);
  }

}
