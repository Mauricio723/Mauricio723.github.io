/*Scripts para index de sitio Mauricio723.io*/

		let elemento_p_enlace_01;
		let elemento_p_enlace_02;
		let elemento_p_enlace_03;
		
		let elementoDivEnlaces01;
		let elementoDivEnlaces02;
		let elementoDivEnlaces03;
		
		let bordeActivado = "2px solid rgb(250, 40, 40)";
		let bordeDesactivado = "1px solid white";
				
		function iniciarScript01() {
			
			elemento_p_enlace_01 = document.getElementById("p_enlace_01");
			elemento_p_enlace_02 = document.getElementById("p_enlace_02");
			elemento_p_enlace_03 = document.getElementById("p_enlace_03");
			
			elementoDivEnlaces01 = document.getElementById("id_div_enlaces_01");
			elementoDivEnlaces02 = document.getElementById("id_div_enlaces_02");
			elementoDivEnlaces03 = document.getElementById("id_div_enlaces_03");
			
			elementoDivEnlaces01.hidden = true;
			elementoDivEnlaces02.hidden = true;
			elementoDivEnlaces03.hidden = true;
			
		}
		function ocultarElementosDiv(numeroElemento) {
			if (numeroElemento != 1 && elementoDivEnlaces01.hidden == false) {
				elementoDivEnlaces01.hidden = true;
			}
			if (numeroElemento != 2 && elementoDivEnlaces02.hidden == false) {
				elementoDivEnlaces02.hidden = true;
			}
			if (numeroElemento != 3 && elementoDivEnlaces03.hidden == false) {
				elementoDivEnlaces03.hidden = true;
			}
			
			elemento_p_enlace_01.style.border = bordeDesactivado;
			elemento_p_enlace_02.style.border = bordeDesactivado;
			elemento_p_enlace_03.style.border = bordeDesactivado;
			
		}
		function activarBorde(numeroElemento) {
			if (numeroElemento == 1) {
				elemento_p_enlace_01.style.border = bordeActivado;				
			}
			if (numeroElemento == 2) {
				elemento_p_enlace_02.style.border = bordeActivado;
			}
			if (numeroElemento == 3) {
				elemento_p_enlace_03.style.border = bordeActivado;
			}
		}
		function desactivarBorde(numeroElemento) {
			if (numeroElemento == 1) {
				elemento_p_enlace_01.style.border = bordeDesactivado;
			}
			if (numeroElemento == 2) {
				elemento_p_enlace_02.style.border = bordeDesactivado;
			}
			if (numeroElemento == 3) {
				elemento_p_enlace_03.style.border = bordeDesactivado;
			}
		}
					
		function mostrarEnlaces01() {
			ocultarElementosDiv(1);
									
			if (elementoDivEnlaces01.hidden) {
				elementoDivEnlaces01.hidden = false;
				activarBorde(1);
			} else {
				elementoDivEnlaces01.hidden = true;
				desactivarBorde(1);
			}
			
		}
		function mostrarEnlaces02() {
			ocultarElementosDiv(2);
						
			if (elementoDivEnlaces02.hidden) {
				elementoDivEnlaces02.hidden = false;
				activarBorde(2);
			} else {
				elementoDivEnlaces02.hidden = true;
				desactivarBorde(2);
			}
			
		}
		function mostrarEnlaces03() {
			ocultarElementosDiv(3);
												
			if (elementoDivEnlaces03.hidden) {
				elementoDivEnlaces03.hidden = false;
				activarBorde(3);
			} else {
				elementoDivEnlaces03.hidden = true;
				desactivarBorde(3);
			}
			
		}
		
		window.onload = function() {
			iniciarScript01();
		}
		