export const Say = function(){
    return null;
}

export let keylang = {
    "KeyA": ['a','ф'],
    "KeyB": ['b','и'],
    "KeyC": ['c','с'],
    "KeyD": ['d','в'],
    "KeyF": ['f','а'],
    "KeyG": ['g','п'],
    "KeyH": ['h','р'],
    "KeyI": ['i','ш'],
    "KeyJ": ['j','о'],
    "KeyK": ['k','л'],
    "KeyL": ['l','д'],
    "KeyM": ['m','ь'],
    "KeyN": ['n','т'],
    "KeyO": ['o','щ'],
    "KeyP": ['p','з'],
    "KeyQ": ['q','й'],
    "KeyR": ['r','к'],
    "KeyS": ['s','ы'],
    "KeyT": ['t','е'],
    "KeyU": ['u','г'],
    "KeyV": ['v','м'],
    "KeyW": ['w','ц'],
    "KeyX": ['x','ч'],
    "KeyY": ['y','Н'],
    "KeyZ": ['z','я'],
    "Semicolon" : [';','ж'],
    "Quote" : ["'",'э'],
    "Comma": [",",'б'],
    "Period" : [".",'ю'],
    "BracketLeft": ["[",'х'],
    "BracketRight": ["]",'ъ'],
    "Backquote" : ["\`",'ё'],
}

export let virtualkeyboard_template =`<div class="centralizer">
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
            <div class="button" id="KeyQ">q</div>
            <div class="button" id="KeyW">w</div>
            <div class="button" id="KeyE">e</div>
            <div class="button" id="KeyR">r</div>
            <div class="button" id="KeyT">t</div>
            <div class="button" id="KeyY">y</div>
            <div class="button" id="KeyU">u</div>
            <div class="button" id="KeyI">i</div>
            <div class="button" id="KeyO">o</div>
            <div class="button" id="KeyP">p</div>
            <div class="button" id="BracketLeft">[</div>
            <div class="button" id="BracketRight">]</div>
            <div class="button tab nonsymbol" id="Backslash">&#92;</div>
        </div>
        <div class="row">
            <div class="button caps nonsymbol" id="CapsLock">CAPS</div>
            <div class="button" id="KeyA">a</div>
            <div class="button" id="KeyS">s</div>
            <div class="button" id="KeyD">d</div>
            <div class="button" id="KeyF">f</div>
            <div class="button" id="KeyG">g</div>
            <div class="button" id="KeyH">h</div>
            <div class="button" id="KeyJ">j</div>
            <div class="button" id="KeyK">k</div>
            <div class="button" id="KeyL">l</div>
            <div class="button" id="Semicolon">;</div>
            <div class="button" id="Quote">'</div>
            <div class="button enter nonsymbol" id="Enter">ENTER<img src="assets/icons/enter.png"></div>
        </div>
        <div class="row">
            <div class="button shiftleft nonsymbol" id="ShiftLeft">SHIFT</div>
            <div class="button" id="KeyZ">z</div>
            <div class="button" id="KeyX">x</div>
            <div class="button" id="KeyC">c</div>
            <div class="button" id="KeyV">v</div>
            <div class="button" id="KeyB">b</div>
            <div class="button" id="KeyN">n</div>
            <div class="button" id="KeyM">m</div>
            <div class="button" id="Comma">,</div>
            <div class="button" id="Period">.</div>
            <div class="button" id="Slash">/</div>
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