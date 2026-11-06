class Disparos {
    constructor(ctx,isEnemy=false,x,y){
        this.ctx = ctx
        this.x = x
        this.y = y
        this.w = 5
        this.h = 5
        this.vx = 0
        this.isEnemy = isEnemy
    }

     clear(){
        this.ctx.clearRect(this.x, this.y, 1000, 500)
    }

    draw(){
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    move(xx,yy){

        if(this.isEnemy === false){
            this.y += -this.vy
        }

        if(this.isEnemy === true){
           let isOut = false

           if(!isOut){
            this.vy = 20
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