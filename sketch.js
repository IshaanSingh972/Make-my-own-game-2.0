var player,enemy;

function setup(){
  createCanvas(1000,1000);
  player = createSprite(50,500,20,50);
}
function draw(){
  background(255);
  if(keyDown("up_arrow")){
    player.y  = player.y-10;
  }
  if(keyDown("down_arrow")){
    player.y  = player.y+10;
  }
  if(keyDown("right_arrow")){
    player.x  = player.x+10;
  }
  if(keyDown("left_arrow")){
    player.x  = player.x-10;
  }
  spawnEnemy();
  drawSprites();
}
function spawnEnemy(){
  if(frameCount % 50===0){
 enemy = createSprite(1000,random(100,900),20,50);
 enemy.velocityX = -1;
}}