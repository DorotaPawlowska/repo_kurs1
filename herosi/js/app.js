loadFromLocalStorage();

attachMenuListeners();
showHeroListView();

function clearRegions() {
    var regions = [
        'addHero-region',
        'heroesList-region',
        'removeHero-region',
    ];

    regions.forEach(function (t) {
        var DOMelement = document.getElementById(t);
        DOMelement.innerHTML = '';

    })
}


