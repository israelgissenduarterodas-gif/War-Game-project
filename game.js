class Game {
    constructor(canvasId) {
        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d')

        this.enemigo = [
            new Enemigo(this.ctx)
        ]
        this.player = new Player(this.ctx)

        this.disparo = new Disparos(this.ctx)

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
        this.enemigo.forEach(element => {
            element.clear()
        });
        this.player.clear()
        this.disparo.clear()
        
    }

    move(){
        this.enemigo.forEach(element => {
            element.move()
        });
        this.player.move()
        this.disparo.move()
    }

    draw(){
        this.enemigo.forEach(element => {
           element.draw()
       });
        this.player.draw()
        this.disparo.draw()
        
    }

    setupListener(){
        addEventListener('keydown',(event)=>{
            this.player.onKey(event)
        }
        )

         addEventListener('keyup',(event)=>{
            this.player.onKey(event)
        })

        addEventListener('keydown', (event)=>{
            this.disparo.onKey(event)
        })

    }
}