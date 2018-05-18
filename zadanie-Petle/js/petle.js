/*
*
*     _____                     _  __                               _ 
*    / ____|                   | |/ /                              (_)
*   | |     _______  ___  ___  | ' /_   _ _ __ ___  __ _ _ __   ___ _ 
*   | |    |_  / _ \/ __|/ __| |  <| | | | '__/ __|/ _` | '_ \ / __| |
*   | |____ / /  __/\__ \ (__  | . \ |_| | |  \__ \ (_| | | | | (__| |
*    \_____/___\___||___/\___| |_|\_\__,_|_|  |___/\__,_|_| |_|\___|_|
*                                                                     
*   Po tych zadaniach będizecie już mistrzami pętli w JS !
*
*/


// 1.

// Stwórz tablicę złożoną z 10 elementów i wyświetl je w konsoli po kolei
// 

let tab = [1,2,3,4,5,6,7,8,9,10];

var show = function(){
  // TODO
    for(let i = 0; i < 10; i++){
        console.log(tab[i]);
    }
};
show();

// 2.

// Wyświetl w konsoli liczby parzyste od 0 do 100
// 

var even = function () {
  // TODO
    for(let i = 0; i <= 100; i++){
        if((i%2) === 0) {
            console.log(i);
        }
    }
};
even();


// 3.

// Wyświetl w konsoli liczby od 100 do 1
// 

var hundred = function(){
  // TODO
    for(let i = 100; i > 0; i--){
        console.log(i);
    }
};
hundred();

// 4.

// Stwórz tablicę, a następnie 
// przy pomocą pętli stwórz tablicę zawierającą 
// te same elementy w odwrotnej kolejności. 
// Wyświetl je w alercie. 
//

let tablica = [9,7,5,3,1];
let kopia = [];

var reverseArray = function(){
  // TODO
    for (let i = 0, j = tablica.length; i < tablica.length, j >= 0; i++, j--){
        kopia[j] = tablica[i];
    }

    // alert(tablica);
    // alert(kopia);
};

reverseArray();

// 5.

// ** Za pomocą pętli policz silnię z dowolnej, 
// podanej liczby 
//

var factorial = function(number){
  // TODO
    let silnia = 1;
    if(number === 0){
        return silnia;
    }else {
        for(let n = 1; n <= number; n++){
            silnia = silnia * n;
        }
        return silnia;
    }
};

// 6.

// Stwórz obiekt i wyświetl na stronie wszystkie jego elementy 
// w formacie: "(klucz) wynosi (wartość)". 
// Funkcji nie wywołuj w konsoli
//

var MyObject = {
    name: "Dorota",
    surname: "Kowalska",
    age: 23,
    city: "Szczecin",
    year: 2008
};

var showObject = function(){
  // TODO
    let eleme = document.createElement('div');
    let template = '';

    for( var prop in MyObject){
        template += '<p>' + 'klucz: ' + prop + ' -> wynosi: ' + MyObject[prop] + '</p>'
    }

    eleme.innerHTML = template;
    document.getElementById('dane').appendChild(eleme);

};

showObject();

// 7.

// stwórz tablicę zawierającą 3 obiekty. 
// Wyświetl na stronie wszystkie elementy 
// wszystkich obiektów, zaznaczając którego obiektu 
// elementy są wyświetlone. 
// Funkcji nie wywołuj w konsoli
//

let MyTab = [
    {
       imie: "jola",
       nazwisko: "nowak",
       wiek: 21
    },
    {
        pierwszy: "jeden",
        drugi: "dwa",
        trzeci: "trzy",
        czwarty: "cztery"
    },
    {
        name: "Dorota",
        surname: "Kowalska",
        age: 23,
        city: "Szczecin",
        year: 2008
    }];

var showObjectArray = function(){
  // TODO

    let eleme = document.createElement('div');
    let template = '';

    for(let i = 0; i < MyTab.length; i++){
        for( var prop in MyTab[i]){
            template += '<p>' + ' obiekt na pozycji nr: ' + i + ' w tablicy -> klucz: ' + prop + ' -> wynosi: ' + MyTab[i][prop] + '</p>'
        }
    }

    eleme.innerHTML = template;
    document.getElementById('dane2').appendChild(eleme);

};

showObjectArray();

// 8.

// Stwórz tablicę złożoną z 10 kolejnych wielokrotności 
// liczby 5 za pomocą pętli while
// 

var multipleOf5 = function(){
  // TODO

    let i = 0;
    let tab = [];
    while(i < 10){
        i++;
        tab[i-1] = i * 5;
        console.log(" wartość tablicy w indeksie: " + (i-1) + " wynosi " + tab[i-1]);
    }
};

multipleOf5();

// 9.

// Wyświetl w konsoli liczby parzyste od 0 do 100 
// za pomocą pętli while
// 
console.log(" ================ pętla while ===============");

var evenNumbers = function(){
  // TODO

    let i = 0;

    while(i <=100){
        if((i%2) === 0) {
            console.log(i);
        }
        i++;
    }
};

evenNumbers();

// 10.

// Pobieraj od użytkownika liczby tak długo, 
// aż wpiszę liczbę większą niż 50. 
// Wtedy wyświetl tablicę złożoną z wpisanych 
// dotychczas liczb na stronie
//

var arrayLessThen50 = function(){    
  // TODO
}

// 11.
// Wypisz na stronie elementy poniższej tablicy 
// do elementu "stop" włącznie.
// var myArray = ['uczę', 'się', 'programować', 'stop', 'lubię', 'to']
//

var stopArray = function(){
  // TODO
}

// 12.
// Pobieraj od użytkownika liczby tak długo, 
// ż wpiszę liczbę większą niż 50. 
// Wtedy wyświetl tablicę złożoną z wpisanych 
// dotychczas liczb na stronie z ostatnią włącznie
// 

var including50 = function(){
  // TODO
}

// 13.
// Poproś użytkownika o wpisanie imienia i godziny. 
// W alercie wyświetl użytkownikowi powitanie wraz z 
// imieniem. Jeśli godzina wpisana przez użytkownika 
// jest od 6 do 12, powitanie powinno brzmieć 
// "dzień dobry", od 12 do 18 "Jak mija dzień?", 
// od 18 do północy "Dobry wieczór", 
// a od północy do 6 "idź spać!!!"
//

var nameAndHour = function(){
  // TODO
}

