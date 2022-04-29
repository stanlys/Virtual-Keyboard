//import {keyboard} from 'keboard.js';
import {virtualkeyboard_template as virtualkeyboard, officealSymbolsId, keylang} from './keyboard.js';

class VirtualKeyboard {
  symbols = keylang;

  currentlang = 'en';

  constructor(lang) {
    this.currentlang = lang;
  }

  Render(lang) {
    let dbody = document.body;
    dbody.innerHTML = virtualkeyboard;
  }

  ChangeLanguage(){
    let lang = this.lang;
    let index = lang == 'en'? 0: 1;
    for (let el in this.symbols){
      document.getElementById(el).innerText = this.symbols[el][index];
    }
    this.lang =lang == 'en'? "ru":"en";
  }
}

const VK = new VirtualKeyboard('en');
const a = VK.Render(); 

const keyboard = document.body;
const buttons = document.getElementsByClassName("button");
const textarea = document.getElementById("input");

function UpperorLowisShift(event){
  if (event.code == 'ShiftLeft' || event.code == 'ShiftRight'){
    for (let btn of buttons){
      btn.classList.toggle('uppercase');
    }
  } 
}

keyboard.addEventListener('keydown', (event) => {
  event.preventDefault();
  // eslint-disable-next-line no-console
  console.log(event.code);
  console.dir(buttons);
  let pressbutton = document.getElementById(event.code);
  UpperorLowisShift(event);
  pressbutton.classList.add('press');
  textarea.textContent += event.key;
  //console.log('pressdown');
});

keyboard.addEventListener('keyup', (event) => {

  if (event.code == 'ArrowLeft')
    VK.ChangeLanguage();
    event.preventDefault();
  // eslint-disable-next-line no-console
  let pressbutton = document.getElementById(event.code);
  UpperorLowisShift(event);
  pressbutton.classList.remove('press');
  if (event.code == 'ControlLeft' &&  event.code == 'AltLeft') {
    console.log('Сменить язык!')
  }
  console.log(event.code);
});


keyboard.addEventListener('click', (event) => {
  let target = event.target;
  //если нажали на иконку - взять родителя и рабоать с ним
  if (target.parentElement.classList.contains('button')) target = target.parentElement;
  let isofficialsymbol = officealSymbolsId.includes( target.id);
  if (target.classList.contains('button')) target.classList.add('press');
  window.setTimeout(()=>{target.classList.remove('press')},250);
  console.log(isofficialsymbol);
  if (target.classList.contains('button') && !isofficialsymbol){
    console.dir(target);
    textarea.textContent += target.textContent;
  }
});
