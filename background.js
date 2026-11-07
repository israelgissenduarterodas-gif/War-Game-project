class Background {
    constructor(ctx){
        this.ctx = ctx
        this.x = 0
        this.y = 0
        this.w = 1000
        this.h = 500

        this.bgd = new Image()
        this.bgd.src = 'mapa.jpg'
        this.bgd.onload = ()=>{
            this.isReady = true
        }

    }

     clear(){
        this.ctx.clearRect(this.x, this.y, 1000, 500)
    }

    draw(){
        if(this.isReady){
            this.ctx.drawImage(
                this.bgd,
                this.x,
                this.y,
                this.w,
                this.h)
        }
    }
}