
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");
    

    // ==========================================
    // Constante para el tamaño de cada celda
        const TAMANIO_CELDA = 25;
    // ==========================================

    

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

    function dibujarTodo(){
      limpiarCanvas();
    // =========================

      dibujarTablero();
  }



