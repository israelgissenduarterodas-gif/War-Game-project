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

        this.avioncrash =new AvionDead(this.ctx)

        this.misil = new Misil(this.ctx,this.avion.x,this.avion.y)

        this.collision = false

        this.collisionMisil = false

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

        this.winPuntos = new Winending(this.ctx)

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

    winPage(){

        if(this.avion.health <= 0 && this.enemigo.health <= 0){
            this.iniciarMusica()    
            clearInterval(this.intervalId) 
            setInterval(() => {
                this.landing.clear()
                this.marco.clear()

                this.landing.draw()
                this.marco.draw()
                this.winPuntos.clear()
                this.winPuntos.draw(this.enemigo.disparoRecibido, this.player.disparoRecibido)
            }, 500);
            this.restartGame()
        }
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
            this.isDeadAvion()
            this.misilStop()
            this.winPage()
            

        }, 1000/60);
    }

    stopPlayer(){
        
        if(this.player.health <= 0){
           
                this.avion.sonido.pause() 
                this.iniciarMusica()    
                clearInterval(this.intervalId) 

                this.endingInterval = setInterval(()=>{
                        
                        this.endingPage()
                        
                },500)

            }    
    }

    isDeadPlayer(){

        if(this.player.health <= 0){
            this.dead.clear()
            
            this.dead.draw(this.player.x,this.player.y)
            
            this.player.lifeStatus(this.player.health)
           
            this.dead.update()

            if(this.dead.isEnd){
                this.stopPlayer()
            }
            
        }
    }

    isDeadEnemy(){
            
        if(this.enemigo.health <= 0){

            this.disparoEnemigo.isActive = false

            this.enemigo.isAlive = false
            
            this.deadEnemigo.clear()
            
            this.deadEnemigo.draw(this.enemigo.x,this.enemigo.y)
            
            this.deadEnemigo.update()
            
        }
    }

    isDeadAvion(){
        if(this.avion.health <= 0 && this.avion.isAlive){
            this.avion.sonido.pause()
            this.avion.explosionAudio.play()
            this.avion.isAlive = false
            
            this.avioncrash.clear()

            this.avioncrash.draw(this.avion.x,this.avion.y)

            this.avioncrash.update()

        }
        
    }

    misilStop(){
    
        if(!this.avion.isAlive && this.misil.isRight){
            this.misil.isActive = false
            this.misil.x = 0
            this.misil.y = 0
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
                   
                    removeEventListener('keydown', this.handleEnter)
                    
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
        this.disparoEnemigo.move(this.enemigo.x,
                                 this.enemigo.y)
        
    }

    draw(){
        this.background.draw()
        this.enemigo.draw()
        this.player.draw()
        this.disparo.draw()
        this.avion.draw(this.avion.health)
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
            this.player.health -= 5 //FUNCIONA, PERO HAY QUE CORREGIR LA COLISION
            this.porcentaje.updateHealth(this.player.health)
            this.player.disparoRecibido++
            
      }

        if (this.enemigo.collidesWith(this.disparo)) {
            this.collision = true
            this.impact.clear()
            this.impact.draw(this.enemigo.x,this.enemigo.y)
            this.impact.update(this.collision)
            this.enemigo.health -= 5 //FUNCIONA, PERO HAY QUE CORREGIR LA COLISION
            this.enemigo.disparoRecibido++
      }

       if (this.player.collidesWith(this.misil)) {
            this.collisionMisil = true
            this.impact.clear()
            this.impact.draw(this.player.x,this.player.y)
            this.impact.update(this.collisionMisil)
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
            this.avion.health -= 10 //FUNCIONA, PERO HAY QUE CORREGIR LA COLISION
            console.log(this.avion.health)
            
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