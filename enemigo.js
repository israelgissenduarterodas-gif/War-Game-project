class Enemigo {
    constructor(ctx){
        this.ctx = ctx
        this.x = 20
        this.y = 400
        this.w = 30
        this.h = 30
        this.vx = 10
        this.vy = 0
        this.ay = 0.5
        this.groundY = 500
        this.isUp= false
        /*
        
        this.img = new Image()
        this.img.src = */
        
    }

    clear(){
        this.ctx.clearRect(this.x, this.y, 1000, 500)
    }

    draw(){
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    move(){
        
        if(!this.isUp){
        
            this.vy= -5
            this.y += this.vy

            if(this.y <= 300){
                this.isUp = true
            }
        }
        if (this.isUp === true){
            this.vy= 5
            this.y += this.vy
    
            if(this.y === 400){
                this.isUp = false
            }
        }
        }
         


}
