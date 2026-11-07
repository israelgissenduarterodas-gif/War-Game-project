class Enemigo {
    constructor(ctx,){
        this.ctx = ctx
        this.x = 300
        this.y = 35
        this.w = 50
        this.h = 50
        this.vx = 10
        this.isMoving = false
        this.frameTicks = 0 
        this.frameSpeed = 8
        this.vy = 0
        this.ay = 0.5
        this.isRight = false
    
        this.img = new Image()
        this.img.src = 'jugador.png'
        this.img.onload = ()=>{
            this.isReady = true
            this.frameW = Math.floor(this.img.naturalWidth / this.vFrames)
            this.frameH = Math.floor(this.img.naturalHeight / this.hFrames)
        }

        this.frameIndex = 2
        this.vFrames = 3
        this.hFrames = 2
        
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

    move(){
        
        if(this.isRight === false){
            this.vx = 5
            this.x += this.vx
           if(this.x === 650){
                this.isRight = true

            }
         } 
          
         
         if (this.isRight === true){
            this.vx = -5
            this.x += this.vx
            
            if(this.x === 300){
                this.isRight = false
            }
        }
         

    }

    collidesWith(element){
        return (
            this.x < element.x + element.w &&
            this.x + this.w > element.x &&
            this.y < element.y + element.h &&
            this.y + this.h > element.y
        )
    }

    update() {
        // 1. Detectar si el jugador se está moviendo basándonos en su velocidad (vx)
        if (this.vx !== 0) {
            this.isMoving = true;
            
        } else {
            this.isMoving = false;
            this.frameIndex = 0; // Si se detiene, vuelve al frame de estar quieto
        }

        // 2. Lógica de animación (solo si se está moviendo)
        if (this.isMoving) {
            this.frameTicks++;

            // Cuando el contador llega al límite, avanzamos al siguiente frame
            if (this.frameTicks >= this.frameSpeed) {
                this.frameTicks = 0;
                this.frameIndex++;

                // Si llegamos al final de las columnas (vFrames), reiniciamos al primer frame (0)
                if (this.frameIndex >= this.vFrames) {
                    this.frameIndex = 0;
                }
            }
        }
    }

      
        }
         
