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
];


const LockedButtonsForKeydown = ['AltLeft', 'AltRight', 'CapsLock', 'ControlLeft', 'ControlRight', 'Enter', 'MetaLeft', 'MetaRight', 'ShiftLeft', 'ShiftRight', 'Tab',
  'End', 'Help', 'Home', 'Insert', 'PageDown', 'PageUp', 'NumLock', 'Numpad0', 'Numpad1', 'Numpad2', 'Numpad3', 'Numpad4', 'Numpad5',
  'Numpad6', 'Numpad7', 'Numpad8', 'Numpad9', 'NumpadAdd', 'NumpadBackspace', 'NumpadClear', 'NumpadClearEntry', 'NumpadComma', 'NumpadDecimal',
  'NumpadDivide', 'NumpadEnter', 'NumpadEqual', 'NumpadHash', 'NumpadMemoryAdd', 'NumpadMemoryClear', 'NumpadMemoryRecall', 'NumpadMemoryStore',
  'NumpadMemorySubtract', 'NumpadMultiply', 'NumpadParenLeft', 'NumpadParenRight', 'NumpadStar', 'NumpadSubtract', 'Escape', 'F1', 'F2', 'F3',
  'F4', 'F4', 'F6', 'F7', 'F8', 'F9', 'F10', 'F11', 'F12', 'Fn', 'FnLock', 'PrintScreen', 'ScrollLock', 'Pause', 'Backspace', 'Delete',
];


const arrayOfSpecials = ['Backspace', 'Tab', 'Del', 'Caps Lock', 'Enter', 'Shift', 'Shift ', 'Ctrl', 'Win', 'Alt'];


const arrayOfKeyCodes = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'Minus', 'Equal', 'Backspace',
  'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'Delete',
  'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
  'ShiftLeft', 'Backslash', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight',
  'ControlLeft', 'MetaLeft', 'AltLeft', 'Space', 'AltRight', 'ControlRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight',
];


const russianButtonsOnShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '/', '/', '\\'];
const englishButtonsOnShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '|', '<', '>', '?'];


const arrayOfGeneratedButtons = [];


const arrayOfKeysPressed = [];

const Document = this.document;

class KeyboardButton {
  constructor(value) {
    this.elem = Document.createElement('div');
    this.elem.classList.add('button');
    switch (value) {
      case 'Backspace':
        this.elem.style.width = '99px';
        break;
      case 'Caps Lock':
        this.elem.classList.add('Caps');
        break;
      case 'Tab':
        this.elem.style.width = '51px';
        break;
      case 'Del':
        this.elem.style.width = '45px';
        break;
      case 'Ctrl':
        this.elem.style.width = '63px';
        break;
      case '':
        this.elem.style.width = '285px';
        break;
      case 'Shift':
        this.elem.classList.add('Shift');
        break;
      case 'Shift ':
        this.elem.classList.add('ShiftRight');
        break;
      case 'Enter':
        this.elem.style.width = '88px';
        break;
      default:
        break;
    }
    if (value !== 'Shift ') this.setButton = value;
    else this.setButton = value.slice(0, value.length - 1);
    arrayOfGeneratedButtons.push(this.elem);
  }

  set setButton(name) {
    this.elem.innerHTML = name;
    if (name === 'Backspace' || name === 'Caps Lock' || name === 'Tab' || name === 'Del'
            || name === 'Ctrl' || name === 'Shift' || name === 'Shift ' || name === 'Alt'
            || name === 'Win' || name === '▲' || name === '⯈' || name === '⯇' || name === '▼' || name === 'Enter') this.elem.classList.add('special');
  }

  get getButton() {
    return this.elem;
  }
}


const h1 = Document.createElement('h1');
Document.body.append(h1);
h1.innerHTML = 'RSS Virtual Keyboard';


const input = Document.createElement('textarea');
Document.body.append(input);
input.classList.add('input');


const Newtable = Document.createElement('div');
Document.body.append(Newtable);
Newtable.classList.add('table');


const tr = [Document.createElement('div'), Document.createElement('div'),
  Document.createElement('div'), Document.createElement('div'), Document.createElement('div'),
];


for (let i = 0; i < tr.length; i += 1) {
  tr[i].classList.add('tr');
  Newtable.append(tr[i]);
}

function saveLayout(value) {
  if (value === 'Ё' || value === 'ё') this.localStorage.currentLayout = 'ru';
  else this.localStorage.currentLayout = 'eng';
}

function isItLocked(value) {
  for (let i = 0; i < LockedButtonsForKeydown.length; i += 1) {
    if (value === LockedButtonsForKeydown[i]) return true;
  }
  return false;
}

function isItSpecial(value) {
  for (let j = 0; j < arrayOfSpecials.length; j += 1) {
    if (value === arrayOfSpecials[j]) return true;
  }
  return false;
}


function capsUpper() {
  for (let i = 0; i < arrayOfGeneratedButtons.length; i += 1) {
    if (!isItSpecial(arrayOfGeneratedButtons[i].innerHTML)) {
      arrayOfGeneratedButtons[i].innerHTML = arrayOfGeneratedButtons[i].innerHTML.toUpperCase();
    }
  }
}


function lettersDown() {
  for (let i = 0; i < arrayOfGeneratedButtons.length; i += 1) {
    arrayOfGeneratedButtons[i].innerHTML = this.localStorage.currentLayout === 'ru' ? arrayOfRussianKeyboard[i] : arrayOfEnglishKeyboard[i];
  }
}


let currentLanguage;
if (!('currentLayout' in this.localStorage)) saveLayout(arrayOfEnglishKeyboard[0]);
if (this.localStorage.currentLayout === 'ru') currentLanguage = arrayOfRussianKeyboard;
else currentLanguage = arrayOfEnglishKeyboard;


for (let i = 0; i < currentLanguage.length; i += 1) {
  const temp = new KeyboardButton(currentLanguage[i]);
  if (i < 14) tr[0].append(temp.getButton);
  else if (i < 29) tr[1].append(temp.getButton);
  else if (i < 42) tr[2].append(temp.getButton);
  else if (i < 56) tr[3].append(temp.getButton);
  else tr[4].append(temp.getButton);
}


function addInfoAtHmtl(nameOfBlock, info) {
  const tempBlock = Document.createElement('p');
  Document.body.append(tempBlock);
  tempBlock.innerHTML = info;
  tempBlock.classList.add(nameOfBlock);
}

addInfoAtHmtl('infoAboutOS', 'This keyboard is created in the operating system \'Windows\'');
addInfoAtHmtl('infoAboutChangingLanguage', 'To switch layout, use: Ctrl + Alt');


function uppOnShiftClick() {
  let index = -1;
  for (let i = 0; i < arrayOfGeneratedButtons.length; i += 1) {
    if (!isItSpecial(arrayOfGeneratedButtons[i].innerHTML)) {
      if (this.localStorage.currentLayout === 'ru') {
        if (i < 13 || i === 27 || i === 43 || i === 53) {
          index += 1;
          if (i < 13) arrayOfGeneratedButtons[i].innerHTML = russianButtonsOnShift[i];
          else if (i === 27) arrayOfGeneratedButtons[i].innerHTML = russianButtonsOnShift[index];
          else if (i === 43) arrayOfGeneratedButtons[i].innerHTML = russianButtonsOnShift[index];
          else if (i === 53) arrayOfGeneratedButtons[i].innerHTML = russianButtonsOnShift[index];
        } else {
          arrayOfGeneratedButtons[i].innerHTML = arrayOfGeneratedButtons[i].innerHTML.toUpperCase();
        }
      } else if (this.localStorage.currentLayout === 'eng') {
        if (i < 13 || (i >= 25 && i <= 27) || i === 39 || i === 40
                    || i === 43 || (i >= 51 && i <= 53)) {
          index += 1;
          if (i < 13) arrayOfGeneratedButtons[i].innerHTML = englishButtonsOnShift[i];
          else if (i === 25) arrayOfGeneratedButtons[i].innerHTML = englishButtonsOnShift[index];
          else if (i === 26) arrayOfGeneratedButtons[i].innerHTML = englishButtonsOnShift[index];
          else if (i === 27) arrayOfGeneratedButtons[i].innerHTML = englishButtonsOnShift[index];
          else if (i === 39) arrayOfGeneratedButtons[i].innerHTML = englishButtonsOnShift[index];
          else if (i === 40) arrayOfGeneratedButtons[i].innerHTML = englishButtonsOnShift[index];
          else if (i === 43) arrayOfGeneratedButtons[i].innerHTML = englishButtonsOnShift[index];
          else if (i === 51) arrayOfGeneratedButtons[i].innerHTML = englishButtonsOnShift[index];
          else if (i === 52) arrayOfGeneratedButtons[i].innerHTML = englishButtonsOnShift[index];
          else if (i === 53) arrayOfGeneratedButtons[i].innerHTML = englishButtonsOnShift[index];
        } else {
          arrayOfGeneratedButtons[i].innerHTML = arrayOfGeneratedButtons[i].innerHTML.toUpperCase();
        }
      }
    }
  }
}


function checkChangeLanguage(value) {
  const isItKeysForChangeLanguage = [false, false];
  for (let i = 0; i < value.length; i += 1) {
    if (value[i][0] === 'Control' || value[i][0] === 'Ctrl') isItKeysForChangeLanguage[0] = true;
    if (value[i][0] === 'Alt'
            || value[i][0] === 'AltLeft'
            || value[i][0] === 'AltRight') isItKeysForChangeLanguage[1] = true;
  }
  if (isItKeysForChangeLanguage[0] === true && isItKeysForChangeLanguage[1] === true) {
    let newLayout;
    if (this.localStorage.currentLayout === 'ru') newLayout = arrayOfEnglishKeyboard;
    else newLayout = arrayOfRussianKeyboard;
    for (let i = 0; i < newLayout.length; i += 1) {
      arrayOfGeneratedButtons[i].innerHTML = newLayout[i];
    }
    saveLayout(arrayOfGeneratedButtons[0].innerHTML);
  }
}


Document.addEventListener('keydown', (event) => {
  if (!event.shiftKey && event.code !== 'CapsLock') event.preventDefault();

  // Highlight buttons
  let NumbersOfCode = 0;
  const currentKey = event.key;
  for (let i = 0; i < arrayOfKeyCodes.length; i += 1) {
    if (event.code === arrayOfKeyCodes[i]) {
      if (event.key === 'CapsLock' && !event.repeat) {
        arrayOfGeneratedButtons[NumbersOfCode].classList.toggle('highlight');
      } else {
        arrayOfGeneratedButtons[NumbersOfCode].classList.add('highlight');
        if (!event.repeat) {
          arrayOfKeysPressed.push([currentKey, arrayOfGeneratedButtons[NumbersOfCode]]);
        }
        break;
      }
    } else NumbersOfCode += 1;
  }
  if (!event.repeat) checkChangeLanguage(arrayOfKeysPressed);


  // Add inner of keys at input
  if (event.keyCode === 38 || event.keyCode === 37
        || event.keyCode === 39 || event.keyCode === 40) {
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
      default:
        break;
    }
  } else if (event.key === '&' && this.localStorage.currentLayout === 'eng') input.value += '&';
  else if (event.key === '<' && this.localStorage.currentLayout === 'eng') input.value += '<';
  else if (event.key === '>' && this.localStorage.currentLayout === 'eng') input.value += '>';
  else {
    // If button is special don't add her to input area
    let NumberOfCode = 0;
    if (!isItLocked(event.code)) {
      for (let i = 0; i < arrayOfKeyCodes.length; i += 1) {
        if (event.code === arrayOfKeyCodes[i]) {
          input.value += arrayOfGeneratedButtons[NumberOfCode].innerHTML;
          break;
        } else NumberOfCode += 1;
      }
    }

    // Work of special buttons
    switch (event.code) {
      case 'Space':
        input.value += ' ';
        break;
      case 'Backspace':
        input.value = input.value.slice(0, input.value.length - 1);
        break;
      case 'Tab':
        input.value += '    ';
        break;
      case 'Enter':
        input.value += '\n';
        break;
      case 'CapsLock':
        if (Document.querySelector('.Caps').classList.contains('highlight')) capsUpper();
        else lettersDown();
        break;
      default:
        break;
    }
    if (event.shiftKey) uppOnShiftClick();
  }


  Document.addEventListener('keyup', (e) => {
    if (e.key === 'Shift') lettersDown();
    for (let i = 0; i < arrayOfKeysPressed.length; i += 1) {
      if (e.key === arrayOfKeysPressed[i][0]
                || e.key === arrayOfKeysPressed[i][0].toUpperCase()
                || e.key === arrayOfKeysPressed[i][0].toLowerCase()) {
        arrayOfKeysPressed[i][1].classList.remove('highlight');
        arrayOfKeysPressed.splice(i, 1);
      }
    }
  });
});


Newtable.addEventListener('mouseover', (event) => {
  if (event.target.classList.contains('button') && !event.target.classList.contains('highlight')) event.target.classList.add('mouseover');
});

Newtable.addEventListener('mouseout', (event) => {
  if (event.target.classList.contains('button')) event.target.classList.remove('mouseover');
});


Newtable.addEventListener('mousedown', (event) => {
  let mousedownEvent;
  event.preventDefault();
  if (event.target.classList.contains('button')) {
    if (event.target.classList.contains('Caps')) {
      mousedownEvent = event.target;
      event.target.classList.toggle('highlight');
      if (event.target.classList.contains('Caps') && event.target.classList.contains('highlight')) capsUpper();
      else lettersDown();
    } else {
      event.target.classList.add('highlight');
      arrayOfKeysPressed.push([event.target.innerHTML, event.target]);
      mousedownEvent = event.target;
      checkChangeLanguage(arrayOfKeysPressed);
      if (!isItSpecial(event.target.innerHTML)) {
        if (event.target.innerHTML === '&amp;') input.value += '&';
        else if (event.target.innerHTML === '&lt;') input.value += '<';
        else if (event.target.innerHTML === '&gt;') input.value += '>';
        else input.value += event.target.innerHTML;
      }

      // Work of special buttons
      if (event.target.innerHTML === 'Shift') {
        uppOnShiftClick();
      }
      if (event.target.innerHTML === 'Backspace') input.value = input.value.slice(0, input.value.length - 1);
      if (event.target.innerHTML === 'Tab') input.value += '    ';
      if (event.target.innerHTML === 'Enter') input.value += '\n';
      if (event.target.innerHTML === '') input.value += ' ';
    }
  }


  Document.addEventListener('mouseup', () => {
    if (mousedownEvent !== undefined) {
      if (!mousedownEvent.classList.contains('Caps')) {
        mousedownEvent.classList.remove('highlight');
        for (let i = 0; i < arrayOfKeysPressed.length; i += 1) {
          if (mousedownEvent.innerHTML === arrayOfKeysPressed[i][0]) {
            arrayOfKeysPressed.splice(i, 1);
          }
        }
        if (mousedownEvent.innerHTML === 'Shift') lettersDown();
      }
    }
  });
});
