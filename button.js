document.addEventListener("DOMContentLoaded", function() {
    // Selecciona todos los checkboxes
    const checkboxes = document.querySelectorAll('.check');

    // Cargar el estado de los checkboxes desde localStorage
    checkboxes.forEach(checkbox => {
        const planoId = checkbox.getAttribute("data-plano");
        const isChecked = localStorage.getItem(planoId) === "true";
        checkbox.checked = isChecked;

        const span = checkbox.nextElementSibling; // Obtiene el span asociado
        if (isChecked) {
            span.style.textDecoration = 'line-through'; // Aplica el estilo de tachado
            span.style.color = '#999'; // Cambia el color del texto
        } else {
            span.style.textDecoration = 'none'; // Elimina el estilo de tachado
            span.style.color = '#000'; // Restaura el color del texto
        }
    });

    // Agrega un evento 'change' a cada checkbox
    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const span = this.nextElementSibling; // Obtiene el span asociado

            // Actualiza el estilo basado en si el checkbox está seleccionado o no
            if (this.checked) {
                span.style.textDecoration = 'line-through'; // Aplica el estilo de tachado
                span.style.color = '#999'; // Cambia el color del texto
            } else {
                span.style.textDecoration = 'none'; // Elimina el estilo de tachado
                span.style.color = '#000'; // Restaura el color del texto
            }

            // Guarda el estado del checkbox en localStorage
            localStorage.setItem(this.getAttribute("data-plano"), this.checked);
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll(".check");

    // Cargar el estado de los checkboxes desde localStorage
    checkboxes.forEach(checkbox => {
        const plano = checkbox.getAttribute("data-plano");
        checkbox.checked = localStorage.getItem(plano) === "true";

        // Agregar un evento para almacenar el estado cuando cambie
        checkbox.addEventListener("change", () => {
            localStorage.setItem(plano, checkbox.checked);
        });
    });
});
