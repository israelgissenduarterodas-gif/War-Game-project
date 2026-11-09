class Startbut{
    
        constructor(ctx){
        this.ctx = ctx
        this.x = 500 - (200/2)
        this.y = 250 - (150/2)
        this.w = 200
        this.h = 150
        this.isMoving = true
        this.frameTicks = 0 
        this.frameSpeed = 16
        this.img = new Image()
        this.img.src = 'images/startplay.jpg'
        this.img.onload = ()=>{
            
            this.isReady = true

            this.frameW = Math.floor(this.img.naturalWidth / this.vFrames)
            this.frameH = Math.floor(this.img.naturalHeight / this.hFrames)
        }

        this.frameIndex = 0
        this.currentFila = 0
        this.vFrames = 2
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

    animate(){

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