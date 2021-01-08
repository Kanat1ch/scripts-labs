// Самый простой способ клонирования многомерных массивов и объектов
let array = [1, 2, 3, [4, 5]],
    clonedArray = [];

// Преобразование клонированного массива в JSON формат, затем обратно в строку
let clonedArrayJSON = JSON.stringify(array);
clonedArray = JSON.parse(clonedArrayJSON);

clonedArray[3][1] = 6;
console.log(clonedArray);

// При изменении клонированного массива, основной не изменяется
console.log(array);

