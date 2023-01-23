/*****Código JS para la galería modal de la página skills.html******/
/*Al presionar una de las imágenes, se abre la galería y se pueden visualizar todas con los botones "<" ">" 
indicados para pasar a derecha o izquierda las imágenes*/
	const enlaces = document.querySelectorAll(".galeria a");
	const modal = document.querySelector(".modal");
	const imgModal = document.querySelector(".modal img");
	const flechasModal = document.querySelectorAll(".modal button");
	let imgActual = 0;

//Código para abrir la galería, añadiéndole la clase visible
	for( let i = 0; i < enlaces.length; i ++){
		enlaces[i].addEventListener("click", function(evento){
			evento.preventDefault();
			modal.classList.add("visible");
		});
	};

//Código para cerrar la galería, quitándole la clase visible
	modal.addEventListener("click", function(evento){
		modal.classList.remove("visible");
	});

//Código para la navegación de las imágenes
	/*En índice se guarda la dirección de la flecha (derecha o izquierda,en función de eso, 
	se muestra al usuario la siguiente imagen correspondiente a este valor*/
	flechasModal.forEach(function(flecha,indice){ 
		flecha.addEventListener("click", function(evento){
			evento.stopPropagation(); 
			if(indice == 0){ 
				imgActual = imgActual > 0 ? imgActual - 1 : enlaces.length - 1;

			}else{ 
				imgActual = imgActual < enlaces.length - 1 ? imgActual + 1 : 0; 
			}
			imgModal.setAttribute("src",enlaces[imgActual].getAttribute("href")); 
		});
	});
