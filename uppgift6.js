/* Lösning till Uppgift 6. Av Joakim Möller, 2023
I denna koden använder vi oss utav en arrow funktion samt en forEach-loop
för att få reda på vilken sträng i arrayen som är längst. I detta fallet
är det Helsingborg.
*/
"use strict";
/* Skapar en arrow-funktion med en foreach loop. longestcity sparar första värdet från arrayen.
Loopen loopar då igenom och jämför ifall nästa i arrayen är längre än det sparade värdet i lonestCity.
Ifall värdet är längre ändrar longestCity sitt värde till currentCity (det nuvarande värdet i loopen)
och kör därefter klar loopen med samma mönster. Tillsist när loopen är färdig 
returnerar man tillbaka longestCity.*/
const long_string = city => {
    let longestCity = city[0];
    city.forEach((currentCity) => {
        if (currentCity.length >= longestCity.length) {
            longestCity = currentCity;
        }
    });
    return longestCity;
}
let cities = ["Ystad", "Hudviksvall", "Malmö", "Göteborg", "Helsingborg"];
let longestString = long_string(cities);
console.log(longestString);