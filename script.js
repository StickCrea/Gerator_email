document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtener los valores de los inputs
    const nombreCompleto = document.getElementById('nombre_completo').value.trim();
    const empresa = document.getElementById('empresa').value.trim();
    let dominio = document.getElementById('dominio').value.trim().toLowerCase();

    // Validar y manipular los datos
    const nombreUser = nombreCompleto.replace(/\s+/g, '.').toLowerCase();
    const empresaEmail = empresa.replace(/\s+/g, '').toLowerCase();

    // Validar que el dominio tenga un punto al principio
    if (!dominio.startsWith('.')) {
        dominio = '.' + dominio;
    }

    // Generar el email
    const email = `${nombreUser}@${empresaEmail}${dominio}`;

    // Mostrar el resultado en la página
    document.getElementById('resultado').textContent = `Email: ${email}`;
});
