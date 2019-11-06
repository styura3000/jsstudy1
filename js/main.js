"use strict";

function buttonClick() {
    alert('Ты все таки ее нажал, красавчик :)')
}
let i=0;
function counterMouseAiming(element1) {
    i++;
    element1.innerHTML=`На этот объект было наведено ${i} раз`;
}