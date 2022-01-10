// JavaScript Document
function imc(frmdatos){
	var peso, estatura;
	
	if(frmdatos.txtpeso.value.length>0 && isNaN(frmdatos.txtpeso.value)==false){
		
	peso= parseInt(frmdatos.txtpeso.value);
	estatura= parseInt(frmdatos.txtestatura.value);
	
	var indice;
	indice=peso/Math.pow(estatura/100,2);
	frmdatos.txtresultado.value=indice;
}
else{
	alert("Introduce solo numeros");
	frmdatos.txtpeso.value="";
	frmdatos.txtestatura.value="";
	frmdatos.txtestatura.focus();
   }
} 