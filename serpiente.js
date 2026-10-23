
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");


    

    // Primera pintura del juego al cargar la página
    dibujarTodo();

    // =========================
    // FUNCIONES DE DIBUJO


    const TAMANIO_CELDA = 25;

    function dibujarTablero() {
        ctx.strokeStyle = "#374151"; 

      // 2. Bucle para dibujar las líneas verticales y horizontales
      // Usamos el tamaño del canvas (500) y el TAMANIO_CELDA (25)
      
      for (let i = 0; i <= canvas.width; i += TAMANIO_CELDA) {
        
        // --- LÍNEAS VERTICALES ---
        ctx.beginPath();
        ctx.moveTo(i, 0);       // Arriba en la posición 'i'
        ctx.lineTo(i, canvas.height); // Baja hasta el fondo del canvas
        ctx.stroke();

        // --- LÍNEAS HORIZONTALES ---
        ctx.beginPath();
        ctx.moveTo(0, i);       // A la izquierda en la posición 'i'
        ctx.lineTo(canvas.width, i);  // Se extiende hasta el ancho máximo
        ctx.stroke();
    }
    // =========================

    function limpiarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function dibujarTodo() {
      limpiarCanvas();
    }



