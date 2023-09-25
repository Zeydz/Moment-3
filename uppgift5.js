/* Lösning till Uppgift 5. Av Joakim Möller, 2023
I denna koden vill man få ut totalsumma samt medelvärdet av 5 olika tal. 
Funktionen anropas i botten där man anropet innehåller 5 olika tal. 
Inuti funktionen finns då en forEach som läggerihop alla tal tillsammans, 
samt dividerar summan med antalet tal i arrayen genom .length för att få 
fram medelvärdet. 
*/
"use strict";

//Arrow funktion med en forEach loop. 
const summaryAndAverage = numbers => {
    let summary = 0;
    numbers.forEach(number => {
        summary += number;
    });
    console.log(`Totalsumma: ${summary}`);
    console.log(`Medelvärde: ${summary/numbers.length}`);
}
summaryAndAverage([10, 20, 30, 40, 50]);