class Disparos {
    constructor(ctx,isEnemy=false,x,y){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = 10
        this.h = 10
        this.vx = 0
        this.isEnemy = isEnemy

        this.img = new Image()
        this.img.src = 'bolafuego.png'
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

    

}