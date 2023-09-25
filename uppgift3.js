/* Lösning till Uppgift 3. Av Joakim Möller, 2023
I denna koden använder vi oss utav en array med ett flertal färger.
Koden skriver ut alla färger i konsolen, samt hur många färger där finns.
Den loopar genom alla färger och skriver ut i konsolen med hjälp av colors.length
för att få antalet färger som finns. 
*/
"use strict";

let colors = ["Röd", "Blå", "Grön", "Lila", "Vit", "Grå"];
colors.forEach((color) => console.log(color));
console.log(`Antal värden: ${colors.length} stycken`)