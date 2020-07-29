const montant = Number(prompt("entrez le montant de votre facture :"));

//je crée une fonction qui va s'occuper de calculer la remise.
function remise(){
	alert(`Votre remise est de ${(montant*10)/100}`);
}
//je fais un appel de la fonction. je l'avais d'abord fait avec un console.log mais comme j'ai vu que ça pouvait aussi marcher ainsi j'ai donc utilisé la méthode ci dessous je ne sais pas si c'est une bonne pratique.
if (montant>=40000){
	remise();
}
else {
	alert("Vous n'êtes pas éligible a l'offre de remise");
}