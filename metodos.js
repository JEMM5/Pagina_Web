
//window.onload = mostrar1();
function mostrar1(){
	alert("funciona");

}
function mostrar2(){
	alert(document.images.length)
	for(var i=0; document.images.length; i++){
		configurarRollover(document.images[i]);

	}
	alert(document.images.length)
}
function mostrar3(){

}

function configurarRollover(imagen){
	imagen.foto2 = new Imagen();
	imagen.foto2.src = "foto2.jpg";
	imagen.onclick = cambiaOff;
}

function cambiaOff(){
	this.src = this.imagen.src;
}
