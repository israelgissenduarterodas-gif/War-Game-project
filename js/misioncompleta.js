class Winending {
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
        this.ctx.fillText('Mision completa', 400, 250)
        this.ctx.fillText(`Player Hits: ${hits}`, 400, 280)
        this.ctx.fillText(`Enemy Hits: ${recibido}`, 400, 310)
        this.ctx.font = 'bold 20px Arial'
        this.ctx.fillStyle = '#e9edf0'
        this.ctx.strokeStyle = '#f1e9e9'
    }

    
}