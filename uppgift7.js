/* Lösning till Uppgift 7. Av Joakim Möller, 2023
I denna koden använder vi oss utav en arrow funktion samt en forEach-loop
för att få reda på vilken sträng i arrayen som är längst. I detta fallet
är det Hudiksvall.
*/
"use strict";

/* Följande funktion räknar ut själva multiplikationen i sig och skriver därefter ut det i konsolen. */
function multiplicationTable(number) {
    for (let i = 1; i <= 10; i++) {
        let multiply = i * number;
        console.log(i + " * " + number + " = " + multiply);
    }
}
//Denna loopen kallar på funktionen ovan och skickar med "n" som argument. 
for (let n = 1; n <= 10; n++) {
    multiplicationTable(n);
}