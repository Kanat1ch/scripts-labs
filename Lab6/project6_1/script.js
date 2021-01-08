let array = [{id: 2, name: "Организация", parentId: null},
             {id: 3, name: "Бухгалтерия", parentId: 2},
             {id: 6, name: "Отдел охраны", parentId: 2},
             {id: 7, name: "Караульная служба", parentId: 6},
             {id: 8, name: "Бюро пропусков", parentId: 6},
             {id: 12, name: "Патентный отдел", parentId: 2},
             {id: 13, name: "Лётная служба", parentId: 2},
             {id: 14, name: "Лётный отряд Боинг 737", parentId: 13},
             {id: 17, name: "Лётный отряд Боинг 747", parentId: 13},
             {id: 18, name: "1-ая авиационная эксадрилия Боинг 737", parentId: 14},
             {id: 19, name: "2-ая авиационная эскадрилия Боинг 737", parentId: 14},
             {id: 21, name: "Лётно-методический отдел", parentId: 13}
            ];

const root = document.querySelector('#root'); 
array.forEach(item => {
    const li = document.createElement('li');

    if (item.parentId === null) {
        root.append(li);
        li.innerHTML = `${item.name}<ul id="id${item.id}"></ul>`;

    } else {
        array.forEach(parents => {
            const parentEl = document.getElementById(`id${item.parentId}`);

            if (item.parentId === parents.id) {
                parentEl.append(li);
                li.innerHTML = `${item.name}<ul id="id${item.id}"></ul>`;
            }
        });
    }
});

