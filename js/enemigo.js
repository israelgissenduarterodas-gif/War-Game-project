class Enemigo {
    constructor(ctx,){
        this.ctx = ctx
        this.x = 300
        this.y = 25
        this.w = 50
        this.h = 50
        this.vx = 0
        this.health = 100
        this.isMoving = false
        this.frameTicks = 0 
        this.frameSpeed = 8
        this.isRight = false
    
        this.img = new Image()
        this.img.src = 'images/sprite.png'
        this.img.onload = ()=>{
            this.isReady = true
            this.frameW = Math.floor(this.img.naturalWidth / this.vFrames)
            this.frameH = Math.floor(this.img.naturalHeight / this.hFrames)
        }

        this.frameIndex = 2
        this.currentFila = 0
        this.vFrames = 3
        this.hFrames = 2

        this.isAlive = true
        
    }

    lifeStatus(health){
        
        if(health <= 0){
            this.isAlive = false
            
        }
    }

    clear(){
        this.ctx.clearRect(this.x, this.y, 0, 0)
    }

    draw(){
    if(!this.isAlive) return;
        if(this.isReady){
            this.ctx.drawImage(
                this.img,
                this.frameIndex * this.frameW,
                this.currentFila * this.frameH,
                this.frameW,
                this.frameH,
                this.x,
                this.y,
                this.w,
                this.h)
        }
    }

    move(){
       if(!this.isAlive) return; 
        if(this.isRight === false){
            this.vx = 5
            this.x += this.vx
           if(this.x === 650){
                this.isRight = true

            }
         } 
          
         
         if (this.isRight === true){
            this.vx = -5
            this.x += this.vx
            
            if(this.x === 300){
                this.isRight = false
            }
        }
         

    }

    collidesWith(element){
        return (
            this.x < element.x + element.w &&
            this.x + this.w > element.x &&
            this.y < element.y + element.h &&
            this.y + this.h > element.y
        )
    }

    update() {
        if(!this.isAlive) return;
            if (this.vx !== 0) {
                this.isMoving = true;

                if (this.vx > 0) this.currentFila = 0;
                if (this.vx < 0) this.currentFila = 1;
                
            } else {
                this.isMoving = false;
                this.frameIndex = 0; 
            }

            if (this.isMoving) {
                this.frameTicks++;

                
                if (this.frameTicks >= this.frameSpeed) {
                    this.frameTicks = 0;
                    this.frameIndex++;

                    if (this.frameIndex >= this.vFrames) {
                        this.frameIndex = 0;
                    }
                }
            }
    }

      
        }
         
