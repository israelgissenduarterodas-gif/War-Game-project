class Disparos {
    constructor(ctx){
        this.ctx = ctx
        this.x = 0
        this.y = 0
        this.w = 5
        this.h = 5
        this.vx = 0
        
    }

     clear(){
        this.ctx.clearRect(this.x, this.y, 1000, 500)
    }

    draw(){
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    move(){
        this.x += -this.vx
         
        
    }
    onKey(event,x,y){
        
        let isPressed = event.type === 'keydown'  
        
        if (isPressed && event.keyCode === 82){
            this.x = x
            this.y = y
            this.vx = 20 
        
        } 
    }

}