class Avion {
    constructor(ctx,){
        this.ctx = ctx
        this.x = 100
        this.y = 100
        this.w = 150
        this.h = 80
        this.vx = 0
        this.frameTicks = 0 
        this.frameSpeed = 8
        this.isRight = false
    
        this.img = new Image()
        this.img.src = 'images/f18.png'
        this.img.onload = ()=>{
            this.isReady = true
            this.frameW = Math.floor(this.img.naturalWidth / this.vFrames)
            this.frameH = Math.floor(this.img.naturalHeight / this.hFrames)
        }

        this.frameIndex = 0
        this.currentFila = 0
        this.vFrames = 1
        this.hFrames = 1
        
    }

    clear(){
        this.ctx.clearRect(this.x, this.y, 0, 0)
    }

    draw(){
        
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
        
        if(this.isRight === false){
            this.vx = 7
            this.x += this.vx
           if(this.x >= 2000){
                this.isRight = true

            }
         } 
          
         
         if (this.isRight === true){
            this.isRight = false
            this.x = -150
            
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