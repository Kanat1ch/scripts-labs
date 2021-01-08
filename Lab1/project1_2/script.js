const LENGTH = 9;
let array = '';

for (let i = 1; i <= LENGTH; i++) {
    array = '';
    for (let j = 1; j <= LENGTH; j++) {
        let tmp = i*j;
        array += tmp + '  ';
    }
    console.log(array);
}
