class Props {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Dot extends Props {
    constructor(x, y) {
        super(x, y);
    }
}

class Line extends Props {
    constructor(x, y, x2, y2) {
        super(x, y);
        this.x2 = x2;
        this.y2 = y2;
    }
}

class Circle extends Props {
    constructor(x, y, radius) {
        super(x, y);
        this.radius = radius;
    }
}

class Ellipse extends Props {
    constructor(x, y, radius, radius2) {
        super(x, y);
        this.radius = radius;
        this.radius2 = radius2;
    }
}

class Rectangle extends Props {
    constructor(x, y, width, height) {
        super(x, y);
        this.width = width;
        this.height = height;
    }
}

let cnv = document.getElementById('canvas');
let ctx = cnv.getContext('2d');

cnv.width = cnv.offsetWidth;
cnv.height = cnv.offsetHeight;

const buttons = document.querySelectorAll('.panel-item button');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');
const modalInputs = document.querySelector('.modal__inputs');
const okayBtn = document.querySelector('#okay');
const cancelBtn = document.querySelector('#cancel');

document.body.addEventListener('keydown', (e) => {
    if (e.key == 'Escape') {
        closeModal();
    }
});

function openModal(e) {
    if (!e.target.classList.contains('active')) {
        modal.style.opacity = '1';
        modal.style.visibility = 'visible';
        overlay.style.display = 'block';
        let id = e.target.id;
    
        document.querySelector('.modal__title').textContent = 'Create ' +
        document.querySelector(`#${id}`).parentElement.querySelector('.panel-item__label').textContent;
    
        if (id == 'circle') {
            modalInputs.innerHTML = `
             <div class="modal__inputs_item">
                <label for="radius">Radius:</label>
                <input type="number" name="radius" id="radius" placeholder="px">
            </div>
    
            <div class="modal__inputs_item">
                <label for="color">Color:</label>
                <input type="color" name="color" id="color">
            </div>
    
            <div class="modal__inputs_item">
                <label for="fill">Fill/Stroke:</label>
                <input type="radio" name="fill" id="fill" checked>
                <input type="radio" name="fill" id="stroke">
            </div>
            `;
        }
    
        if (id == 'ellipse') {
            modalInputs.innerHTML = `
            <div class="modal__inputs_item">
                <label for="width">H.Radius:</label>
                <input type="number" name="width" id="width" placeholder="px">
            </div>
    
            <div class="modal__inputs_item">
                <label for="height">V.Radius:</label>
                <input type="number" name="height" id="height" placeholder="px">
            </div>

            <div class="modal__inputs_item">
                <label for="rotation">Rotation:</label>
                <input type="number" name="rotation" id="rotation" placeholder="0-360 deg" min="0" max="360">
            </div>
    
            <div class="modal__inputs_item">
                <label for="color">Color:</label>
                <input type="color" name="color" id="color">
            </div>
    
            <div class="modal__inputs_item">
                <label for="fill">Fill/Stroke:</label>
                <input type="radio" name="fill" id="fill" checked>
                <input type="radio" name="fill" id="stroke">
            </div>
            `;
        }

        if (id == 'rectangle') {
            modalInputs.innerHTML = `
            <div class="modal__inputs_item">
                <label for="width">Width:</label>
                <input type="number" name="width" id="width" placeholder="px">
            </div>
    
            <div class="modal__inputs_item">
                <label for="height">Height:</label>
                <input type="number" name="height" id="height" placeholder="px">
            </div>

            <div class="modal__inputs_item">
                <label for="color">Color:</label>
                <input type="color" name="color" id="color">
            </div>
    
            <div class="modal__inputs_item">
                <label for="fill">Fill/Stroke:</label>
                <input type="radio" name="fill" id="fill" checked>
                <input type="radio" name="fill" id="stroke">
            </div>
            `;
        }
    }
    
    okayBtn.addEventListener('click', () => {
        closeModal();
    });

}

function closeModal(e) {
    modal.style.opacity = '';
    modal.style.visibility = '';
    overlay.style.display = 'none';
}

overlay.addEventListener('click', closeModal);
cancelBtn.addEventListener('click', () => {
    modal.style.opacity = '';
    modal.style.visibility = '';
    overlay.style.display = 'none';

    buttons.forEach(item => {
        item.classList.remove('active');
    });

    removeListeners();
});
buttons.forEach(item => {
    if (item.id != 'dot' && item.id != 'line' && item.id != 'clear') {
        item.addEventListener('click', openModal);
    }
});

function removeListeners() {
    cnv.removeEventListener('click', drawDot);
    cnv.removeEventListener('click', drawLine);
    cnv.removeEventListener('click', drawCircle);
    cnv.removeEventListener('click', drawEllipse);
    cnv.removeEventListener('click', drawRectangle);
}

const dotBtn = document.querySelector('#dot');
const lineBtn = document.querySelector('#line');
const circleBtn = document.querySelector('#circle');
const ellipseBtn = document.querySelector('#ellipse');
const rectangleBtn = document.querySelector('#rectangle');
const clearBtn = document.querySelector('#clear');

dotBtn.addEventListener('click', (e) => {
    removeListeners();

    if (!dotBtn.classList.contains('active')) {
        buttons.forEach(item => {
            item.classList.remove('active');
        });

        cnv.addEventListener('click', drawDot);
        dotBtn.classList.add('active');
    } else {
        cnv.removeEventListener('click', drawDot);
        dotBtn.classList.remove('active');
    }
});


function drawDot(e) {
    const newFigure = new Dot(e.offsetX, e.offsetY);
    ctx.beginPath();
    ctx.arc(newFigure.x, newFigure.y, 2, 0, 2 * Math.PI);
    ctx.fill();  
}

lineBtn.addEventListener('click', (e) => {
    removeListeners();

    if (!lineBtn.classList.contains('active')) {
        buttons.forEach(item => {
            item.classList.remove('active');
        });

        cnv.addEventListener('click', drawLine);
        lineBtn.classList.add('active');
    } else {
        cnv.removeEventListener('click', drawLine);
        lineBtn.classList.remove('active');
    }
});

let clickCount = 0;

function drawLine(e) {
    let x, y, x2, y2;

    if (clickCount == 0) {
        x = e.offsetX;
        y = e.offsetY;
        ctx.beginPath();
        ctx.moveTo(x, y);
        clickCount++;
    } else {
        x2 = e.offsetX;
        y2 = e.offsetY;
        const newFigure = new Line(x, y, x2, y2);
        ctx.lineTo(newFigure.x2, newFigure.y2);
        ctx.stroke();
        clickCount = 0;
    }
}

circleBtn.addEventListener('click', (e) => {
    removeListeners();
    if (!circleBtn.classList.contains('active')) {
        buttons.forEach(item => {
            item.classList.remove('active');
        });

        cnv.addEventListener('click', drawCircle);
        circleBtn.classList.add('active');
    } else {
        cnv.removeEventListener('click', drawCircle);
        circleBtn.classList.remove('active');
    }
});

function drawCircle(e) {
    const radius = document.querySelector('#radius').value;
    const color = document.querySelector('#color').value;
    const radio = document.querySelectorAll('input[type="radio"]');
    const newFigure = new Circle(e.offsetX, e.offsetY, radius);
    ctx.beginPath();
    ctx.arc(newFigure.x, newFigure.y, newFigure.radius, 0, 2 * Math.PI);
    if (radio[0].checked) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}

ellipseBtn.addEventListener('click', (e) => {
    removeListeners();

    if (!ellipseBtn.classList.contains('active')) {
        buttons.forEach(item => {
            item.classList.remove('active');
        });

        cnv.addEventListener('click', drawEllipse);
        ellipseBtn.classList.add('active');
    } else {
        cnv.removeEventListener('click', drawEllipse);
        ellipseBtn.classList.remove('active');
    }
});

function drawEllipse(e) {
    const radius = document.querySelector('#width').value;
    const radius2 = document.querySelector('#height').value;
    const rotation = document.querySelector('#rotation').value;
    const color = document.querySelector('#color').value;
    const radio = document.querySelectorAll('input[type="radio"]');
    const newFigure = new Ellipse(e.offsetX, e.offsetY, radius, radius2);
    ctx.beginPath();
    ctx.ellipse(newFigure.x, newFigure.y, newFigure.radius, newFigure.radius2, rotation / 180 * Math.PI, 0, 2 * Math.PI);
    if (radio[0].checked) {
        ctx.fillStyle = color;
        ctx.fill();
    } else {
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}

rectangleBtn.addEventListener('click', (e) => {
    removeListeners();

    if (!rectangleBtn.classList.contains('active')) {
        buttons.forEach(item => {
            item.classList.remove('active');
        });

        cnv.addEventListener('click', drawRectangle);
        rectangleBtn.classList.add('active');
    } else {
        cnv.removeEventListener('click', drawRectangle);
        rectangleBtn.classList.remove('active');
    }
});

function drawRectangle(e) {
    const width = document.querySelector('#width').value;
    const heigth = document.querySelector('#height').value;
    const color = document.querySelector('#color').value;
    const radio = document.querySelectorAll('input[type="radio"]');
    const newFigure = new Rectangle(e.offsetX, e.offsetY, width, heigth);
    ctx.beginPath();
    if (radio[0].checked) {
        ctx.fillStyle = color;
        ctx.fillRect(newFigure.x, newFigure.y, newFigure.width, newFigure.height);
    } else {
        ctx.strokeStyle = color;
        ctx.strokeRect(newFigure.x, newFigure.y, newFigure.width, newFigure.height);
    }
}

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, cnv.width, cnv.height);
    ctx.fillStyle = '#000';
});
    
    
    
