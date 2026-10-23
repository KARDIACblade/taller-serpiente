
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
    

    // ==========================================
    // Constante para el tamaño de cada celda
        const TAMANIO_CELDA = 25;
    // ==========================================

    // Arreglo que representa el cuerpo de la serpiente
      const serpiente = [
          {x:5, y:5},   // cabeza
          {x:4, y:5},
          {x:3, y:5},
          {x:2, y:5}
      ];

    

    // Primera pintura del juego al cargar la página
    dibujarTodo();


    // =========================
    // FUNCIONES DE DIBUJO

    function limpiarCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
      // ==========================================
      // PASOS 5, 6 y 7: Función para dibujar la cuadrícula completa
      // ==========================================


    function dibujarTablero() {
      // Definimos el color de las líneas de la cuadrícula
        ctx.strokeStyle = "#374151"; 

      // 2. Bucle para dibujar las líneas verticales y horizontales
      // Usamos el tamaño del canvas (500) y el TAMANIO_CELDA (25)

      
        
        // --- LÍNEAS VERTICALES ---
        for (let i = 0; i <= canvas.width; i += TAMANIO_CELDA) {
        ctx.beginPath();
        ctx.moveTo(i, 0);       // Arriba en la posición 'i'
        ctx.lineTo(i, canvas.height); // Baja hasta el fondo del canvas
        ctx.stroke();
        }

        // --- LÍNEAS HORIZONTALES ---
         for (let i = 0; i <= canvas.width; i += TAMANIO_CELDA) {
        ctx.beginPath();
        ctx.moveTo(0, i);       // A la izquierda en la posición 'i'
        ctx.lineTo(canvas.width, i);  // Se extiende hasta el ancho máximo
        ctx.stroke();
      }
    }


    function pintarParte(lineaX, lineaY, color = "red") {
    const posX = lineaX * TAMANIO_CELDA;
    const posY = lineaY * TAMANIO_CELDA;

      ctx.fillStyle = color;
      ctx.fillRect(posX, posY, TAMANIO_CELDA, TAMANIO_CELDA)

      ctx.strokeStyle = "#fca5a5";
       ctx.strokeRect(posX, posY, TAMANIO_CELDA, TAMANIO_CELDA);
}


//////
    function pintarSerpiente() {

    for (let i = 0; i < serpiente.length; i++) {
       let color = "red" //cuerpo

      if (i === 0) {
            color = "yellow";                    // cabeza
        }
        pintarParte(serpiente[i].x, serpiente[i].y,color);
    }

    }
/////


    function moverDerecha() {
    const cabeza = serpiente[0];
    const nuevaCabeza = { x: cabeza.x + 1, y: cabeza.y };
    serpiente.unshift(nuevaCabeza);
    serpiente.pop();
    }




///////

    function dibujarTodo(){
      limpiarCanvas();
        // =========================
      dibujarTablero();
        //========================
      pintarSerpiente();

      
     //pintarParte(5,5);     // PRUEBA 1
   // pintarParte(10,2);    // PRUEBA 2
   // pintarParte(12,23);   // PRUEBA 3: pegado al borde inferior
   // pintarParte(23,8);    // PRUEBA 4: pegado al borde derecho
   // pintarParte(0,15);    // PRUEBA 5: pegado al borde izquierdo
   // pintarParte(23,23);   // PRUEBA 6: en una esquina (no la (0,0))
  }



