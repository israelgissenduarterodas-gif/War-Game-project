class Stop_button {

        constructor(ctx){
        this.ctx = ctx
        this.x = 800
        this.y = 400
        this.w = 30
        this.h = 30
        this.vx = 0
        
    }

     clear(){
        this.ctx.clearRect(this.x, this.y, 1000, 500)
    }

    draw(){
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
    }

    
    }
