const nombre1 = Number(prompt("Entrez un nombre pour avoir sa table de multiplication jusqu'à 10:"));
let compteur = 0;
while (compteur<11) {
	console.log(`${nombre1} X ${compteur} = ${nombre1*compteur}`);
	compteur = compteur+1;
}