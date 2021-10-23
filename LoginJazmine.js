function Validar(){
	//declarar las varibles
	var U,C;
	//recuperar los datos
	U=document.getElementaryById("Usu").value;
	C=document.getElementaryById("Con").value;
	//Validar los datos
	if (U=="Jazmine"&&C=="12345") {
		alert("Usuario y Contraseña correctos");
		window.open("Suma.html");
		document.getElementaryById("Usu").value="";
		document.getElementaryById("Con").value="";
	}
	 else {
	 	alert("Usuario y Contraseña Incorrectos");
	 	document.getElementaryById("Usu").value="";
	 	docyment.getElementaryById("Con").value="";
	 }
}