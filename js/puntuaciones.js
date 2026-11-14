class Puntuacion {
    constructor(ctx){
        this.ctx = ctx
        this.x = 0
        this.y = 0
        this.w = 60
        this.h = 60

    }

    clear(){
      
        this.ctx.clearRect(this.x, this.y, 0, 0)
        
    }

    draw(hits, recibido){
        this.ctx.fillText(`Hits: ${hits}`, 400, 320)
        this.ctx.fillText(`Enemy Hits: ${recibido}`, 400, 350)
        this.ctx.font = 'bold 15px Arial'
        this.ctx.fillStyle = '#e9edf0'
        this.ctx.strokeStyle = '#000000'
    }

    
}