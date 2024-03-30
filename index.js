//configuracion de firebase
var firebaseConfig = {
	apiKey: 'AIzaSyDkNPCbeZfWtNYsRCg6DxYfxnpYF8mRhwc',
	authDomain: 'encuestaansiedad-1b8be.firebaseapp.com',
	projectId: 'encuestaansiedad-1b8be',
	storageBucket: 'encuestaansiedad-1b8be.appspot.com',
	messagingSenderId: '780069763178',
	appId: '1:780069763178:web:ba8a14a1cda72e775fb213',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

let db = firebase.firestore();

const SaveUser = (user) => {
	db.collection('Encuestados')
		.add({
			user,
		})
		.then((docRef) => {
			MSJOK();
		})
		.catch((error) => {
			MSJERROR3();
		});
};

$(document).ready(function () {
	$('#btnEnviar').click(function () {
		var faltanRespuestas = '';

		for (var i = 1; i <= 21; i++) {
			if (!$("input[name='respuesta" + i + "']:checked").val()) {
				faltanRespuestas += 'respuesta' + i + ', ';

				$('#divRespuesta' + i).css('background-color', '#ffcccc');
			} else {
				$('#divRespuesta' + i).css('background-color', '');
			}
		}

		if (!$('#checkTerms').is(':checked')) {
      $('#checkTerms').css('background-color', '#ffcccc');
			faltanRespuestas += 'checkTerms, ';
			MSJERROR2();
			//alert('Debes aceptar el tratamiento de datos');
		} else {
			$('#checkTerms').css('background-color', '');
		}

		if (!$('#Nombreinput').val()) {
			faltanRespuestas += 'Nombreinput, ';
      $('#Nombreinput').css('background-color', '#ffcccc');
		} else {
      $('#Nombreinput').css('background-color', '');
		}

    var email = $('#emailInput').val();
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;



		if (!$('#emailInput').val() || !emailRegex.test($('#emailInput').val())) {
			faltanRespuestas += 'emailInput, ';
       $('#emailInput').css('background-color', '#ffcccc');
      if (!emailRegex.test($('#emailInput').val()) && $('#emailInput').val() && faltanRespuestas == 'emailInput, ') {
        MSJERROR4();
        return "";
      }  
		} else {
      $('#emailInput').css('background-color', '');
		}

		if (faltanRespuestas == 'checkTerms, ') {
			return '';
		} else if (faltanRespuestas !== '') {
			MSJERROR1();
			//alert('Complete todos los campos');
		} else {
			var sumaRespuestas = 0;

			for (var i = 1; i <= 21; i++) {
				var respuesta = parseInt($("input[name='respuesta" + i + "']:checked").val());
				sumaRespuestas += respuesta;
			}

			var mensaje = '';
			if (sumaRespuestas >= 0 && sumaRespuestas <= 21) {
				mensaje = 'Ansiedad muy baja';
			} else if (sumaRespuestas >= 22 && sumaRespuestas <= 35) {
				mensaje = 'Ansiedad moderada';
			} else {
				mensaje = 'Ansiedad severa';
			}
			//MSJOK();
			//alert('Respuestas guardadas, muchas gracias por participar');
			/*   $('#resultado').html('</br><div class="alert alert-info" role="alert">Su resultado es: ' + sumaRespuestas + '<br>' + mensaje + '</div>');*/

			/*--------Creación del Objeto JSON--------*/

			var nombre = $('#Nombreinput').val();
			var email = $('#emailInput').val();
        var respuesta1 = $("input[name='respuesta1']:checked").val();
    var respuesta2 = $("input[name='respuesta2']:checked").val();
    var respuesta3 = $("input[name='respuesta3']:checked").val();
    var respuesta4 = $("input[name='respuesta4']:checked").val();
    var respuesta5 = $("input[name='respuesta5']:checked").val();
    var respuesta6 = $("input[name='respuesta6']:checked").val();
    var respuesta7 = $("input[name='respuesta7']:checked").val();
    var respuesta8 = $("input[name='respuesta8']:checked").val();
    var respuesta9 = $("input[name='respuesta9']:checked").val();
    var respuesta10 = $("input[name='respuesta10']:checked").val();
    var respuesta11 = $("input[name='respuesta11']:checked").val();
    var respuesta12 = $("input[name='respuesta12']:checked").val();
    var respuesta13 = $("input[name='respuesta13']:checked").val();
    var respuesta14 = $("input[name='respuesta14']:checked").val();
    var respuesta15 = $("input[name='respuesta15']:checked").val();
    var respuesta16 = $("input[name='respuesta16']:checked").val();
    var respuesta17 = $("input[name='respuesta17']:checked").val();
    var respuesta18 = $("input[name='respuesta18']:checked").val();
    var respuesta19 = $("input[name='respuesta19']:checked").val();
    var respuesta20 = $("input[name='respuesta20']:checked").val();
    var respuesta21 = $("input[name='respuesta21']:checked").val();
			var terminosAceptados = $('#checkTerms').is(':checked');

			if (terminosAceptados) {
				var encuestaData = {
					Nombre: nombre,
					Email: email,
					Respuesta1: respuesta1,
Respuesta2: respuesta2,
Respuesta3: respuesta3,
Respuesta4: respuesta4,
Respuesta5: respuesta5,
Respuesta6: respuesta6,
Respuesta7: respuesta7,
Respuesta8: respuesta8,
Respuesta9: respuesta9,
Respuesta10: respuesta10,
Respuesta11: respuesta11,
Respuesta12: respuesta12,
Respuesta13: respuesta13,
Respuesta14: respuesta14,
Respuesta15: respuesta15,
Respuesta16: respuesta16,
Respuesta17: respuesta17,
Respuesta18: respuesta18,
Respuesta19: respuesta19,
Respuesta20: respuesta20,
Respuesta21: respuesta21,

					TerminosAceptados: terminosAceptados,
				};

				var encuestaJSON = JSON.stringify(encuestaData);

				console.log("Prueba sin terminos");

				SaveUser(encuestaData);
			}
		}
	});
});

const MSJOK = () => {
	Swal.fire({
		title: 'Buen trabajo',
		text: 'Encuesta enviada correctamente',
		icon: 'success',
    confirmButtonColor: '#0d6efd'
	}).then((result) => {
      if (result.isConfirmed) {
        location.reload();
      } 
  });
};

const MSJERROR1 = () => {
	Swal.fire({
		title: 'Ups',
		text: 'Complete todos los campos',
		icon: 'error',
    confirmButtonColor: '#0d6efd'
	});
};

const MSJERROR2 = () => {
	Swal.fire({
		title: 'Ups',
		text: 'Debes aceptar el tratamiento de datos',
		icon: 'error',
    confirmButtonColor: '#0d6efd'
	});
};

const MSJERROR3 = () => {
	Swal.fire({
		title: 'Ups',
		text: 'Error al guardar los datos',
		icon: 'error',
    confirmButtonColor: '#0d6efd'
	});
};

const MSJERROR4 = ()  => {
  Swal.fire({
    title:'Ups',
    text: 'Debes ingresar un correo electrónico válido',
    icon: 'error',
    confirmButtonColor: '#0d6efd'
  });
};
