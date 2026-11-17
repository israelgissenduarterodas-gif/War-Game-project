# 🪖 Bunker Clash

![Gameplay de Bunker Clash]

## 📝 Descripción
**Bunker Clash** es un videojuego de acción 2D desarrollado con **JavaScript Vanilla y HTML5 Canvas** como proyecto para el bootcamp de **Ironhack**.

El juego enfrenta a dos soldados desde sus respectivas bases. El objetivo es agotar los **puntos de vida** del enemigo mediante disparos, mientras esquivas saltando y desplazándote los ataques de un **avión caza enemigo** que sobrevuela el campo de batalla soltando misiles en cada pasada.

🔗 **[Juega aquí en vivo a Bunker Clash](https://israelgissenduarterodas-gif.github.io/War-Game-project/)**

---

## 🎮 Controles y Mecánicas
* **Correr a la izquierda:** Flecha izquierda (`⬅️`)
* **Correr a la derecha:** Flecha derecha (`➡️`)
* **Saltar:** Barra espaciadora (`Space`)
* **Disparar:** Tecla `R`

### Reglas del combate:
1. **Duelo entre bases:** Ambos soldados intercambian disparos para reducir la barra de vida del oponente.
2. **Apoyo aéreo enemigo:** Un avión caza cruza periódicamente el cielo lanzando misiles, obligando al jugador a moverse y saltar para esquivar las explosiones.
3. **Condición de victoria:** Gana el primero que consiga dejar a `0` los puntos de vida de su rival.

---

## 🛠️ Tecnologías utilizadas
* **HTML5 Canvas:** Renderizado de gráficos en 2D, sprites, proyectiles y escenarios.
* **JavaScript (ES6+):** Arquitectura del juego, físicas de salto (gravedad), gestión de eventos de teclado, colisiones y control del *Game Loop*.
* **Web Audio API / HTML5 Audio:** Efectos de sonido dinámicos durante el combate y música de fondo en las pantallas de inicio y resultados.
* **CSS3:** Estilos básicos para el layout y centrado del lienzo de juego.

---

## 🧠 Aspectos técnicos destacados
*(Puntos clave desarrollados durante el bootcamp en Ironhack)*
* **Game Loop fluido:** Implementación de un bucle de renderizado continuo (`requestAnimationFrame`) para actualizar posiciones, animaciones y estados a 60 FPS.
* **Animaciones y Sprites:** Gestión de ciclos de animación para el movimiento de los soldados, el vuelo del avión caza y el impacto de los proyectiles.
* **Físicas y Colisiones en Canvas:** Cálculo de gravedad para el salto del jugador y detección de impactos entre balas, misiles y personajes.
* **Gestión de Estados y Audio:** Transición fluida entre pantalla de inicio, combate activo y pantalla de resultados, sincronizando la música de fondo y los efectos sonoros en cada fase.

---

## 🚀 Instalación y ejecución local
1. Clona este repositorio:
   ```bash
   git clone https://github.com
   ```https://github.com/israelgissenduarterodas-gif/War-Game-project.git
2. Entra en la carpeta del proyecto:
   ```bash
   cd bunker-clash
   ```
3. Abre el archivo `index.html` en tu navegador (se recomienda usar la extensión **Live Server** en VS Code).

---

## 🔮 Mejoras futuras
* [ ] Implementar diferentes tipos de munición o *power-ups* (escudos, botiquines) en el campo de batalla.
* [ ] Añadir selector de dificultad (velocidad y frecuencia de los misiles del avión).
* [ ] Crear un modo multijugador local (2 jugadores en el mismo teclado).

---

## ✒️ Autor
* **Israel Duarte** - [GitHub](https://github.com/israelgissenduarterodas-gif) 
