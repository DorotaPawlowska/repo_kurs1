
var heroesListRegion = document.getElementById('heroesList-region');

heroesList.forEach(function (hero) {
    var element = document.createElement('div');
    var template = ''
        + '<div class="hero-item">'
        + ' <div>'
        + '     <img src='+ hero.img +'"../images/heroes" alt="' + hero.name + '">'
        + ' </div>'
        + ' <div>'
        + '     <span>'+ hero.name +'</span>'
        + '     <span>'+ hero.price +' zł/h</span>'
        + ' </div>'
        + '</div>';

    element.innerHTML = template;
    heroesListRegion.appendChild(element);
});