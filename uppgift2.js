/* Lösning till Uppgift 2. Av Joakim Möller, 2023
Denna uppgift räknar ut femmans multiplikationstabell genom att 
kalla på en funktion, som använder en loop för att 
multiplicera fem med 1-10. 
*/
"use strict";

function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let multiply = i * number;
        console.log(i + " * " + number + " = " + multiply);
    }
}
multiplicationTable(5);

