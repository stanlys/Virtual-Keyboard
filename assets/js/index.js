//import {keyboard} from 'keboard.js';
import {virtualkeyboard, officealSymbolsId} from './keyboard.js';

class VirtualKeyboard {
  ru = ['Й', 'Ц', 'У'];

  currentlang = 'ru';

  constructor(lang) {
    this.currentlang = lang;
  }

  Render(lang) {
    let dbody = document.body;
    dbody.innerHTML = virtualkeyboard;
  }

  ChangeLanguage(lang){
    console.log(this.currentlang);
  }
}

const VK = new VirtualKeyboard();
const a = VK.Render(); 

const keyboard = document.body;
const button = document.getElementsByClassName("button");
const textarea = document.getElementById("input");

keyboard.addEventListener('keydown', (event) => {
  // eslint-disable-next-line no-console
  console.log(event.code);
  let pressbutton = document.getElementById(event.code);
  pressbutton.classList.add('press');
  textarea.textContent += event.key;
  //console.log('pressdown');
});

keyboard.addEventListener('keyup', (event) => {
  // eslint-disable-next-line no-console
  let pressbutton = document.getElementById(event.code);
  pressbutton.classList.remove('press');
  if (event.code == 'ControlLeft' &&  event.code == 'AltLeft') {
    console.log('Сменить язык!')
  }
  console.log(event.code);
});


keyboard.addEventListener('click', (event) => {
  let target = event.target;
  let isofficialsymbol = officealSymbolsId.includes( target.id);
  console.log(isofficialsymbol);
  if (target.classList.contains('button') && !isofficialsymbol){
    target.classList.add('press');
    window.setTimeout(()=>{target.classList.remove('press')},250);
    console.dir(target);
    textarea.textContent += target.textContent;
  }
});
