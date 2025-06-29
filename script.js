// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", function () {
  // Referencias a elementos clave de la interfaz
  const header = document.querySelector(".semestre-header"); // Encabezado clickeable del semestre
  const content = document.getElementById("semestre-content"); // Contenido desplegable del semestre
  const toggle = document.getElementById("semestre-toggle"); // Botón o zona de despliegue
  const dropdown = document.querySelector(".semestre-dropdown"); // Contenedor que se abre/cierra
  const arrow = toggle.querySelector(".dropdown-arrow"); // Flecha visual del botón

  // Íconos de Material Symbols para el estado abierto/cerrado
  const arrowDown =
    '<span class="material-symbols-outlined">keyboard_arrow_down</span>';
  const closeIcon = '<span class="material-symbols-outlined">close</span>';

  // Lógica de despliegue del contenido del semestre
  header.addEventListener("click", function () {
    dropdown.classList.toggle("open"); // Agrega o quita la clase 'open'

    if (dropdown.classList.contains("open")) {
      // Si está abierto, muestra el contenido
      content.style.maxHeight = "60vw";
      content.style.opacity = "1";
      arrow.innerHTML = closeIcon; // Cambia el ícono a 'cerrar'
    } else {
      // Si está cerrado, oculta el contenido
      content.style.maxHeight = "0";
      content.style.opacity = "0";
      arrow.innerHTML = arrowDown; // Cambia el ícono a 'flecha abajo'
    }
  });

  // -------------------------------
  // Lógica para crear cursos personalizados
  // -------------------------------

  const form = document.getElementById("custom-course-form"); // Formulario para crear cursos
  const output = document.createElement("div"); // Contenedor donde se mostrarán los cursos creados
  output.id = "custom-course-output";

  // Si existe el contenedor de contenido del semestre, añadimos ahí el nuevo bloque
  if (content) {
    content.appendChild(output);
  }

  // Si existe el formulario, añadimos el listener de envío
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevenir recarga de la página

      // Obtener valores del formulario
      const name = document.getElementById("custom-course-name").value;
      const credits = document.getElementById("custom-course-credits").value;
      const duration = document.getElementById("custom-course-duration").value;
      const color = document.getElementById("custom-course-color").value;

      // Construir clase de color según selección (útil para CSS)
      const colorClass = `course-card-color-${color}`;

      // Determinar texto visible de duración
      let durationText = "";
      if (duration === "8A") durationText = "CICLO 8A";
      else if (duration === "8B") durationText = "CICLO 8B";
      else durationText = "16 SEMANAS";

      // Crear el HTML de la tarjeta del curso
      const cardHTML = `
        <div class="course-card ${colorClass}">
          <div class="course-card-inner">
            <div class="course-card-title-block">
              <span class="course-card-title">${name}</span>
              <span class="course-card-credits-block">
                <span class="course-card-credits">${credits}</span>
                <span class="course-card-cr">CR</span>
              </span>
            </div>
            <span class="course-card-duration">${durationText}</span>
          </div>
        </div>
      `;

      // Insertar la tarjeta al final del contenedor de resultados
      output.insertAdjacentHTML("beforeend", cardHTML);

      // Limpiar el formulario para que el usuario pueda ingresar otro curso
      form.reset();
    });
  }
});
