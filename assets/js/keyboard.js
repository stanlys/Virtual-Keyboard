export const Say = function(){
    return null;
}

export let virtualkeyboard =`<div class="centralizer">
    <textarea class="textarea" id="input"></textarea>
    <div class="vk">
        <div class="row" id="Keyboard">
            <div class="button" id="Backquote">\`</div>
            <div class="button" id="Digit1">1</div>
            <div class="button" id="Digit2">2</div>
            <div class="button" id="Digit3">3</div>
            <div class="button" id="Digit4">4</div>
            <div class="button" id="Digit5">5</div>
            <div class="button" id="Digit6">6</div>
            <div class="button" id="Digit7">7</div>
            <div class="button" id="Digit8">8</div>
            <div class="button" id="Digit9">9</div>
            <div class="button" id="Digit0">0</div>
            <div class="button" id="Minus">-</div>
            <div class="button" id ="Equal">=</div>
            <div class="button backspace nonsymbol" id="Backspace"><img src="assets/icons/backspace.png"></div>
        </div>
        <div class="row">
            <div class="button tab nonsymbol" id="Tab">TAB</div>
            <div class="button" id="KeyQ">Q</div>
            <div class="button" id="KeyW">W</div>
            <div class="button" id="KeyE">E</div>
            <div class="button" id="KeyR">R</div>
            <div class="button" id="KeyT">T</div>
            <div class="button" id="KeyY">Y</div>
            <div class="button" id="KeyU">U</div>
            <div class="button" id="KeyI">I</div>
            <div class="button" id="KeyO">O</div>
            <div class="button" id="KeyP">P</div>
            <div class="button" id="BracketLeft">[</div>
            <div class="button" id="BracketRight">]</div>
            <div class="button tab nonsymbol" id="Backslash">\</div>
        </div>
        <div class="row">
            <div class="button caps nonsymbol" id="CapsLock">CAPS</div>
            <div class="button" id="KeyA">A</div>
            <div class="button" id="KeyS">S</div>
            <div class="button" id="KeyD">D</div>
            <div class="button" id="KeyF">F</div>
            <div class="button" id="KeyG">G</div>
            <div class="button" id="KeyH">H</div>
            <div class="button" id="KeyJ">J</div>
            <div class="button" id="KeyK">K</div>
            <div class="button" id="KeyL">L</div>
            <div class="button" id="Semicolon">;</div>
            <div class="button" id="Quote">'</div>
            <div class="button enter nonsymbol" id="Enter">ENTER<img src="assets/icons/enter.png"></div>
        </div>
        <div class="row">
            <div class="button shiftleft nonsymbol" id="ShiftLeft">SHIFT</div>
            <div class="button" id="KeyZ">Z</div>
            <div class="button" id="KeyX">X</div>
            <div class="button" id="KeyC">C</div>
            <div class="button" id="KeyV">V</div>
            <div class="button" id="KeyB">B</div>
            <div class="button" id="KeyN">N</div>
            <div class="button" id="KeyM">M</div>
            <div class="button" id="KeyL">,</div>
            <div class="button" id="KeyL">.</div>
            <div class="button" id="KeyL">/</div>
            <div class="button shiftright nonsymbol" id="ShiftRight">SHIFT</div>
        </div>
        <div class="row">
            <div class="button nonsymbol" id="ControlLeft">CTRL</div>
            <div class="button nonsymbol">fn</div>
            <div class="button nonsymbol" id="MetaLeft"><img src="assets/icons/windows.png"></div>
            <div class="button nonsymbol" id="AltLeft">ALT</div>
            <div class="button space" id="Space"> </div>
            <div class="button nonsymbol" id="AltRight">ALT</div>
            <div class="button nonsymbol" id="ControlRight">CTRL</div>
            <div class="button nonsymbol" id="ArrowLeft"><img src="assets/icons/arrow-left.png"></div>
            <div class="arrow">
                <div class="button nonsymbol" id="ArrowUp"><img src="assets/icons/arrow-top.png"></div>
                <div class="button nonsymbol" id="ArrowDown"><img src="assets/icons/arrow-down.png"></div>
            </div>
            <div class="button nonsymbol" id="ArrowRight"><img src="assets/icons/arrow-right.png"></div>
        </div>
    </div>
    <div style="margin: 2vh auto; width: 60ch; text-align: center;"> 
        <h4>Клавиатура создана в операционной системе Windows</h4>
        <h4>Для переключения языка комбинация: левыe ctrl + shift</h4> 
    </div>
    </div>`;

    export let  officealSymbolsId = ['Backspace','Tab', 'ArrowRight','ArrowDown','ControlRight','MetaLeft','CapsLock'];