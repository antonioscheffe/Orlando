/*var resposta   =  confirm("Deseja cancelar");
console.log(resposta);*/

	document.querySelector("#calcular").addEventListener("click",function(){
		var valorA  =  document.querySelector("#valorA").value;
		var valorB  =  document.querySelector("#valorB").value;
		if (valorA.length >0 && valorB >0 ) {
			alert(somar(valorA,valorB));
		}else{
			alert("Digite um valor maior que 0");
	    }
	
});

function somar(a,b){
	return parseInt(a) +parseInt(b);
}



