
let numero_elemento = 0;

let indice_elemento = 0;

let elementosPreguntas;
let elementosRespuestas;
let iconosMinus;
let iconosPlus;

let enter_activado = false;
 
let numero_pregunta_seleccionada = 0;

let app_iniciada = false;

function inicio_app() {
	
	elementosPreguntas = document.querySelectorAll(".div_enlace_pregunta");
	elementosRespuestas = document.querySelectorAll(".div_respuesta");
	iconosMinus = document.querySelectorAll(".icono_minus");
	iconosPlus = document.querySelectorAll(".icono_plus");
	
		
	// Damos los valores de hidden para la pantalla inicial
	
	for (i=0; i < elementosPreguntas.length; i++) {
		elementosRespuestas[i].hidden = true;
		iconosMinus[i].hidden = true;
		iconosPlus[i].hidden = false;
	}
		
	inicio_teclado();
	
}

function inicio_teclado() {
	
	document.addEventListener("keydown", (event) => {
		//let valor_tecla = event.key;
		let codigo_tecla = event.code;
						
			
		if (codigo_tecla != "Enter" && (enter_activado || elementosRespuestas[indice_elemento].hidden == false)) {
			
			elementosRespuestas[indice_elemento].hidden = true;
			iconosMinus[indice_elemento].hidden = true;
			iconosPlus[indice_elemento].hidden = false;
			enter_activado = false;	
		}

		if (app_iniciada == true) {
		
			if (codigo_tecla == "ArrowDown" || codigo_tecla == "ArrowRight") {					
									
				if(indice_elemento >= 3){			
					indice_elemento = 0;
				} else {
					indice_elemento++;
				}
			}
			if (codigo_tecla == "ArrowUp" || codigo_tecla == "ArrowLeft") {
						
				if (indice_elemento <= 0){
					indice_elemento = 3;
				} else {
					indice_elemento--;				
				}
			}								
			
		}
		
				
		for (i=0; i < elementosPreguntas.length; i++) {
			
			if (i == indice_elemento) {
				elementosPreguntas[i].style.color = "hsl(292, 42%, 45%)";
				indice_elemento = i;				
			} else {
				elementosPreguntas[i].style.color = "hsl(0, 0%, 0%)";
			}
		}				
		
		if (codigo_tecla == "Enter") {
			
			if (enter_activado == false) {				
				elementosRespuestas[indice_elemento].hidden = false;	
				iconosMinus[indice_elemento].hidden = false;
				iconosPlus[indice_elemento].hidden = true;
				enter_activado = true;
			} else {				
				elementosRespuestas[indice_elemento].hidden = true;
				iconosMinus[indice_elemento].hidden = true;
				iconosPlus[indice_elemento].hidden = false;
				enter_activado = false;			
			}			
		}
		
		if (app_iniciada == false) {
				app_iniciada = true;
			}	
		
		
	}, false);
}

function mostrar_contenido_01(numero_pregunta) {
	
	if (enter_activado) {		
		elementosPreguntas[indice_elemento].style.color = "black";
		elementosRespuestas[indice_elemento].hidden = true;
		iconosMinus[indice_elemento].hidden = true;
		iconosPlus[indice_elemento].hidden = false;
		enter_activado = false;	
	}
	
	if (numero_pregunta_seleccionada != numero_pregunta) {
		for (i=0; i < elementosPreguntas.length; i++) {
			elementosPreguntas[i].style.color = "black";
			elementosRespuestas[i].hidden = true;
			iconosMinus[i].hidden = true;
			iconosPlus[i].hidden = false;					
		}		
	}
	
	for (i=0; i < elementosPreguntas.length; i++) {
		
		if (i == numero_pregunta - 1) {
			if (elementosRespuestas[i].hidden) {
				elementosRespuestas[i].hidden = false;
				iconosMinus[i].hidden = false;
				iconosPlus[i].hidden = true;
			} else {
				elementosRespuestas[i].hidden = true;
				iconosMinus[numero_pregunta - 1].hidden = true;
				iconosPlus[numero_pregunta - 1].hidden = false;
			}
		}
	}	
	
	numero_pregunta_seleccionada = numero_pregunta;
	
	indice_elemento = numero_pregunta - 1;
		
}

window.onload = function() {
	inicio_app();
}


