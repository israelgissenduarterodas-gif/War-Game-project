class Misil {
    constructor(ctx,x,y){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = 100
        this.h = 50
        this.vx = 0
        this.isDrop = false
        this.isMoving = false
        this.frameTicks = 0 
        this.frameSpeed = 8

        this.img = new Image()
        this.img.src = 'images/misil.png'
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
       
           if(!this.isDrop){
            
            this.vy = 5
            this.vx = 7
            this.y += this.vy
            this.x += this.vx
              
                if(this.y >= 600){
                    this.isDrop = true
            }
        }
            if(this.isDrop === true){
                    
                console.log(this.x)
                console.log(this.y)
                this.isDrop = false
                this.x = xx
                this.y = yy
                //
                //
            }
        
    }

    animate(){
        
        if (this.vy !== 0) {
            this.isMoving = true

            
        } else {
            this.isMoving = false
            this.frameIndex = 0
        }

        if (this.isMoving) {
            this.frameTicks++
            
            

            
            if (this.frameTicks >= this.frameSpeed) {
                this.frameTicks = 0
                this.frameIndex++

                if (this.frameIndex >= this.vFrames) {
                    this.frameIndex = 0
                }
            }
        }
    }
}

