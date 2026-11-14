class Marco{
    
        constructor(ctx){
        this.ctx = ctx
        this.x = 500 - (500/2)
        this.y = 250 - (300/2)
        this.w = 500
        this.h = 300
        this.isMoving = false
        this.frameTicks = 0 
        this.frameSpeed = 8
        this.img = new Image()
        this.img.src = 'images/marco.jpg'
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
        this.ctx.clearRect(this.x, this.y, 1000, 500)
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
    }