let rootVariableStyle = document.documentElement;
				
function establecerDatosStorage() {		
	sessionStorage.setItem("font_size_pagina", 3);		
}
					
		
function reducirSizeText() {								
	let fontSizeStorage = sessionStorage.getItem("font_size_pagina");						
	let valor_size_aumentado = parseInt(fontSizeStorage) - 1; 			
	sessionStorage.setItem("font_size_pagina", valor_size_aumentado);			
	establecerDatosRem(valor_size_aumentado);					
}
		
function aumentarSizeText() {								
	let fontSizeStorage = sessionStorage.getItem("font_size_pagina");						
	let valor_size_aumentado = parseInt(fontSizeStorage) + 1; 			
	sessionStorage.setItem("font_size_pagina", valor_size_aumentado);			
	establecerDatosRem(valor_size_aumentado);									
}
		
function establecerDatosRem(valor_size_text) {
	let valor_font_rem = "";
			
	switch(valor_size_text) {
		case 1: valor_font_rem = "0.8rem"; break;
		case 2: valor_font_rem = "0.9rem"; break;
		case 3: valor_font_rem = "1rem"; break;
		case 4: valor_font_rem = "1.1rem"; break;
		case 5: valor_font_rem = "1.2rem"; break;
		case 6: valor_font_rem = "1.3rem"; break;
		case 7: valor_font_rem = "1.4rem"; break;
		default: valor_font_rem = establecerValorPorDefecto();
	}
						
	rootVariableStyle.style.setProperty("--font_size_var_01", valor_font_rem);
			
}
		
function establecerValorPorDefecto() {
	sessionStorage.setItem("font_size_pagina", 3);
	return "1rem";
}
				
window.addEventListener("load", establecerDatosStorage, false);
