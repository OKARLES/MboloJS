const nom = prompt("Entrez votre nom s'il vous plaît :");
const sexe = prompt("Entrez votre sexe s'il vous plaît (masculin ou feminin) :");

//pour le neophyte les 2 barres dans mes conditions donc les termes entre parenthèse après if et else ne sont pas des i mais un type de barres juste en bas a droite du bouton 6
if (sexe==="feminin"||sexe==="femme") {
	alert (`Bonjour madame ${nom}`);
}
if (sexe==="masculin"||sexe==="homme") {
	alert (`Bonjour monsieur ${nom}`);
}
else {
	alert (`Je ne connais pas ce sexe ${nom}`);
}