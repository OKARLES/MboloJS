const moyenne = Number(prompt("Entrez votre moyenne :"));

	if (moyenne<10){
		alert("votre moyenne est insuffisante pour avoir une mention");
	}
	if (moyenne===10||moyenne===11){
		alert("votre mention est Passable");
	}
	if (moyenne===12||moyenne===13){
		alert("Votre mention est Assez bien");
	}
	if (moyenne===14||moyenne===15) {
		alert("Votre mention est Bien");
	}
	if (moyenne>15&&moyenne<20){
		alert("Votre mention est Très bien");
	}
	if (moyenne===20) {
		alert("Votre mention est Très Excellente");
	}
	if (moyenne<0||moyenne>20) {
		alert("Cette moyenne n'est peut être pas repertoriée");	
	}
