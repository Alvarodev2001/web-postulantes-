const addForm = document.getElementById("form-validacion");

// Escuchar el evento submit del formulario
addForm.addEventListener("submit", (e) => {
    // Validar los campos del formulario
    if (!addForm.checkValidity()) {
        e.preventDefault(); // Evita el envío si hay errores
        e.stopPropagation(); // Detiene la propagación del evento
        addForm.classList.add('was-validated'); // Añade clase para mostrar errores
    } else {
        alert('Formulario enviado correctamente. !BUENA SUERTE!');
        addForm.reset(); // Limpia el formulario
        addForm.classList.remove('was-validated'); // Remueve la clase de validación
    }
});