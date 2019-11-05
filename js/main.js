"use strict";

let person;
person=prompt('Как тебя зовут, дружек?');
alert(`Здравствуй ${person}`);
if (confirm(`Тебя ведь зовут ${person}? Не так ли?`)){
    alert(`Здравствуй ${person} еще раз...`);

}else alert("А зачем же ты меня обманул в первый раз....");
