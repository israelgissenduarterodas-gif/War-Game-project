class Disparos {
    constructor(ctx,isEnemy=false,x,y){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = 30
        this.h = 30
        this.vx = 0
        this.isMoving = false
        this.frameTicks = 0 
        this.frameSpeed = 8
        this.isEnemy = isEnemy

        this.img = new Image()
        this.img.src = 'balas2.png'
        this.img.onload = ()=>{
            this.isReady = true
            this.frameW = Math.floor(this.img.naturalWidth / this.vFrames)
            this.frameH = Math.floor(this.img.naturalHeight / this.hFrames)
        }
        this.frameIndex = 0
        this.vFrames = 4
        this.hFrames = 1
        
    }

     clear(){
        this.ctx.clearRect(this.x, this.y, 1000, 500)
        
    }

    draw(){
        if(this.isReady){
            this.ctx.drawImage(
                this.img,
                this.frameIndex * this.frameW,
                0,
                this.frameW,
                this.frameH,
                this.x,
                this.y,
                this.w,
                this.h)
        }
    }

    move(xx,yy){

        if(this.isEnemy === false){
            this.y += -5
        }

        if(this.isEnemy === true){
           let isOut = false

           if(!isOut){
            this.vy = 5
            this.y += this.vy

            if(this.y >= 500){
                
                this.x = xx
                this.y = yy
                
            }
           }

            

        }
        
         
        
    }
    onKey(event,x,y){

        if (this.isEnemy === false){
            let isPressed = event.type === 'keydown'  
        
        if (isPressed && event.keyCode === 82){
            this.x = x
            this.y = y
            this.vy = 20 
        
        } 
        }
    }

    update() {
        
        if (this.vy !== 0) {
            this.isMoving = true;

            
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