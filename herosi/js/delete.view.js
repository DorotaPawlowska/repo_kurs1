function removeHeros(event) {
    event.preventDefault();
    clearRegions();

    var removeHeroRegion = document.getElementById('removeHero-region');
    var element = document.createElement('div');
    var template = ''
            +'<div class="form-container">'
            +'    <form id="formDelete">'
            +' <h1>Usuń Herosa :-(</h1>'
            +'        <div class="form-group">'
            +'            <select name="hero" id="heroSelect">'
            +'                 <option>--opcje--</option>'
            +               optionString()
            +'            </select>'
            +'            <label class="control-label" for="select">Wybierz istniejącego Heroesa</label><i class="bar"></i>'
            +'        </div>'
            +'    </form>'
            +'    <div class="button-container">'
            +'      <button class="button" type="button" id="deleteHero"><span>Usuń</span></button>'
            +'   </div>'
            +'</div>';

        element.innerHTML = template;
        removeHeroRegion.appendChild(element);

        var deleteHeroButton = document.getElementById('deleteHero');

        deleteHeroButton.addEventListener('click', function (event) {
        event.preventDefault();

        //
        // var heroDeleteForm = document.forms['formDelete'],
        //     heroData = prepaerDataHero(heroDeleteForm);
        //
        // addHero(heroData);
        // clearRegions();
        // showHeroListView();
    })

}

function optionString() {
    var text = '';
    heroesList.forEach(function (hero) {
        text = text + '<option>'+hero.name+'</option>';
    });
    return text;
}