var addHeroButton = document.getElementById('addHero');

addHeroButton.addEventListener('click', function (event) {
    event.preventDefault();

    clearRegions();

    var addHeroRegion = document.getElementById('addHero-region'),
        addHeroTemplate = ''
            + '<div class="form-container">'
            + ' <form id="formHero">'
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
            + '     <button class="button" type="button" id="subButton"><span>Submit</span></button>'
            + ' </div>'
            + '</div>';

    var HTMLelement = document.createElement('div');

    HTMLelement.innerHTML = addHeroTemplate;
    addHeroRegion.appendChild(HTMLelement);

    var submitHeroButton = document.getElementById('subButton');

    submitHeroButton.addEventListener('click', function (event) {
        event.preventDefault();

        var heroForm = document.forms['formHero'],
            heroData = prepaerDataHero(heroForm);

        addHero(heroData)

    })
})