"use strict";

function valid(formData) {
    let fail=false;
    let name=formData.name.value;
    let password=formData.password.value;
    let rePassword=formData.rePassword.value;
    let state=formData.state.value;
    let eMail=formData.eMail.value;

    if (name==="" || name===" " || name==="  ") {
        fail="Вы ввели неверное имя";
    }
    else if (eMail==="" || eMail===" " || eMail==="  ") {
        fail="Вы ввели неверный адрес электронной почты";

    }    else if (password==="" || password===" " || password==="  ") {
        fail="Вы ввели неверный пароль";
    }
    else if (rePassword!==password) {
        fail="Вы ввели неверное подтверждение пароля";
    }
    else if (state==="") {
        fail="введите пол";
    }


    if (fail) {alert(fail)} else window.location='http://ya.ru';

}