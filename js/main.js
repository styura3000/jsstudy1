class Task {
    constructor(title=''){
        this.title=title;
        this.done=false;
        Task.count+=1;
        console.log('Сгенерирована новая задача');
    }
    complete(){
        this.done=true;
        console.log(`Задача ${this.title} - Выполнена`);
    }
}
Task.count=0;
let task1=new Task('Убрать комнату');
let task2=new Task('помой машину тварь!!!');


console.log(task1.title);
console.log(task1.done);
console.log(task2.title);
console.log(task2.done);

task2.complete();
console.log(task2.done);

console.log(Task.count);



