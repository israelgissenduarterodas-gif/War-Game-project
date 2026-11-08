class Player {
    constructor(ctx){
        this.ctx = ctx
        this.x = 440
        this.y = 420
        this.w = 60
        this.h = 60
        this.vx = 0
        this.health = 100
        this.isMoving = false
        this.frameTicks = 0 
        this.frameSpeed = 8
        this.img = new Image()
        this.img.src = 'sprite.png'
        this.img.onload = ()=>{
            
            this.isReady = true

            this.frameW = Math.floor(this.img.naturalWidth / this.vFrames)
            this.frameH = Math.floor(this.img.naturalHeight / this.hFrames)
        }

        this.frameIndex = 0
        this.currentFila = 0
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
                this.currentFila * this.frameH,
                this.frameW,
                this.frameH,
                this.x,
                this.y,
                this.w,
                this.h)
        }
    }

    move(){

         this.x += this.vx

         if (this.x < 0){
            this.x = 0
         }

         if (this.x >= 970){
            this.x = 970
         }
        
    }

    onKey(event){

        let isPressed = event.type === 'keydown'

        switch(event.keyCode) {
            case 39:
                if (isPressed){
                    this.vx = 5
            
                } else {
                    this.vx = 0
                }
                break;
            case 37:
                if (isPressed){
                    this.vx = -5
                } else {
                    this.vx = 0
                }
                break;
        
            default:
                break;
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

            if (this.vx > 0) this.currentFila = 0;
            if (this.vx < 0) this.currentFila = 1;
            
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