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

const arrayOfRussianKeyboard = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к',
    'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
    'Del', 'Caps Lock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', '\\', 'я', 'ч', 'с', 'м', 'и',
    'т', 'ь', 'б', 'ю', '/', '▲', 'Shift ', 'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '⯇', '▼', '⯈',
];

const arrayOfEnglishKeyboard = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
    'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Del',
    'Caps Lock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
    'Shift', '\\', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '▲', 'Shift ',
    'Ctrl', 'Win', 'Alt', '', 'Alt', 'Ctrl', '⯇', '▼', '⯈',
]

const LockedButtons = ["AltLeft", "AltRight", "CapsLock", "ControlLeft", "ControlRight", "Enter", "MetaLeft", "MetaRight", "ShiftLeft", "ShiftRight", "Tab",
    "End", "Help", "Home", "Insert", "PageDown", "PageUp", "NumLock", "Numpad0", "Numpad1", "Numpad2", "Numpad3", "Numpad4", "Numpad5",
    "Numpad6", "Numpad7", "Numpad8", "Numpad9", "NumpadAdd", "NumpadBackspace", "NumpadClear", "NumpadClearEntry", "NumpadComma", "NumpadDecimal",
    "NumpadDivide", "NumpadEnter", "NumpadEqual", "NumpadHash", "NumpadMemoryAdd", "NumpadMemoryClear", "NumpadMemoryRecall", "NumpadMemoryStore",
    "NumpadMemorySubtract", "NumpadMultiply", "NumpadParenLeft", "NumpadParenRight", "NumpadStar", "NumpadSubtract", "Escape", "F1", "F2", "F3",
    "F4", "F4", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "Fn", "FnLock", "PrintScreen", "ScrollLock", "Pause", "Backspace", "Delete"
]

const arrayOfSpecials = ['Backspace', 'Tab', 'Del', 'Caps Lock', 'Enter', 'Shift', 'Shift ', 'Ctrl', 'Win', 'Alt'];

let arrayOfGeneratedButtons = [];

const input = document.createElement('textarea');
document.body.append(input);

input.style.cssText = `width:720px;
height:320px;
font-family: 'Roboto', sans-serif;
margin-bottom:10px;
font-weight:500;
font-size:17px;
`;


class KeyboardButton {
    constructor(value) {
        this._elem = document.createElement('div');
        this._elem.className = 'button';
        this._elem.style.cssText = `width : 40px ; 
        height: 40px; 
        background-color: #444444 ;
        color: white ;
        font-family: 'Roboto', sans-serif;
        font-size:16px; 
        border-radius:5px;
        display:inline;
        margin-bottom:11px;
        font-weight:400;   
        transition:all ease 0.1s;
        display: flex;
        align-items: center;
        justify-content: center;
         `;
        switch (value) {
            case 'Backspace':
                this._elem.style.width = '99px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case 'Caps Lock':
                this._elem.style.width = '99px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case 'Tab':
                this._elem.style.width = '51px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case 'Del':
                this._elem.style.width = '45px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case 'Ctrl':
                this._elem.style.width = '63px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case '':
                this._elem.style.width = '285px';
                break;
            case 'Shift':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                this._elem.style.width = '99px';
                break;
            case 'Shift ':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                value = value.slice(0, value.length - 1);
                break;
            case 'Alt':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case 'Win':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case '▲':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case '⯈':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case '⯇':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case '▼':
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            case 'Enter':
                this._elem.style.width = '88px';
                this._elem.style.backgroundColor = '#222222';
                this._elem.style.fontWeight = '700';
                break;
            default:
                break;
        }
        this.setButton = value;
        arrayOfGeneratedButtons.push(this._elem);
    }

    set setButton(name) {
        this._elem.innerHTML = name;
        if (name == 'Backspace' || name == 'Caps Lock' || name == 'Tab' || name == 'Del' ||
            name == 'Ctrl' || name == 'Shift' || name == 'Shift ' || name == 'Alt' ||
            name == 'Win' || name == '▲' || name == '⯈' || name == '⯇' || name == '▼' || name == 'Enter')
            this._elem.classList.add('special');
    }

    get getButton() {
        return this._elem;
    }
}


const Newtable = this.document.createElement('div');
this.document.body.append(Newtable);
Newtable.className = 'table';
Newtable.style.cssText = `width:100%;
transition:all ease 0.2s;
background-color:#888888;
border:3px solid black;
padding:10px;
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

let currentLanguage;
if (!('currentKeyboard' in localStorage)) localStorage.currentKeyboard = arrayOfEnglishKeyboard[0];
if (localStorage.currentKeyboard == 'ё') currentLanguage = arrayOfRussianKeyboard;
else currentLanguage = arrayOfEnglishKeyboard;

for (let i = 0; i < currentLanguage.length; i++) {
    let temp = new KeyboardButton(currentLanguage[i]);
    if (i < 14) tr[0].append(temp.getButton);
    else if (i < 29) tr[1].append(temp.getButton);
    else if (i < 42) tr[2].append(temp.getButton);
    else if (i < 56) tr[3].append(temp.getButton);
    else tr[4].append(temp.getButton);
}

document.addEventListener('keydown', (event) => {
    let isClickOnLockedButton = false;
    let isButtonSpecial;
    if (!event.shiftKey && event.code != "CapsLock") event.preventDefault();
    //Changing language
    if (event.altKey && event.shiftKey) {
        let changingKeyboard;
        if (arrayOfGeneratedButtons[0].innerHTML === 'ё') changingKeyboard = arrayOfEnglishKeyboard;
        else changingKeyboard = arrayOfRussianKeyboard;
        for (let i = 0; i < changingKeyboard.length; i++) {
            arrayOfGeneratedButtons[i].innerHTML = changingKeyboard[i];
        }
        localStorage.currentKeyboard = arrayOfGeneratedButtons[0].innerHTML;
    }


    if (event.keyCode == 38 || event.keyCode == 37 ||
        event.keyCode == 39 || event.keyCode == 40) {
        switch (event.keyCode) {
            case 38:
                input.value += '▲';
                break;
            case 39:
                input.value += '⯈';
                break;
            case 40:
                input.value += '▼';
                break;
            case 37:
                input.value += '⯇';
                break;
        }

    } else {
        for (let i = 0; i < LockedButtons.length; i++) {
            if (event.code == LockedButtons[i]) isClickOnLockedButton = true;
        }
        if (isClickOnLockedButton == false) input.value += event.key;

        //Work of special buttons
        if (event.code == 'Backspace') input.value = input.value.slice(0, input.value.length - 1);
        if (event.code == 'Tab') input.value += '    ';
        if (event.code == 'Enter') input.value += '\n';
        if (event.shiftKey && !event.altKey) {
            for (let i = 0; i < arrayOfGeneratedButtons.length; i++) {
                isButtonSpecial = false;
                for (let j = 0; j < arrayOfSpecials.length; j++) {
                    if (arrayOfGeneratedButtons[i].innerHTML == arrayOfSpecials[j]) isButtonSpecial = true;
                }
                if (!isButtonSpecial) {
                    switch (arrayOfGeneratedButtons[i].innerHTML) {
                        case '1':
                            arrayOfGeneratedButtons[i].innerHTML = '!';
                            break;
                        case '5':
                            arrayOfGeneratedButtons[i].innerHTML = '%';
                            break;
                        case '8':
                            arrayOfGeneratedButtons[i].innerHTML = '*';
                            break;
                        case '9':
                            arrayOfGeneratedButtons[i].innerHTML = '(';
                            break;
                        case '0':
                            arrayOfGeneratedButtons[i].innerHTML = ')';
                            break;
                        case '-':
                            arrayOfGeneratedButtons[i].innerHTML = '_';
                            break;
                        case '=':
                            arrayOfGeneratedButtons[i].innerHTML = '+';
                            break;
                        default:
                            if (localStorage.currentKeyboard == 'ё') {
                                switch (arrayOfGeneratedButtons[i].innerHTML) {
                                    case '2':
                                        arrayOfGeneratedButtons[i].innerHTML = '"';
                                        break;
                                    case '3':
                                        arrayOfGeneratedButtons[i].innerHTML = '№';
                                        break;
                                    case '4':
                                        arrayOfGeneratedButtons[i].innerHTML = ';';
                                        break;
                                    case '6':
                                        arrayOfGeneratedButtons[i].innerHTML = ':';
                                        break;
                                    case '7':
                                        arrayOfGeneratedButtons[i].innerHTML = '?';
                                        break;
                                    case '.':
                                        arrayOfGeneratedButtons[i].innerHTML = ',';
                                        break;
                                    case '\\':
                                        arrayOfGeneratedButtons[i].innerHTML = '/';
                                        break;
                                    case '/':
                                        if (event.repeat == false) arrayOfGeneratedButtons[i].innerHTML = '\\';
                                        break;
                                    default:
                                        arrayOfGeneratedButtons[i].innerHTML = arrayOfGeneratedButtons[i].innerHTML.toUpperCase();
                                        break;
                                }
                            } else {
                                switch (arrayOfGeneratedButtons[i].innerHTML) {
                                    case '`':
                                        arrayOfGeneratedButtons[i].innerHTML = '~';
                                        break;
                                    case '2':
                                        arrayOfGeneratedButtons[i].innerHTML = '@';
                                        break;
                                    case '3':
                                        arrayOfGeneratedButtons[i].innerHTML = '#';
                                        break;
                                    case '4':
                                        arrayOfGeneratedButtons[i].innerHTML = '$';
                                        break;
                                    case '5':
                                        arrayOfGeneratedButtons[i].innerHTML = '%';
                                        break;
                                    case '6':
                                        arrayOfGeneratedButtons[i].innerHTML = '^';
                                        break;
                                    case '7':
                                        arrayOfGeneratedButtons[i].innerHTML = '&';
                                        break;
                                    case '.':
                                        arrayOfGeneratedButtons[i].innerHTML = '>';
                                        break;
                                    case ',':
                                        arrayOfGeneratedButtons[i].innerHTML = '<';
                                        break;
                                    case '\\':
                                        arrayOfGeneratedButtons[i].innerHTML = '|';
                                        break;
                                    case '[':
                                        arrayOfGeneratedButtons[i].innerHTML = '{';
                                        break;
                                    case ']':
                                        arrayOfGeneratedButtons[i].innerHTML = '}';
                                        break;
                                    case ';':
                                        arrayOfGeneratedButtons[i].innerHTML = ':';
                                        break;
                                    case '.':
                                        arrayOfGeneratedButtons[i].innerHTML = '>';
                                        break;
                                    case '\'':
                                        arrayOfGeneratedButtons[i].innerHTML = '\"';
                                        break;
                                    case '/':
                                        if (event.repeat == false) arrayOfGeneratedButtons[i].innerHTML = '?';
                                        break;
                                    default:
                                        arrayOfGeneratedButtons[i].innerHTML = arrayOfGeneratedButtons[i].innerHTML.toUpperCase();
                                        break;
                                }
                            }
                            break;
                    }
                }
            }
        }
    }
    /*  for (let i = 0; i < arrayOfGeneratedButtons.length; i++) {
         let result = "";
         if (arrayOfGeneratedButtons[i].innerHTML == '1' || arrayOfGeneratedButtons[i].innerHTML == '2' || arrayOfGeneratedButtons[i].innerHTML == '3' ||
             arrayOfGeneratedButtons[i].innerHTML == '4' || arrayOfGeneratedButtons[i].innerHTML == '5' || arrayOfGeneratedButtons[i].innerHTML == '6' ||
             arrayOfGeneratedButtons[i].innerHTML == '7' || arrayOfGeneratedButtons[i].innerHTML == '8' || arrayOfGeneratedButtons[i].innerHTML == '9' ||
             arrayOfGeneratedButtons[i].innerHTML == '0') result += "Digit" + arrayOfGeneratedButtons[i].innerHTML;
         else {
             switch (arrayOfGeneratedButtons[i].innerHTML) {
                 case 'ё':
                     result += "Backquote";
                     break;
                 case '-':
                     result += 'Minus';
                     break;
                 case '=':
                     result += 'Equal';
                     break;
                 case '\\':
                     result += 'Backslash';
                     break;
                 case 'х':
                     result += "BracketLeft";
                     break;
                 case 'ъ':
                     result += "BracketRight";
                     break;




                 default:
                     break;
             }
         }

         if (event.code == result) arrayOfGeneratedButtons[i].classList.add('highlight'); */
    /*   } */
});
document.addEventListener('keyup', (event) => {

});

Newtable.addEventListener('mouseover', (event) => {
    if (event.target.classList.contains('button')) event.target.style.backgroundColor = '#E67F02';
});

Newtable.addEventListener('mouseout', (event) => {
    if (event.target.classList.contains('button') && event.target.style.borderRadius != '20px') {
        if (event.target.classList.contains('special')) event.target.style.backgroundColor = '#222222';
        else event.target.style.backgroundColor = '#444444';
    }
});

let mousedownEvent;

Newtable.addEventListener('mousedown', (event) => {
    event.preventDefault();
    if (event.target.classList.contains('button')) {
        event.target.style.borderRadius = '20px';
        event.target.style.backgroundColor = '#6F22E2';
        mousedownEvent = event.target;
    }
    document.addEventListener('mouseup', (event) => {
        mousedownEvent.style.borderRadius = '5px';
        if (mousedownEvent.classList.contains('special')) mousedownEvent.style.backgroundColor = '#222222';
        else mousedownEvent.style.backgroundColor = '#444444';
    })
});