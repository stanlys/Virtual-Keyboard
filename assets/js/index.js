import { keylang, KeyboardCodes,officealSymbolsId} from './keyboard.js';

class VirtualKeyboard {
  symbols = keylang;
  currentlang = 'eng';
  Caps = false;
  Shift = false;
  keystatus = ['caseDown', 'caseUp', 'caps', 'shiftCaps'];
  Caption = 'RSS Виртуальная клавиатура by Stanlys';
  SystemInfo = 'Клавиатура создана в операционной системе Windows';
  LangChange = 'Для переключения языка комбинация: левыe ctrl + shift'; 

  constructor() {
    this.createDOM();
    this.LoadStatus();
    // console.log('проверка статуса' + this.Caps);
    // if (this.Caps == 'true') {
    //   this.keysShowWithStatus('caps');
    //   let caps = document.getElementById('CapsLock');
    //   caps.classList.add('press');
    // }else{
    //   this.keysShowWithStatus('caseDown');
    // }
  }

  createDOM(){
    function createMyElement(tagname, classlist , content){
      let el = document.createElement(tagname);
      el.classList.add(...classlist);
      el.textContent = content;
      return el;
    }
    
    const wrapper = document.createElement('div');
    wrapper.classList.add('wrapper');
    wrapper.id = 'keyboard';
    wrapper.append(createMyElement('p',['title'],this.Caption));
    const textarea = createMyElement('textarea',['textarea'],'');
    textarea.id = 'textarea';
    wrapper.append(textarea);
    const keyboard = document.createElement('div');
    keyboard.classList.add('body__keyboard', 'keyboard');
    keyboard.id = 'keyboard';
    for (let rows of KeyboardCodes){
      let row = document.createElement('div');
      row.classList.add('keyboard__row','row')
      for (let keys of rows){
        const key = document.createElement('div');
        key.classList.add('keyboard__button','key',keys);
        key.id = keys;
        if (officealSymbolsId.includes(keys)) key.classList.add('nonsymbol');
        const rus = createMyElement('span',['rus','hidden'],'');
        const eng = createMyElement('span',['eng','hidden'],'');
        eng.append(createMyElement('span', ['caseDown','hidden'], keylang[keys][0]));
        eng.append(createMyElement('span', ['caseUp','hidden'], keylang[keys][1]));
        eng.append(createMyElement('span', ['shiftCaps','hidden'], keylang[keys][0]));
        rus.append(createMyElement('span', ['caseDown','hidden'], keylang[keys][2]));
        rus.append(createMyElement('span', ['caseUp','hidden'], keylang[keys][3]));
        rus.append(createMyElement('span', ['shiftCaps','hidden'], keylang[keys][2]));
        eng.append(createMyElement('span', ['caps','hidden'], keylang[keys][1]));
        rus.append(createMyElement('span', ['caps','hidden'], keylang[keys][3]));
        key.append(rus);
        key.append(eng);
        row.append(key);
      }
      keyboard.append(row);
    }
    wrapper.append(keyboard);
    wrapper.append(createMyElement('p',['title'], this.SystemInfo));
    wrapper.append(createMyElement('p',['title'], this.LangChange));
   
    document.body.append(wrapper);
  }
  
  
  isCaps(){
    return this.Caps;
  }

  isShift(){
    return this.Shift;
  }

  keysShowWithStatus(showstatus){
    for (let status of this.keystatus){
      const spanstatus = document.querySelectorAll(`.keyboard__button .${this.currentlang} .${status}`);
      for (let span of spanstatus){
        span.classList.add('hidden');
      }
    }
    //показываем подписи 
    const spanstatus = document.querySelectorAll(`.keyboard__button .${this.currentlang} .${showstatus}`);
    for (let span of spanstatus){
      span.classList.remove('hidden');
    }
  }

  pressCaps(){
    this.Caps = !this.Caps;
    let shiftstatus = this.Shift? 'caseUp': 'caseDown';
    let status = this.Caps? 'caps': shiftstatus;
    if (this.Caps && this.Shift) status = 'shiftCaps';    
    //скрываем все подписи
   this.keysShowWithStatus(status);
   this.SaveStatus();
  }

  pressShift(){
    this.Shift = !this.Shift;
    let status = this.Shift? 'caseUp': 'caseDown';
    this.keysShowWithStatus(status);
    this.SaveStatus();
  }

  keyHide(lang){
    const langhidebtn = document.querySelectorAll('.keyboard__button .'+lang);
    for (let btn of langhidebtn){
      btn.classList.add('hidden');
    }
    for (let status of this.keystatus){
      const spanstatus = document.querySelectorAll(`.keyboard__button .${lang} .${status}`);
      for (let span of spanstatus){
        span.classList.add('hidden');
      }
    }
  }

  keyShow(lang){
    const langshowbtn = document.querySelectorAll('.keyboard__button .'+lang);
    for (let btn of langshowbtn){
      btn.classList.remove('hidden');
    }
    //показываем какую-то кнопку кнопку
    let status = this.isCaps()? 'caps':'caseDown';
    const spanstatus = document.querySelectorAll(`.keyboard__button .${lang} .${status}`);  
    for (let span of spanstatus){
      span.classList.remove('hidden');
    }
  }

  ChangeLanguage(){
    let [langshow,langhide] = this.currentlang == 'eng'? ["rus", "eng"] :["eng","rus"];
    this.keyHide(langhide);
    this.keyShow(langshow);
    this.currentlang = langshow;
    this.SaveStatus();
  }

  SaveStatus(){
    localStorage.setItem('VK_Lang',this.currentlang);
    localStorage.setItem('VK_Caps',this.Caps);
    localStorage.setItem('VK_Shift',this.Shift);
  }
  LoadStatus(){
    this.currentlang = localStorage.getItem('VK_Lang')?localStorage.getItem('VK_Lang'): 'eng';
    if (localStorage.getItem('VK_Caps')){
      let status = localStorage.getItem('VK_Caps');
      this.Caps = status =='true'? true: false;
    }else this.Caps = false;
    let status = this.Caps? '.caps':'.caseDown';

    let spanlang = document.querySelectorAll(`.${this.currentlang}`);
    for (let span of spanlang){
      span.classList.remove('hidden');
    }
    spanlang = document.querySelectorAll(`.${this.currentlang} ${status}`);
    for (let span of spanlang){
      span.classList.remove('hidden');
    }

    if (this.Caps) {
      let btncaps = document.getElementById('CapsLock');
      btncaps.classList.add('press');
    } 
  }

  GetKeyboardStatus(){
    let status = '';
    console.log(`Status 1 ${this.Shift} 2 ${this.Caps}`)
    let shiftstatus = this.Shift? 'caseUp': 'caseDown';
    status = this.Caps? 'caps': shiftstatus;
    console.log('Keyboard Status',status);
    if (this.Caps && this.Shift) status = 'shiftCaps'; 
    return status;
  }

  GetPressKeyText(element){
    let key = element.classList[2];
    const span = document.querySelector(`.${key} .${this.currentlang} .${this.GetKeyboardStatus()}`);
    console.log(`.${key} .${this.currentlang} .${this.GetKeyboardStatus()}`);
    return span.textContent;
  }

  keyDown(eventcode,eventrepeat){
    if (!this.symbols[eventcode]) return 0;
    let pressbutton = document.getElementsByClassName(eventcode)[0];
    let selstart = textarea.selectionStart;
    let text = textarea.value;
    switch (eventcode){
      case 'CapsLock': {
        if (!this.Caps) {
          pressbutton.classList.add('press'); 
        }
        else pressbutton.classList.remove('press');
        this.pressCaps();
        break;
      }
      case 'ShiftLeft': case 'ShiftRight': {
        if (!eventrepeat){
          this.pressShift();
          pressbutton.classList.add('press'); 
        }
        break;
      }
      case 'AltLeft': 
      case 'ControlLeft': 
      case 'ControlRigth': 
      case 'AltRight': 
      case 'MetaLeft': 
      case 'MetaRight': break;
      case 'Delete': {
        pressbutton.classList.add('press');
        textarea.value = text.substring(0,selstart) + text.substring(selstart+1, text.length);
        textarea.setSelectionRange(selstart, selstart);
        break;
      }
      case 'Backspace':{
        pressbutton.classList.add('press');
        if  (selstart==text.length) {
          textarea.value = text.slice(0, -1);
        }
        else{
            textarea.value = text.substring(0,selstart-1) + text.substring(selstart, text.length);
            textarea.setSelectionRange(selstart-1, selstart-1);
        }
        break;
      }
      case 'Tab':{
        pressbutton.classList.add('press');
        let symbol = '\t';
        textarea.value += symbol;
        break;
      }
      case 'Enter': {
        pressbutton.classList.add('press');
        let symbol = "\n";
        textarea.value += symbol;
        break;
      }
      default: {
        pressbutton.classList.add('press');
        let symbol = this.GetPressKeyText(pressbutton);
        if (selstart == text.length-1) 
            text +=symbol
        else{
            text = text.slice(0,selstart)+symbol+text.slice(selstart);
        }
        textarea.value = text;
        textarea.setSelectionRange(selstart+1, selstart+1);
        break;
      }
    }
    }

  keyUp(eventcode){
    if (!keylang[eventcode]) return 0;
    let pressbutton = document.getElementsByClassName(eventcode)[0];
    switch (eventcode){
    case 'CapsLock': break;
    case 'ShiftLeft': case 'ShiftRight': {
        VK.pressShift();
        pressbutton.classList.remove('press'); 
      break;
    }
    default: pressbutton.classList.remove('press'); break;
    }
  }

}

const VK = new VirtualKeyboard();

const keyboard = document.body;
const wrapper = document.getElementById('keyboard');
let textarea = document.getElementById("textarea");

keyboard.addEventListener('keydown',(event)=>{event.preventDefault(); VK.keyDown(event.code,event.repeat);});
keyboard.addEventListener('keyup', (event) =>{event.preventDefault(); VK.keyUp(event.code)});
wrapper.addEventListener('mousedown',(event)=>{
  let target = event.target;
  if (target.tagName === 'SPAN') target = target.parentElement.parentElement;
  VK.keyDown(target.classList[2]);
});
wrapper.addEventListener('mouseup',(event)=>{
  let target = event.target;
  if (target.tagName === 'SPAN') target = target.parentElement.parentElement;
  VK.keyUp(target.classList[2]);
});

textarea.addEventListener('onfocus',(event)=>{
  event.defaultPrevented();
  return false;
})

//обработка одновременног нажатия клавиш
function runOnKeys(func, ...codes) {
  let pressed = new Set();
  document.addEventListener('keydown', function(event) {
    pressed.add(event.code);
    for (let code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });
  document.addEventListener('keyup', function(event) {
    pressed.delete(event.code);
  });
}

runOnKeys(
  () => {
    VK.ChangeLanguage();
},
  "AltLeft",
  "ControlLeft"
);
