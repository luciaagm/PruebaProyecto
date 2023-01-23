 /***************************************************************************************************/
/*Código JS para el menú desplegable del header común en todas las páginas*/
/*Al presionar el icono, se despliega un menú con las opciones para dirigir a las diferentes páginas html creadas*/
	const navegacion = document.querySelector("nav");
	const abrir = document.querySelector(".abrir");
	const cerrar = document.querySelector(".cerrar");

	abrir.addEventListener("click", () => navegacion.classList.add("desplegado"));
	cerrar.addEventListener("click", () => navegacion.classList.remove("desplegado"));


/*****************************************************************************************************/
/*Código JS del botón al inicio en la portada de index.html*/
/*Al presionar el botón, se muestra la página principal index.html*/
	const comenzar = document.querySelector(".inicio");
	const portada = document.querySelector(".portada");
		
	comenzar.addEventListener("click", () => portada.classList.add("empezar"));
