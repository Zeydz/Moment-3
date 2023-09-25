/* Lösning till Uppgift 8. Av Joakim Möller, 2023
Denna koden skapar en funktion som anropas, där anropet bifogar ett argument 1-3. 
När funktionen körs så kör den igenom hela switch satsen för att på så sätt få reda 
på vilket av de olika "casen" som ska skrivas ut i konsolen. 
*/
"use strict";

function printDateAndTime(option){
    /* Alla variabler som behövs. Det blev många variabler på grund av att utskriften ska vara likadan 
    som på uppgiftsinstruktionen, annars hade det inte behövts lika många variabler.
    Koden använder sig utav toLocaleDateString/TimeString för att få rätt format på dagar, månader osv.
    Detta för att slippa göra if-satser för att få fram 0 framför månad, dag och liknande. */ 
    const currentDate = new Date();
    const fullName = currentDate.toLocaleDateString("sv-SE", {weekday: "long"});
    const month = currentDate.toLocaleDateString("sv-SE", {month: "long"});
    const day = currentDate.toLocaleDateString("sv-SE", {day: "2-digit"});
    const year = currentDate.toLocaleDateString("sv-SE", {year: "numeric"});
    const clock = currentDate.toLocaleTimeString("sv-SE", {hour: "2-digit", minute:"2-digit"});
    const localDate = currentDate.toLocaleDateString("sv-SE");
    const dateMonth = currentDate.toLocaleDateString("sv-SE", {day: "2-digit", month:"2-digit"});
    //Switch satsen använder option som argument, vilket den tar från funktionen. Därefter tittar den genom de olika casen. 
    //Får den "1" som argument skriver den ut case 1 osv. 
   switch (option) {
    case 1:
        console.log(`${clock}, ${localDate}`);
        break;
    case 2:
        console.log(`${month} ${day}, ${year} - ${clock}`);
        break;
    case 3:
        console.log(`${fullName} ${dateMonth}, kl. ${clock}`);
        break;
    default:
        console.error('Fel värde: Försök igen med ett värde mellan 1-3');
        break;
   }
}
//Kallar på funktionen med angivet argument. 
printDateAndTime(1);
printDateAndTime(2);
printDateAndTime(3);