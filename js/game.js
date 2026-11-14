class Game {
    constructor(canvasId) {

        this.canvas = document.getElementById('canvas')
        this.ctx = canvas.getContext('2d')
        
        
        
        this.deadInterval = null
        this.intervalId = null
        this.landingInterval = null
        this.endingInterval = null

        this.landing = new Landing(this.ctx)
        this.marco = new Marco(this.ctx)
        this.startbut = new Startbut(this.ctx)
        this.endbut = new Endbutton(this.ctx)

        this.background = new Background(this.ctx)

        this.status = new Status(this.ctx)

        this.enemigo = new Enemigo(this.ctx)

        this.player = new Player(this.ctx)

        this.avion = new Avion(this.ctx)

        this.misil = new Misil(this.ctx,this.avion.x,this.avion.y)

        this.collision = false

        this.porcentaje = new Porcentaje(this.ctx)

        this.impact = new Impact(this.ctx)

        this.disparo = new Disparos(this.ctx)

        this.dead = new Dead(this.ctx)

        this.deadEnemigo = new Dead(this.ctx)

        this.ground = 480
        
        this.disparoEnemigo = new Disparos(
            this.ctx,
            true,
            this.enemigo.x,
            this.enemigo.y)

        this.puntos = new Puntuacion(this.ctx)

    }

    landingPage(){

    this.startGame()    

    this.menuMusic = new Audio('sound/main.mp3');
    this.menuMusic.loop = true   // Para que se repita en bucle
    this.menuMusic.volume = 0.2  // Volumen al 50%
    
    this.iniciarMusica = () => {
        this.menuMusic.play().then(() => {
            // Si logra sonar, quitamos los detectores para no repetir esto
            window.removeEventListener('click', this.iniciarMusica);
            window.removeEventListener('keydown', this.iniciarMusica);
        }).catch(() => {
            // Si el navegador la bloquea al inicio, no pasa nada; 
            // sonará en cuanto el jugador haga clic o pulse una tecla.
        });
    };

    // Intentamos reproducirla de inmediato (funcionará si el jugador ya interactuó antes)
    this.iniciarMusica();

    window.addEventListener('click', this.iniciarMusica);
    window.addEventListener('keydown', this.iniciarMusica);

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

    endingPage(){

        this.landing.clear()
        this.marco.clear()
        this.endbut.clear()

        this.landing.draw()
        this.marco.draw()
        this.endbut.draw()
        this.endbut.animate()
        this.puntos.clear()
        this.puntos.draw(this.enemigo.disparoRecibido, this.player.disparoRecibido)
        this.restartGame()

    }

    start(){
      this.intervalId = setInterval(() => {
            this.setupListener()
            this.clear()
            this.move()
            this.upDate()
            this.draw()
            this.checkCollisions()
            this.isDeadPlayer()
            this.isDeadEnemy()

        }, 1000/60);
    }

    stop(){
        
        if(this.player.health <= 0){
           
                this.avion.sonido.pause() 
                this.iniciarMusica()    
                clearInterval(this.intervalId) 

                this.endingInterval = setInterval(()=>{
                        
                        this.endingPage()
                        console.log('end int')
                        
                },1000/60)

            }    
    }

    isDeadPlayer(){

        if(this.player.health <= 0){
            this.dead.clear()
            
            this.dead.draw(this.player.x,this.player.y)
            
            this.player.lifeStatus(this.player.health)
           
            this.dead.update()

            if(this.dead.isEnd){
                this.stop()
            }
            
        }
    }

    isDeadEnemy(){
            
        if(this.enemigo.health <= 0){
            
            this.deadEnemigo.clear()
            
            this.deadEnemigo.draw(this.enemigo.x,this.enemigo.y)
            
            this.enemigo.lifeStatus(this.enemigo.health)
            
            this.deadEnemigo.update()

            if(this.deadEnemigo.isEnd){
                this.stop()//CAMBIAR METODO
            }
            
        }
    }

    startGame(){
        this.handleEnter = (event) => {
            if (event.key === 'Enter') {
                clearInterval(this.landingInterval);
                this.menuMusic.pause();
                this.menuMusic.currentTime = 0;
                removeEventListener('keydown', this.handleEnter);
                myGame.start();
                this.avion.sonidoJet()
            }
        };

                addEventListener('keydown', this.handleEnter);
    }

    restartGame(){
        
      this.handleEnter2 = (event) => {
            if (event.key === 'Enter') {
                    console.log('restar')
                    clearInterval(this.endingInterval)
                    this.menuMusic.pause()
                    removeEventListener('keydown', this.handleEnter)
                    this.player.health = 100
                    this.enemigo.health = 100
                    location.reload()
                    
            }
        }
        addEventListener('keydown',this.handleEnter2)
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
        this.misil.move(this.avion.x,this.avion.y,this.collision)
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
            this.impact.clear()
            this.impact.draw(this.player.x,this.player.y)
            this.impact.update(this.collision)
            this.player.health -= 20 //FUNCIONA, PERO HAY QUE CORREGIR LA COLISION
            this.porcentaje.updateHealth(this.player.health)
            this.player.disparoRecibido++
            
      }

        if (this.enemigo.collidesWith(this.disparo)) {
            this.collision = true
            this.impact.clear()
            this.impact.draw(this.enemigo.x,this.enemigo.y)
            this.impact.update(this.collision)
            this.enemigo.health -= 20 //FUNCIONA, PERO HAY QUE CORREGIR LA COLISION
            this.enemigo.disparoRecibido++
      }

       if (this.player.collidesWith(this.misil)) {
            this.collision = true
            this.impact.clear()
            this.impact.draw(this.player.x,this.player.y)
            this.impact.update(this.collision)
            this.player.health -= 10 //FUNCIONA, PERO HAY QUE CORREGIR LA COLISION
            this.misil.x = this.avion.x
            this.misil.y = this.avion.y
            this.porcentaje.updateHealth(this.player.health)
            
            
            
      }

    if(this.avion.collidesWith(this.disparo)){
            this.collision = true
            this.impact.clear()
            this.impact.draw(this.avion.x,this.avion.y)
            this.impact.update(this.collision)
            this.avion.health -= 40 //FUNCIONA, PERO HAY QUE CORREGIR LA COLISION
            
    }
    }

    upDate(){
        this.player.update()
        this.enemigo.update()
        this.disparo.update()
        this.disparoEnemigo.update()
        
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