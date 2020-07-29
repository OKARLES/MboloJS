let reponse = Number(prompt("Combien font 6-4 ?"));
while (reponse!==2) {
	alert("Cette réponse est incorrecte !");
	reponse = Number(prompt("Combien font 6-4 ?"))
}
if (reponse===2) {
	alert("Bravo 2 est bien le résultat !")
}