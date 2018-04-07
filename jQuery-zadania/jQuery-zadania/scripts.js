// $( document ).ready(function() {
//     console.log('info z jquery');
// });

/*
$(function () {
    console.log('info z jquery');
});

function fO(element) {
    $(element).fadeOut();
}

function fI(element) {
    $(element).fadeIn();
}

function fU(element) {
    $(element).slideUp();
}

function clMin(selec, clazz) {
    $(selec).removeClass(clazz);
}

function clPlu(selector, clazz) {
    $(selector).addClass(clazz);
}

function clazzToggle(selec, clazz) {
    var $elems = $(selec);
    if ($elems.hasClass(clazz)) {
        $elems.removeClass(clazz);
    } else {
        $elems.addClass(clazz);
    }
}

// działa tylko dla pierwszego/jednego selektora/diva

function clazzTogleJS(selector, clazz) {
    var colection = document.querySelectorAll(selector);

    Array.prototype.slice.call(colection);

    colection.forEach(function (t) {
        if (t.classList.contains(clazz)) {
            t.classList.remove(clazz);
        } else {
            t.classList.add(clazz);
        }
    })
}

function setTextColorAndSize(selector, colorQ, textQ) {
    var $elem = $(selector);

    $elem.css({color: colorQ, fontSize: textQ});
}

function setText(selector, newText) {
    var $selec = $(selector);
    var text = $selec.text();
    // text += newText;
    // $selec.text(text);

    // $selec.text(`${text} ${newText}`); // w nowej wersji języka ES6
    $selec.text(text + ' -> ' + newText); // w starej wersji języka ES5
}


function jMock(selector) {
    var jMockObj = {
        innerSelector: selector,

        show: function() {
            $(this.innerSelector).fadeIn();
            console.log(`${this.innerSelector} is visible now`);

            return this;
        },

        hide: function() {
            $(this.innerSelector).fadeOut();
            console.log(`${this.innerSelector} is hidden now`);

            return this;
        },

        toggle: function(clazz){
            $(this.innerSelector).toggleClass(clazz);
            console.log(`${this.innerSelector} is toggled now`);

            return this;
        }
    }
    return jMockObj;
}


var tab = ['an', 'aLIen','ArizOna','NevAda', 'eats', 'AmAnda', 'an', 'aPPle', 'Sparta', 'eAGERLY'];

function startA(tab) {

    var newTab = tab.filter(e => e.charAt(0)==='a' || e.charAt(0)==='e').map(e => e.toLowerCase(e)).join(' ');
    console.log(newTab);
}

startA(tab);

function blueBack() {
    var $ele = $('p#p-td').parent().parent().css({backgroundColor: 'blue'});
    console.log($ele);
}

blueBack();
*/


function evenRows() {
    $('tr:even').css({backgroundColor: 'blue'});
}

evenRows();

function allChildren(selector) {
    var $selek = $(selector);
    $selek.children().css({backgroundColor: 'orange'});
}

allChildren('tr#middle');

function hideSelektorSibling(selector) {
    $(selector).parent().siblings().fadeOut();
}

function hideMiddleCol(selector) {
    $(selector).parent().next().fadeOut();
}


// var tab = ['jeden', 'dwa', 'trzy', 'cztery'];

$(document).ready(function () {
    $('#guzik').click(function () {
        var $selektor = $('input[id="imie"]');
        var $logic = $selektor.val();
        $('textarea[id="area"]').val($logic);
    })
})


function przesun(element,pikselesy) {
    $(element).animate({ left: pikselesy+"px", opacity: "0.5" }, 2000);
}


