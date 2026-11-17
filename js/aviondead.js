class AvionDead {
    constructor(ctx){
        this.ctx = ctx
        this.x = 0
        this.y = 0
        this.w = 140
        this.h = 140
        this.isEnd = false

        this.frameTicks = 0 
        this.frameSpeed = 8

        this.img = new Image()
        this.img.src = 'images/aviondead.png'
        
        this.img.onload = ()=>{
            this.isReady = true
            this.frameW = Math.floor(this.img.naturalWidth / this.vFrames)
            this.frameH = Math.floor(this.img.naturalHeight / this.hFrames)
        }
        this.frameIndex = 0
        this.vFrames = 6
        this.hFrames = 1
    }

    clear(){
      
        this.ctx.clearRect(this.x, this.y,0,0)
        
    }

    draw(xx,yy){
        if(!this.isEnd){
            if(this.isReady){
            this.ctx.drawImage(
                this.img,
                this.frameIndex * this.frameW,
                0,
                this.frameW,
                this.frameH,
                this.x = xx,
                this.y = yy,
                this.w,
                this.h)
        }
        }
    }

    update(){ 
        if(!this.isEnd){
            this.frameTicks++;
 
            if (this.frameTicks >= this.frameSpeed) {
                this.frameTicks = 0;
                this.frameIndex++;

                if (this.frameIndex >= this.vFrames) {
                    this.frameIndex = 0
                    this.isEnd = true
            
                }
            }
        }
            
        }
    }