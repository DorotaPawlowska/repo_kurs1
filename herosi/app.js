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

