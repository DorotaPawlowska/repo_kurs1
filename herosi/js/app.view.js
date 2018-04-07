function attachMenuListeners(){
    var addHeroButton = document.getElementById('addHero'),
        loadMockHeroesButton = document.getElementById('loadHerosButton'),
        clearHerosListButton = document.getElementById('clearHerosButton'),
        removeHButton = document.getElementById('removeHeroButton');

    addHeroButton.addEventListener('click', showHeroCreateView);
    loadMockHeroesButton.addEventListener('click', loadMockHeroes);
    clearHerosListButton.addEventListener('click', clearHerosList);
    removeHButton.addEventListener('click', removeHeros);

}