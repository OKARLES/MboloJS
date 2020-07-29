function decrire() {
	console.log(`La valeur de la variable "a" est ${a} et la valeur de la variable "b" est ${b}`);
}

const valeur1 = 5 ;
const valeur2 = "Bonjour";
let a = valeur1;
let b = valeur2;
console.log(decrire());

//maintenant on permute. j'utilise une valeur nombre et une de type chaîne pour bien montrer la permutation

console.log("Maintenant permutons ces deux valeurs");
a = valeur2
b = valeur1
console.log(decrire());