const customers = [
    {id: 1, name: 'Ilya Kanatnikov', email: 'ilyakanatnikov@mail.ru'},
    {id: 2, name: 'Ivan Ivanov', email: 'ivanivanov@mail.ru'},
    {id: 3, name: 'Petr Petrov', email: 'petrpetrov@mail.ru'}
];

const ticket = {
    customerId: null,
    departure: '',
    arrival: '',
    date: '',
    departureTime: '',
    arrivalTime: ''
};

const hotel = {
    customerId: null,
    room: null,
    date: ''
};

const visa = {
    customerId: null,
    daysPeriod: null,
    isSchengen: false
};

const req = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Заказ билета...');
        ticket.customerId = customers[0].id;
        ticket.departure = 'Orel';
        ticket.arrival = 'Moscow';
        ticket.date = '03 Dec 2020';
        ticket.departureTime = '08:05';
        ticket.arrivalTime = '09:55';
    }, 2000);
    resolve();
}).then(() => {
    setTimeout(() => {
        console.log('Бронирование гостиницы...');
        hotel.customerId = customers[0].id;
        hotel.room = 205;
        hotel.date = '03 Dec 2020';
    }, 4000);
}).then((customerId) => {
    setTimeout(() => {
        console.log('Оформление визы...');
        visa.customerId = customers[0].id;
        visa.daysPeriod = 20;
        visa.isSchengen = true;
    }, 6000);
}).then(() => {
    setTimeout(() => {
        console.log(customers[0]);
        console.log(ticket);
        console.log(hotel);
        console.log(visa);
    }, 8000);
}).catch(() => {
    console.log('Что-то пошло не так...');
});
