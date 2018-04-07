var heroesList = [];

function prepaerDataHero(heroForm) {
    var hero = {
        name: heroForm.name.value,
        price: heroForm.price.value,
        img: heroForm.photo.value,
        desc: 'ddddddddd'
    }
    return hero;
}

function addHero(hero) {
    heroesList.push(hero);
    console.log(heroesList);

    saveToLocalStorage();
}

function deleteHero(hero) {
    var list = [];
    heroesList.forEach(function (hero) {
        if(heroName !== hero.name){
            list.push(hero);
        }
    });

    heroesList = list;

    saveToLocalStorage();
    clearRegions();
    showHeroListView();
}

function loadMockHeroes() {
    var mockHeroesList = [
        {
            name: "Thor",
            price: 5000,
            img: 'thor.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Superman",
            price: 7000,
            img: 'superman.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Batman",
            price: 3000,
            img: 'batman.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Hulk",
            price: 4000,
            img: 'hulk.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Ironman",
            price: 9000,
            img: 'ironman.jpg',
            desc: 'lorem ipsum.....'
        },
        {
            name: "Harry Potter",
            price: 6000,
            img: 'potter.jpg',
            desc: 'lorem ipsum.....'
        }
    ];

    heroesList = heroesList.concat(mockHeroesList);

    saveToLocalStorage();
    clearRegions();
    showHeroListView();

}

function clearHerosList() {
    heroesList = [];
    saveToLocalStorage();
    clearRegions();
    showHeroListView();
}

function saveToLocalStorage() {
    var listToObject = { data: heroesList },
        heroesString = JSON.stringify(listToObject);

    localStorage.setItem('heroesList', heroesString);
}

function loadFromLocalStorage() {
    var localStorageData = localStorage.getItem('heroesList'),
        parsedLocalStorageData;

    if(!localStorageData){
        parsedLocalStorageData = {data: []};
    }else {
        parsedLocalStorageData = JSON.parse(localStorageData);
    }

    heroesList = parsedLocalStorageData.data;
}
