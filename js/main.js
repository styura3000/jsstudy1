"use strict";

function slowScroll(id) {
    let offset=0;
    $('html, body').animate({scrollTop:$(id).offset().top-offset}, 1000);
    return false;
}

