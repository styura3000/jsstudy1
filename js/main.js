"use strict";

let string="Небольшая строка";
let text;
text="Количество символов в даннной строке - " + string.length + "</br>";
text+=`Строка в верхнем регистре - ${string.toUpperCase()}</br>`;
text+=`Строка в нижнем регистре - ${string.toLocaleLowerCase()}</br>`;
text+=`Обрезание - ${string.substring(0,9)}</br>`;
text+=`3-й символ строки - ${string.charAt(3)}</br>`;
text+=`С какого по порядку индекса начинается "стро" - ${string.indexOf("стро")}</br>`;
document.write(text);