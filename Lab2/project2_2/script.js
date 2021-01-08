getString();

function getString() {
    let list = prompt('Введите строку с разделителем ;', '');

    if (list && list.search(';') != -1) {
        let array = list.split(';');
        array.forEach(item => {
            if (item) {
                document.write(item + '<br>');
            }
        });
    } else {
        getString();
    }
}



