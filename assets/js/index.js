/* eslint-disable no-use-before-define */
import { keylang, KeyboardCodes, officealSymbolsId } from "./keyboard.js";

class VirtualKeyboard {
  symbols = keylang;

  currentlang = "eng";

  Caps = false;

  Shift = false;

  keystatus = ["caseDown", "caseUp", "caps", "shiftCaps"];

  Caption = "RSS Виртуальная клавиатура by Stanlys";

  SystemInfo = "Клавиатура создана в операционной системе Windows";

  LangChange = "Для переключения языка комбинация: левыe ctrl + shift";

  constructor() {
    this.createDOM();
    this.LoadStatus();
  }

  createDOM() {
    function createMyElement(tagname, classlist, content) {
      const el = document.createElement(tagname);
      el.classList.add(...classlist);
      el.textContent = content;
      return el;
    }

    const wrapper = document.createElement("div");
    wrapper.classList.add("wrapper");
    wrapper.id = "keyboard";
    wrapper.append(createMyElement("p", ["title"], this.Caption));
    const textarea = createMyElement("textarea", ["textarea"], "");
    textarea.id = "textarea";
    wrapper.append(textarea);
    const keyboard = document.createElement("div");
    keyboard.classList.add("body__keyboard", "keyboard");
    keyboard.id = "keyboard";
    KeyboardCodes.forEach((rows) => {
      const row = document.createElement("div");
      row.classList.add("keyboard__row", "row");
      rows.forEach((keys) => {
        const key = document.createElement("div");
        key.classList.add("keyboard__button", "key", keys);
        key.id = keys;
        if (officealSymbolsId.includes(keys)) key.classList.add("nonsymbol");
        const rus = createMyElement("span", ["rus", "hidden"], "");
        const eng = createMyElement("span", ["eng", "hidden"], "");
        eng.append(createMyElement("span", ["caseDown", "hidden"], keylang[keys][0]));
        eng.append(createMyElement("span", ["caseUp", "hidden"], keylang[keys][1]));
        eng.append(createMyElement("span", ["shiftCaps", "hidden"], keylang[keys][0]));
        rus.append(createMyElement("span", ["caseDown", "hidden"], keylang[keys][2]));
        rus.append(createMyElement("span", ["caseUp", "hidden"], keylang[keys][3]));
        rus.append(createMyElement("span", ["shiftCaps", "hidden"], keylang[keys][2]));
        eng.append(createMyElement("span", ["caps", "hidden"], keylang[keys][1]));
        rus.append(createMyElement("span", ["caps", "hidden"], keylang[keys][3]));
        key.append(rus);
        key.append(eng);
        row.append(key);
      });
      keyboard.append(row);
    });
    wrapper.append(keyboard);
    wrapper.append(createMyElement("p", ["title"], this.SystemInfo));
    wrapper.append(createMyElement("p", ["title"], this.LangChange));
    document.body.append(wrapper);
  }

  isCaps() {
    return this.Caps;
  }

  isShift() {
    return this.Shift;
  }

  keysShowWithStatus(showstatus) {
    this.keystatus.forEach((status) => {
      const spanstatus = document.querySelectorAll(`.keyboard__button .${this.currentlang} .${status}`);
      spanstatus.forEach((span) => span.classList.add("hidden"));
    });
    // показываем подписи
    const spanstatus = document.querySelectorAll(`.keyboard__button .${this.currentlang} .${showstatus}`);
    spanstatus.forEach((span) => span.classList.remove("hidden"));
  }

  pressCaps() {
    this.Caps = !this.Caps;
    const shiftstatus = this.Shift ? "caseUp" : "caseDown";
    let status = this.Caps ? "caps" : shiftstatus;
    if (this.Caps && this.Shift) status = "shiftCaps";
    this.keysShowWithStatus(status);
    this.SaveStatus();
  }

  pressShift() {
    this.Shift = !this.Shift;
    const status = this.Shift ? "caseUp" : "caseDown";
    this.keysShowWithStatus(status);
    this.SaveStatus();
  }

  keyHide(lang) {
    const langhidebtn = document.querySelectorAll(`.keyboard__button .${lang}`);
    langhidebtn.forEach((btn) => btn.classList.add("hidden"));
    this.keystatus.forEach((status) => {
      const spanstatus = document.querySelectorAll(`.keyboard__button .${lang} .${status}`);
      spanstatus.forEach((span) => { span.classList.add("hidden"); });
    });
  }

  keyShow(lang) {
    const langshowbtn = document.querySelectorAll(`.keyboard__button .${lang}`);
    langshowbtn.forEach((btn) => { btn.classList.remove("hidden"); });
    const status = this.isCaps() ? "caps" : "caseDown";
    const spanstatus = document.querySelectorAll(`.keyboard__button .${lang} .${status}`);
    spanstatus.forEach((span) => { span.classList.remove("hidden"); });
  }

  ChangeLanguage() {
    const [langshow, langhide] = this.currentlang === "eng" ? ["rus", "eng"] : ["eng", "rus"];
    this.keyHide(langhide);
    this.keyShow(langshow);
    this.currentlang = langshow;
    this.SaveStatus();
  }

  SaveStatus() {
    localStorage.setItem("VK_Lang", this.currentlang);
    localStorage.setItem("VK_Caps", this.Caps);
    localStorage.setItem("VK_Shift", this.Shift);
  }

  LoadStatus() {
    this.currentlang = localStorage.getItem("VK_Lang") ? localStorage.getItem("VK_Lang") : "eng";
    if (localStorage.getItem("VK_Caps")) {
      const status = localStorage.getItem("VK_Caps");
      this.Caps = status === "true";
    } else this.Caps = false;
    const status = this.Caps ? ".caps" : ".caseDown";
    let spanlang = document.querySelectorAll(`.${this.currentlang}`);
    spanlang.forEach((span) => { span.classList.remove("hidden"); });
    spanlang = document.querySelectorAll(`.${this.currentlang} ${status}`);
    spanlang.forEach((span) => { span.classList.remove("hidden"); });
    if (this.Caps) {
      const btncaps = document.getElementById("CapsLock");
      btncaps.classList.add("press");
    }
  }

  GetKeyboardStatus() {
    let status = "";
    const shiftstatus = this.Shift ? "caseUp" : "caseDown";
    status = this.Caps ? "caps" : shiftstatus;
    if (this.Caps && this.Shift) status = "shiftCaps";
    return status;
  }

  GetPressKeyText(element) {
    const key = element.classList[2];
    const span = document.querySelector(`.${key} .${this.currentlang} .${this.GetKeyboardStatus()}`);
    return span.textContent;
  }

  // eslint-disable-next-line consistent-return
  keyDown(eventcode, eventrepeat) {
    if (!this.symbols[eventcode]) return 0;
    const pressbutton = document.getElementsByClassName(eventcode)[0];
    // eslint-disable-next-line no-use-before-define
    const selstart = textarea.selectionStart;
    // eslint-disable-next-line no-use-before-define
    let text = textarea.value;
    switch (eventcode) {
      case "CapsLock": {
        if (!this.Caps) {
          pressbutton.classList.add("press");
        } else pressbutton.classList.remove("press");
        this.pressCaps();
        break;
      }
      case "ShiftLeft": case "ShiftRight": {
        if (!eventrepeat) {
          this.pressShift();
          pressbutton.classList.add("press");
        }
        break;
      }
      case "AltLeft":
      case "ControlLeft":
      case "ControlRight":
      case "AltRight":
      case "MetaLeft":
      case "MetaRight": { pressbutton.classList.add("press"); break; }
      case "Delete": {
        pressbutton.classList.add("press");
        // eslint-disable-next-line no-use-before-define
        textarea.value = text.substring(0, selstart) + text.substring(selstart + 1, text.length);
        textarea.setSelectionRange(selstart, selstart);
        break;
      }
      case "Backspace": {
        pressbutton.classList.add("press");
        if (selstart === text.length) {
          textarea.value = text.slice(0, -1);
        } else {
          textarea.value = text.substring(0, selstart - 1) + text.substring(selstart, text.length);
          textarea.setSelectionRange(selstart - 1, selstart - 1);
        }
        break;
      }
      case "Tab": {
        pressbutton.classList.add("press");
        const symbol = "\t";
        textarea.value += symbol;
        textarea.setSelectionRange(selstart + 1, selstart + 1);
        break;
      }
      case "Enter": {
        pressbutton.classList.add("press");
        const symbol = "\n";
        if (selstart === text.length - 1) text += symbol;
        else {
          text = text.slice(0, selstart) + symbol + text.slice(selstart);
        }
        textarea.value = text;
        textarea.setSelectionRange(selstart + 1, selstart + 1);
        break;
      }
      default: {
        pressbutton.classList.add("press");
        const symbol = this.GetPressKeyText(pressbutton);
        if (selstart === text.length - 1) text += symbol;
        else {
          text = text.slice(0, selstart) + symbol + text.slice(selstart);
        }
        textarea.value = text;
        textarea.setSelectionRange(selstart + 1, selstart + 1);
        break;
      }
    }
  }

  // eslint-disable-next-line consistent-return
  keyUp(eventcode) {
    if (!keylang[eventcode]) return 0;
    const pressbutton = document.getElementsByClassName(eventcode)[0];
    switch (eventcode) {
      case "CapsLock": break;
      case "ShiftLeft": case "ShiftRight": {
        this.pressShift();
        pressbutton.classList.remove("press");
        break;
      }
      default: pressbutton.classList.remove("press"); break;
    }
  }
}

const VK = new VirtualKeyboard();
const keyboard = document.body;
const wrapper = document.getElementById("keyboard");
let textarea = document.getElementById("textarea");

keyboard.addEventListener("keydown", (event) => { event.preventDefault(); VK.keyDown(event.code, event.repeat); });
keyboard.addEventListener("keyup", (event) => { event.preventDefault(); VK.keyUp(event.code); });
wrapper.addEventListener("mousedown", (event) => {
  let { target } = event;
  if (target.tagName === "SPAN") target = target.parentElement.parentElement;
  VK.keyDown(target.classList[2]);
});
wrapper.addEventListener("mouseup", (event) => {
  let { target } = event;
  if (target.tagName === "SPAN") target = target.parentElement.parentElement;
  VK.keyUp(target.classList[2]);
});
textarea.addEventListener("onfocus", (event) => {
  event.defaultPrevented();
  return false;
});

// обработка одновременного нажатия клавиш

function runOnKeys(func, ...codes) {
  const pressed = new Set();
  document.addEventListener("keydown", (event) => {
    pressed.add(event.code);
    // eslint-disable-next-line no-restricted-syntax
    for (const code of codes) {
      if (!pressed.has(code)) {
        return;
      }
    }
    pressed.clear();
    func();
  });
  document.addEventListener("keyup", (event) => {
    pressed.delete(event.code);
  });
}

runOnKeys(
  () => {
    VK.ChangeLanguage();
  },
  "AltLeft",
  "ControlLeft",
);
