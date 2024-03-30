$(document).ready(function () {
    $('#btnEnviar').click(function () {
        var faltanRespuestas = ""; // Variable para almacenar las opciones que faltan responder

        // Validar cada opción
        for (var i = 1; i <= 21; i++) {
            if (!$("input[name='respuesta" + i + "']:checked").val()) {
                // Si la opción no está seleccionada, agregarla a la lista de faltanRespuestas
                faltanRespuestas += "respuesta" + i + ", ";

                // Agregar la clase al div que contiene la respuesta faltante
                $("#divRespuesta" + i).addClass("respuesta-faltante");
            } else {
                // Si la opción está seleccionada, remover la clase si estaba presente
                $("#divRespuesta" + i).removeClass("respuesta-faltante");
            }
        }

        // Validar el checkbox checkTerms
        if (!$('#checkTerms').is(':checked')) {
            $("#check").addClass("respuesta-faltante");
            alert("Debes aceptar el tratamiento de datos");
           
        }else{
            $("#check").removeClass("respuesta-faltante");
        }

        // Validar el campo de texto Nombreinput
        if (!$('#Nombreinput').val()) {
            // Si el campo de texto está vacío, agregarlo a la lista de faltanRespuestas
            faltanRespuestas += "Nombreinput, ";
            $("#nombre").addClass("respuesta-faltante");
        }else{
            $("#nombre").removeClass("respuesta-faltante");
        }

        // Validar el campo de correo electrónico emailInput
        if (!$('#emailInput').val()) {
            // Si el campo de texto está vacío, agregarlo a la lista de faltanRespuestas
            faltanRespuestas += "emailInput, ";
            $("#email").addClass("respuesta-faltante");
        }else{
            $("#email").removeClass("respuesta-faltante");
        }

        // Verificar si faltan opciones por responder
        if (faltanRespuestas !== "") {
            // Si hay opciones que faltan responder, mostrar un mensaje de advertencia
            alert("Complete todos los campos"); // Eliminar la última coma y espacio
        } else {
            // Si todas las opciones están seleccionadas, proceder con la suma
            var sumaRespuestas = 0;

            // Realizar la suma
            for (var i = 1; i <= 21; i++) {
                var respuesta = parseInt($("input[name='respuesta" + i + "']:checked").val());
                sumaRespuestas += respuesta;
            }

            // Determinar el mensaje de acuerdo a la suma
            var mensaje = "";
            if (sumaRespuestas >= 0 && sumaRespuestas <= 21) {
                mensaje = "Ansiedad muy baja";
            } else if (sumaRespuestas >= 22 && sumaRespuestas <= 35) {
                mensaje = "Ansiedad moderada";
            } else {
                mensaje = "Ansiedad severa";
            }
            alert("Respuestas guardadas");
          /*   $('#resultado').html('</br><div class="alert alert-info" role="alert">Su resultado es: ' + sumaRespuestas + '<br>' + mensaje + '</div>');*/
        }
    });
});
