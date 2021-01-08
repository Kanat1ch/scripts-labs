let array = [];

for (let i = 0; i < 10; i++) {
    array[i] = [];

    for (let j = 0; j < 10; j++) {
        array[i][j] = i * j;
    }
}

// Вместо индексов подставьте значения таблицы умножения
let result = array[9][5];

if (typeof(result) === 'number') {
    console.log(result);
} else {
    console.log('Введите корректное число');
}
