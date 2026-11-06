class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById('canvas')

        this.ctx = canvas.getContext('2d')

        this.enemigo = new Enemigo(this.ctx)

        this.player = new Player(this.ctx)

        this.disparo = new Disparos(this.ctx)
        
        this.disparoEnemigo = new Disparos(
            this.ctx,
            true,
            this.enemigo.x,
            this.enemigo.y)
    }

    start(){
        setInterval(() => {
            this.setupListener()
            this.clear()
            this.move()
            this.draw()
            this.checkCollisions()

        }, 1000/60);
    }

    clear(){
        this.enemigo.clear()
        this.player.clear()
        this.disparo.clear()
        this.disparoEnemigo.clear()
        
    }

    move(){
        this.enemigo.move()
        this.player.move()
        this.disparo.move()
        this.disparoEnemigo.move(this.enemigo.x,this.enemigo.y)
        
    }

    draw(){
        this.upDate()
        this.enemigo.draw()
        this.player.draw()
        this.disparo.draw()
        this.disparoEnemigo.draw()
        
        
    }

    checkCollisions(){
        if (this.player.collidesWith(this.disparoEnemigo)) {
            console.log('colision!')
      }

        if (this.enemigo.collidesWith(this.disparo)) {
            console.log('colision2!')
      }


    }

    upDate(){
        this.player.update()
    }

    setupListener(){
        addEventListener('keydown',(event,)=>{
            this.player.onKey(event)

        }
        )

         addEventListener('keyup',(event)=>{
            this.player.onKey(event)
        })

        addEventListener('keydown', (event)=>{

            this.disparo.onKey(event,this.player.x,this.player.y)
        })

        

    }
}