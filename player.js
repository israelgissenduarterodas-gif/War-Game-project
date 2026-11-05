class Player {
    constructor(ctx){
        this.ctx = ctx
        this.x = 500
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
}