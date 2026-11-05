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
        this.enemigo.draw()
        this.player.draw()
        this.disparo.draw()
        this.disparoEnemigo.draw()
        
        
    }

    setupListener(){
        addEventListener('keydown',(event,)=>{
            this.player.onKey(event)

        }
        )

         addEventListener('keyup',(event)=>{
            this.player.onKey(event)
        })

        addEventListener('keydown', (event)=>{// PREGUNTAR ESTA LINEA DE CODIGO

            this.disparo.onKey(event,this.player.x,this.player.y)
        })

        

    }
}