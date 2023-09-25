/* Lösning till Uppgift 4. Av Joakim Möller, 2023
I denna koden skapar man en tom array och därefter lägger till och modifierar arrayen 
med hjälp av pop, splice, unshift, push. Därefter skapas det en for-loop som
skriver ut hela arrayen efter alla ändringar till konsolen. 
*/
"use strict";

let colors = [];

//Lägger till värden i arrayen
colors[0] = "Blå";
colors[1] = "Grön";
colors[2] = "Lila";
colors[3] = "Rosa";
colors[4] = "Brun";

//Modifierar arrayen genom att ta bort samt lägga till olika värden
//Tar bort index 1, "Grön"
colors.splice(1, 1);

//Lägger till "Svart" först i arrayen 
colors.unshift("Svart");

//Raderar sista värdet i arrayen
colors.pop();

//Lägger till ett nytt värde "Vit" i slutet av arrayen
colors.push("Vit");

//Skriver ut arrayen med hjälp av en for-loop till konsolen. 
colors.forEach((color) => console.log(color));



