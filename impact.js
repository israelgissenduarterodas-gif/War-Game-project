class Impact {
    constructor(ctx){
        this.ctx = ctx
        this.x = 0
        this.y = 0
        this.w = 100
        this.h =100

        this.isMoving = false
        this.frameTicks = 0 
        this.frameSpeed = 3

        this.img = new Image()
        this.img.src = 'impacto.png'
        
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

    update(xx,yy,col){
        
        if(col){
        console.log('impacto!')
        this.x = xx
        this.y = yy
       
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
