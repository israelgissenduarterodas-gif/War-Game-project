class Game {
    constructor(canvasId) {

        this.canvas = document.getElementById('canvas')

        this.ctx = canvas.getContext('2d')

        this.intervalId = null

        this.landingInterval = null

        this.landing = new Landing(this.ctx)
        this.marco = new Marco(this.ctx)
        this.startbut = new Startbut(this.ctx)

        this.background = new Background(this.ctx)

        this.status = new Status(this.ctx)

        this.enemigo = new Enemigo(this.ctx)

        this.player = new Player(this.ctx)

        this.avion = new Avion(this.ctx)

        this.misil = new Misil(this.ctx,this.avion.x,this.avion.y)

        this.porcentaje = new Porcentaje(this.ctx)

        this.impact = new Impact(this.ctx)

        this.disparo = new Disparos(this.ctx)
        
        this.disparoEnemigo = new Disparos(
            this.ctx,
            true,
            this.enemigo.x,
            this.enemigo.y)

    }

    landingPage(){
    this.landingInterval = setInterval(()=>{
        this.landing.clear()
        this.marco.clear()
        this.startbut.clear()

        this.landing.draw()
        this.marco.draw()
        this.startbut.draw()

        this.startbut.animate()
       },1000/60)

    }

    start(){
      this.intervalId = setInterval(() => {
            this.setupListener()
            this.clear()
            this.move()
            this.upDate()
            this.draw()
            this.checkCollisions()
            this.stop()

        }, 1000/60);
    }

    stop(){
        if(this.player.health <= 0 || this.enemigo.health <=0){
            console.log('dead!')
            clearInterval(this.intervalId)
        }
        
    }

    stopLanding(){
        const handleEnter = (event) => {
            if (event.key === 'Enter') {
                clearInterval(myGame.landingInterval);
                removeEventListener('keydown', handleEnter);
                myGame.start();
            }
  };

  addEventListener('keydown', handleEnter);
}

    clear(){
        this.background.clear()
        this.enemigo.clear()
        this.player.clear()
        this.avion.clear()
        this.misil.clear()
        this.disparo.clear()
        this.disparoEnemigo.clear()
        this.impact.clear()
        this.status.clear()
        this.porcentaje.clear()
        
    }

    move(){
        this.enemigo.move()
        this.player.move()
        this.avion.move()
        this.misil.move(this.avion.x,this.avion.y)
        this.disparo.move()
        this.disparoEnemigo.move(this.enemigo.x,this.enemigo.y)
        
    }

    draw(){
        this.background.draw()
        this.enemigo.draw()
        this.player.draw()
        this.disparo.draw()
        this.avion.draw()
        this.misil.draw()
        this.disparoEnemigo.draw()
        this.status.draw()
        this.porcentaje.draw()
    }


    checkCollisions(){
        if (this.player.collidesWith(this.disparoEnemigo)) {
            this.collision = true
            this.impact.draw(this.player.x,this.player.y)
            this.player.health -= 2 //FUNCIONA, PERO HAY QUE CORREGIR LA COLISION
            this.porcentaje.updateHealth(this.player.health)
            console.log(`player: ${this.player.health}`)
            
            
      }

        if (this.enemigo.collidesWith(this.disparo)) {
            this.collision = true
            this.impact.draw(this.enemigo.x,this.enemigo.y)
            this.enemigo.health -= 2 //FUNCIONA, PERO HAY QUE CORREGIR LA COLISION
            console.log(`enemy: ${this.enemigo.health}`)
      }

       if (this.player.collidesWith(this.misil)) {
            this.collision = true
            this.impact.draw(this.player.x,this.player.y)
            this.player.health -= 10 //FUNCIONA, PERO HAY QUE CORREGIR LA COLISION
            this.porcentaje.updateHealth(this.player.health)
            console.log(`player: ${this.player.health}`)
            
            
      }


    }

    upDate(){
        this.player.update()
        this.enemigo.update()
        this.disparo.update()
        this.disparoEnemigo.update()
        this.impact.update(this.collision)
        this.misil.animate()
    }

    setupListener(){
        addEventListener('keydown',(event,)=>{
            this.player.onKey(event)
        })

         addEventListener('keyup',(event)=>{
            this.player.onKey(event)
        })

        addEventListener('keydown', (event)=>{

            this.disparo.onKey(event,this.player.x,this.player.y)
        })


    }
}