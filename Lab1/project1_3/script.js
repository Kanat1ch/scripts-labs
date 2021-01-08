askName();

function askName() {
    let name = prompt('Введите своё имя');

    if (name) {
        let isCorrect = confirm('Подтвердите правильность введенных данных: ' + name);

        if (isCorrect) {
            alert('Привет, ' + name);
        } else {
            notCorrect();
        }
    } else {
        notCorrect();
    }
}



function notCorrect() {
    askName();
}