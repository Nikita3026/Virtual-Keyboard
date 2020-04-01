/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable indent */
/* eslint-disable no-underscore-dangle */
document.body.style.cssText = `display:flex;
flex-direction:column;
align-items:center;
box-sizing:border-box;`;

const arrayOfRussianKeyboard = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К',
    'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
    'Del', 'Caps Lock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', '\\', 'Я', 'Ч', 'С', 'М', 'И',
    'Т', 'Ь', 'Б', 'Ю', '/', '▲', 'Shift ', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '⯇', '▼', '⯈',
];

const input = document.createElement('input');
document.body.append(input);


input.style.cssText = `width:720px;
height:320px;
margin-bottom:10px;
overflow:auto;
font-size:18px;
`;


class KeyboardButton {
    constructor(value) {
        this._elem = document.createElement('div');
        this._elem.className = 'button';
        this._elem.style.cssText = `width : 40px ; 
        height: 40px; 
        background-color: #444444 ;
        color: white ;
        font-size:16px; 
        border-radius:5px;
        display:inline;
        margin-bottom:11px;
        font-weight:500;   
        transition:all ease 0.2s; 
         `;
        switch (value) {
            case 'Backspace':
                this._elem.style.width = '99px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case 'Caps Lock':
                this._elem.style.width = '99px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case 'Tab':
                this._elem.style.width = '51px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case 'Del':
                this._elem.style.width = '45px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case 'Ctrl':
                this._elem.style.width = '63px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case '':
                this._elem.style.width = '285px';
                break;
            case 'Shift':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                this._elem.style.width = '99px';
                break;
            case 'Shift ':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                value = value.slice(0, value.length - 1);
                break;
            case 'Alt':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case 'Win':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case '▲':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case '⯈':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case '⯇':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case '▼':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            case 'Enter':
                this._elem.style.width = '88px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '800';
                break;
            default:
                break;
        }
        this.setButton = value;
    }

    set setButton(name) {
        this._elem.innerHTML = name;
    }

    get getButton() {
        return this._elem;
    }

    doubleWidth() {
        this._elem.setAttribute('colspan', 2);
    }
}


const Newtable = this.document.createElement('div');
this.document.body.append(Newtable);
Newtable.className = 'table';
Newtable.style.cssText = `width:100%;
max-width:700px;
margin:0 auto;`;


const tr = [this.document.createElement('div'), this.document.createElement('div'),
    this.document.createElement('div'), this.document.createElement('div'), this.document.createElement('div'),
];


for (let i = 0; i < tr.length; i++) {
    tr[i].style.cssText = `display:flex;
    justify-content: space-between;
    `;
    Newtable.append(tr[i]);
}


for (let i = 0; i < arrayOfRussianKeyboard.length; i++) {
    let temp = new KeyboardButton(arrayOfRussianKeyboard[i]);
    if (i < 14) tr[0].append(temp.getButton);
    else if (i < 29) tr[1].append(temp.getButton);
    else if (i < 42) tr[2].append(temp.getButton);
    else if (i < 56) tr[3].append(temp.getButton);
    else tr[4].append(temp.getButton);
}

document.addEventListener('keydown', (event) => {
    input.value += event.key;
    /* event.target.classList.add('highlight'); */
});
document.addEventListener('keyup', (event) => {
    /* event.target.classList.remove('highlight'); */
});