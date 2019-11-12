let message;
let login='Директор';

(login === 'Сотрудник')
                        ? message = 'Привет':(login === 'Директор')
                        ? message = 'Здравствуйте': (login === '')
                        ? message = 'Нет логина': message = '';
document.write(message);