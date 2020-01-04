let mario;
let marioImg;
let goombaImg;
let backgroundImg;
let goombas = [];
let score = 0;
function preload()
{
  marioImg = loadImage('https://i.imgur.com/ZYc9jg1.png');
  goombaImg = loadImage('https://i.imgur.com/dmTCABM.png');
  backgroundImg = loadImage('https://i.imgur.com/Qf2YhXk.jpg');

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  mario = new Mario();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function keyPressed() {
  if(key == ' ')
  {
    mario.jump();
  }
}

function draw() {
  if(random(1) < 0.005 )
  {
    goombas.push(new Goomba());
  }

  background(backgroundImg);
  mario.show();
  mario.move();

  for(let g of goombas)
  {
    score++;
    g.move();
    g.show();
    if(mario.hits(g))
    {
      console.log('game over');
     // score = 0;
      noLoop();
    }
  }
  textSize(30);
  text('Score:', 0, 30);
  textSize(30);
  text(score, 100, 30);

}
