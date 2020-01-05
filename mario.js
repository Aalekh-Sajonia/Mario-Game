class Mario
{
  constructor()
  {
    this.r = 200;
    this.x = this.r;
    this.y = height-this.r;
    this.velocity = 0;
    this.gravity = .8;
  }

  jump()
  {
    if(this.y == height - this.r)
    {
      this.velocity = -25;
    }
  }

  hits(goomba)
  {
    let x1 = this.x + this.r * 0.5;
    let y1 = this.y + this.r * 0.5;
    let x2 = goomba.x + goomba.r * 0.5;
    let y2 = goomba.y + goomba.r * 0.5;

    return collideCircleCircle(x1,y1,this.r,x2,y2,goomba.r);
  }

  move()
  {
    this.y += this.velocity;
    this.velocity += this.gravity;
    this.y = constrain(this.y,0,height-this.r);
  }

  show ()
  {
    this.r = (windowWidth+windowHeight)/20;
    image(marioImg,this.x,this.y,this.r,this.r);
    //fill(255,50);
    //rect(this.x,this.y,this.r,this.r);
  }
}
