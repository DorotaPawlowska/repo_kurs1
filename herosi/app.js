console.log("hej");

var heroesList = [
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

var heroesListRegion = document.getElementById('heroesList-region');

heroesList.forEach(function (hero) {
    var element = document.createElement('div');
    var template = ''
        + '<div class="hero-item">'
        + ' <div>'
        + '     <img src="images/heroes/'+ hero.img +'" alt="' + hero.name + '">'
        + ' </div>'
        + ' <div>'
        + '     <span>'+ hero.name +'</span>'
        + '     <span>'+ hero.price +' zł/h</span>'
        + ' </div>'
        + '</div>';

    element.innerHTML = template;
    heroesListRegion.appendChild(element);
});

var addHeroButton = document.getElementById('addHero');

addHeroButton.addEventListener('click', function (event) {
    event.preventDefault();



    var addHeroRegion = document.getElementById('addHero-region'),
        addHeroTemplate = ''
            + '<div class="form-container">'
            + ' <form>'
            + '     <h1>Dodaj Herosa</h1>'
            + '     <div class="form-group">'
            + '         <input type="text" name="name" />'
            + '         <label class="control-label" for="name">Nazwa Bohatera</label><i class="bar"></i>'
            + '     </div>'
            + '     <div class="form-group">'
            + '         <input type="text" name="photo" />'
            + '         <label class="control-label" for="photo">Adres/nazwa zdjęcia</label><i class="bar"></i>'
            + '     </div>'
            + '     <div class="form-group">'
            + '         <input type="text" name="price" />'
            + '         <label class="control-label" for="price">Cena wynajmu /h</label><i class="bar"></i>'
            + '     </div>'
            + '     <div class="form-group">'
            + '         <textarea></textarea>'
            + '         <label class="control-label" for="textarea">Opis Bohatera</label><i class="bar"></i>'
            + '     </div>'
            + ' </form>'
            + ' <div class="button-container">'
            + '     <button class="button" type="button"><span>Submit</span></button>'
            + ' </div>'
            + '</div>';

    var HTMLelement = document.createElement('div');

    HTMLelement.innerHTML = addHeroTemplate;
    addHeroRegion.appendChild(HTMLelement);

})
