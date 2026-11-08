class Status{
    constructor(ctx){
        this.ctx = ctx
        this.x = 20
        this.y = 10
        this.w = 100
        this.h = 50

        this.img = new Image()
        this.img.src = 'images/health.png'
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