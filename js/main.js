"use strict";
// let date=new Date();

// let text=`Год сейчас - ${date.getFullYear()}`;
// text += `\nМесяц сейчас - ${date.getMonth()}`;
// text += `\nДата сейчас - ${date.getDate()}`;
// text += `\nЧасов сейчас - ${date.getHours()}`;
// text += `\nМинут сейчас - ${date.getMinutes()}`;
// text += `\nСекунд сейчас - ${date.getSeconds()}`;
// alert(text);

let myDate=new Date(1999, 10,12, 14,32,10);
myDate.setFullYear(1750);
let text=`Год сейчас - ${myDate.getFullYear()}`;
text += `\nМесяц сейчас - ${myDate.getMonth()}`;
text += `\nДата сейчас - ${myDate.getDate()}`;
text += `\nЧасов сейчас - ${myDate.getHours()}`;
text += `\nМинут сейчас - ${myDate.getMinutes()}`;
text += `\nСекунд сейчас - ${myDate.getSeconds()}`;
alert(text);