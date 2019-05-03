class Enemy {
    constructor(x, y, s) {
        this.x = x;
        this.y = y;
        this.speed = s;
        this.sprite = 'images/enemy-bug.png';
    }
    update(dt) {
        this.x += this.speed * dt;
        if (this.x > 550) {
            this.x = -100;
            this.speed = 100 + Math.floor(Math.random() * 500);
            if ((player.x < this.x + 20 && player.x + 20 > this.x )
            &&
             (player.y < this.y + 50 && 50 + player.y > this.y)
             )
              {
                player.x = 200;
                player.y = 400;
            }
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
    
}
class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.sprite = 'images/char-boy.png';
    }
  
    
    update(){
       if(this.y == -35){
            gameOver()
        }
    }
    render() {
        ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
    }
}
Player.prototype.handleInput = function (key) {
    switch(key) {
        case 'left':
            if(this.x > 0){
                this.x -= 100;
            }
            break;
        case 'right':
             if(this.x < 400){
                this.x += 100;
            }
            break;
        case 'up':
           
            if(this.y > 0){
                this.y -= 87;
            }
            break;

        case 'down':
            if(this.y < 400){
                this.y += 87;
            }
            break;
    }
};

allEnemies = []
allEnemies.push(new Enemy(-100, 140, Math.random()*100 + 100))
allEnemies.push(new Enemy(-100, 240, Math.random()*100 + 100))
allEnemies.push(new Enemy(-100, 80, Math.random()*100 + 100))


player = new Player(200,400)

function checkCollisions() {
 
    if(
        (allEnemies[2].y < player.y+50 && allEnemies[2].y + 50 > player.y)
         && 
         (allEnemies[2].x < player.x+20 && allEnemies[2].x + 20 > player.x) 
         ||
         (allEnemies[1].y < player.y+50 && allEnemies[1].y + 50 > player.y)
         && 
         (allEnemies[1].x < player.x+20 && allEnemies[1].x + 20 > player.x) 
         ||
         (allEnemies[0].y < player.y+50 && allEnemies[0].y + 50 > player.y)
         && 
         (allEnemies[0].x < player.x+20 && allEnemies[0].x + 20 > player.x) 
    )
    {
        player = new Player(200,400);
   }

}

document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});

    function restartGame(){
        location.reload();
    }
    function gameOver(){
        
    
    
      swal({
        title: "Good job!",
        text: "Gongrats!",
        icon: "success",
        button: "Play Again!",
      }).then((restartNow) => {
        if (restartNow) {
          restartGame();
        }
      });
    
      
    }
    