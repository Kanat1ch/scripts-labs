let days = prompt('Укажите количество прошедших дней');
if (days >= 0 && days <= 100 && days) {
    let daysLeft = 100 - days;

    switch(daysLeft % 10) {
        case 0:
            console.log('Осталось ' + daysLeft + ' дней');
            break;
        case 5:
            console.log('Осталось ' + daysLeft + ' дней');
            break;
        case 6:
            console.log('Осталось ' + daysLeft + ' дней');
            break;
        case 7:
            console.log('Осталось ' + daysLeft + ' дней');
            break;
        case 8:
            console.log('Осталось ' + daysLeft + ' дней');
            break;
        case 9:
            console.log('Осталось ' + daysLeft + ' дней');
            break;
        case 1:
            console.log('Остался ' + daysLeft + ' день');
            break;
        case 2:
            console.log('Осталось ' + daysLeft + ' дня');
            break;
        case 3:
            console.log('Осталось ' + daysLeft + ' дня');
            break;
        case 4:
            console.log('Осталось ' + daysLeft + ' дня');
            break;

    }
}
 