
    // 1. Capturamos el canvas y su contexto de dibujo
    const canvas = document.getElementById("canvasJuego");
    const ctx = canvas.getContext("2d");


    

    // Primera pintura del juego al cargar la página
    dibujarTodo();

    // =========================
    // FUNCIONES DE DIBUJO


    const TAMANIO_CELDA = 25;

    function dibujarTablero() {
      // 1. Definimos el color de la línea del tablero
      ctx.strokeStyle = "#374151"; 
      
      // 2. Iniciamos el camino de dibujo
      ctx.beginPath();
      
      // 3. Posición inicial de la línea (arriba a la izquierda)
      ctx.moveTo(0, 0);
      
      // 4. Posición final de la línea (baja verticalmente hasta el final del canvas)
      ctx.lineTo(0, 500);
      
      // 5. Renderizamos/pintamos la línea en pantalla
      ctx.stroke();
    }

    // =========================

    function limpiarCanvas() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    function dibujarTodo() {
      limpiarCanvas();
    }



