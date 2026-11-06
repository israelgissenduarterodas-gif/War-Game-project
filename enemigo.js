class Enemigo {
    constructor(ctx,){
        this.ctx = ctx
        this.x = 300
        this.y = 50
        this.w = 30
        this.h = 30
        this.vx = 10
        this.vy = 0
        this.ay = 0.5
        this.isRight = false
        
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
        
        if(this.isRight === false){
            this.vx = 5
            this.x += this.vx
           if(this.x === 500){
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

      
        }
         
