
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
///// mover derecha


    function moverDerecha() {
    const cabeza = serpiente[0];
    const nuevaCabeza = { x: cabeza.x + 1, y: cabeza.y };
    serpiente.unshift(nuevaCabeza);
    serpiente.pop();
    }


///// mov iz mov up mov down

function moverIzquierda() {
    const cabeza = serpiente[0];
    const nuevaCabeza = { x: cabeza.x - 1, y: cabeza.y };
    serpiente.unshift(nuevaCabeza);
    serpiente.pop();
}

function moverArriba() {
    const cabeza = serpiente[0];
    const nuevaCabeza = { x: cabeza.x, y: cabeza.y - 1 };
    serpiente.unshift(nuevaCabeza);
    serpiente.pop();
}

function moverAbajo() {
    const cabeza = serpiente[0];
    const nuevaCabeza = { x: cabeza.x, y: cabeza.y + 1 };
    serpiente.unshift(nuevaCabeza);
    serpiente.pop();
}

///// cambio direccion


function cambiarDireccion(direccion) {
 
    direccionActual = direccion;
}

/////

let intervaloSerpiente;

let direccionActual = "derecha";

let comida = { x: -1, y: -1 };

let puntaje = 0;

let juegoTerminado = false;

let velocidad = 300;

///

function iniciarJuego() {
  intervaloSerpiente = setInterval(moverSerpiente, velocidad);
  document.getElementById("mensaje").textContent = "¡Buena suerte! Usa las flechas para moverte.";

}

function pausarJuego() {
  clearInterval(intervaloSerpiente);

}

////


  function moverSerpiente() {

    if (direccionActual === "derecha") {
        moverDerecha();
    }
    if (direccionActual === "izquierda") {
        moverIzquierda();
    }
    if (direccionActual === "arriba") {
        moverArriba();
    }
    if (direccionActual === "abajo") {
        moverAbajo();
    }



    if (chocaConBorde()) {
        gameOver();
        return;
    }


    if (atrapaComida()) {
        puntaje++;
        document.getElementById("puntaje").textContent = puntaje;

        const cola = serpiente[serpiente.length - 1];
        let nuevaCola;

        if (direccionActual === "derecha") {
            nuevaCola = { x: cola.x - 1, y: cola.y };
        }
        if (direccionActual === "izquierda") {
            nuevaCola = { x: cola.x + 1, y: cola.y };
        }
        if (direccionActual === "arriba") {
            nuevaCola = { x: cola.x, y: cola.y + 1 };
        }
        if (direccionActual === "abajo") {
            nuevaCola = { x: cola.x, y: cola.y - 1 };
        }

        serpiente.push(nuevaCola);
    


    }
    pintarSerpiente();

   
}
///// mover comida

function pintarComida() {
    const lineasVerticales = canvas.width / TAMANIO_CELDA;
    const lineasHorizontales = canvas.height / TAMANIO_CELDA;

    const comidaX = Math.floor(Math.random() * lineasVerticales);
    const comidaY = Math.floor(Math.random() * lineasHorizontales);

    comida = { x: comidaX, y: comidaY };


    pintarParte(comidaX, comidaY, "green");
} 

///ATRAPAR COMIDA

function atrapaComida() {
    const cabeza = serpiente[0];

    if (cabeza.x === comida.x && cabeza.y === comida.y) {
        return true;
    }
    return false;
}


////// detectar chocque



function chocaConBorde() {
    const cabeza = serpiente[0];
    const columnas = canvas.width / TAMANIO_CELDA;
    const filas = canvas.height / TAMANIO_CELDA;

    if (cabeza.x < 0 || cabeza.x >= columnas || cabeza.y < 0 || cabeza.y >= filas) {
        return true;
    }
    return false;
}

/////  juego terminado


function gameOver() {
    clearInterval(intervaloSerpiente);
    juegoTerminado = true;
    document.getElementById("estado").textContent = "GAME OVER";
    document.getElementById("mensaje").textContent = "GAME OVER: chocaste con el borde";
}


///reiniciar juego

function reiniciarJuego() {
    // detener cualquier intervalo que esté corriendo
    clearInterval(intervaloSerpiente);

    // serpiente en su posición inicial
    serpiente.length = 0;
    serpiente.push({x:5, y:5}, {x:4, y:5}, {x:3, y:5}, {x:2, y:5});

    // reiniciar dirección, GAME OVER y puntaje
    direccionActual = "derecha";
    juegoTerminado = false;
    puntaje = 0;

    // reiniciar lo que se ve en pantalla
    document.getElementById("puntaje").textContent = puntaje;
    document.getElementById("estado").textContent = "Listo";
    document.getElementById("mensaje").textContent = "Presiona iniciar para comenzar.";

    // limpiar el tablero y volver a pintar
    dibujarTodo();
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



