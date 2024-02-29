const eventos = [
    {
      nombre: "Evento 1",
      fecha: "2024-03-10",
      hora: "20:00",
      lugar: "Lugar del evento 1",
      enlaceEntradas: "https://www.entradas.com/evento1"
    },
    {
      nombre: "Evento 2",
      fecha: "2024-03-15",
      hora: "21:00",
      lugar: "Lugar del evento 2",
      enlaceEntradas: "https://www.entradas.com/evento2"
    }
  ];
  
  function mostrarEventos() {
    const eventosHtml = eventos.map(evento => {
      return `
          <div class="evento">
              <h3>${evento.nombre}</h3>
              <p>${evento.fecha} - ${evento.hora}</p>
              <p>${evento.lugar}</p>
              <a href="${evento.enlaceEntradas}">Comprar entradas</a>
          </div>
      `;
    }).join("");
  
    document.querySelector(".proximos-eventos .contenedor").innerHTML = eventosHtml;
  }
  
  mostrarEventos();
  