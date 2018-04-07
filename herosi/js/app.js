console.log("hej");

function clearRegions() {
    var regions = [
        'addHero-region',
        'heroesList-region'
    ];

    regions.forEach(function (t) {
        var DOMelement = document.getElementById(t);
        DOMelement.innerHTML = '';

    })
}


