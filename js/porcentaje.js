class Porcentaje {
    constructor(ctx){
        this.ctx = ctx
        this.x = 100
        this.y = 13
        this.w = 80
        this.h = 40

        this.img = new Image()
        this.img.src = 'images/100.png'
       
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

    updateHealth(health){
         switch(health){
            case 100:
                this.img.src = 'images/100.png'
                console.log('100')
                break;
            case 80:
                this.img.src = 'images/80.png'
                console.log('80')
                break;
            case 60:
                this.img.src = 'images/60.png'
                console.log('60')
                break;
            case 40:
                this.img.src = 'images/40.png'
                console.log('40')
                break;
            case 20:
                this.img.src = 'images/20.png'
                break;
            case 10:
                this.img.src = 'images/0.png'
                break;
            default:
                break
        }
    }

}