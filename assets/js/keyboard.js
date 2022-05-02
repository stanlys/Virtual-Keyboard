export let keylang = new Map();

keylang={
    "KeyA": ['a','A','ф','Ф'],
    "KeyB": ['b','B','и','И'],
    "KeyC": ['c','C','с','с'],
    "KeyD": ['d','D','в','В'],
    "KeyE": ['e','E','у','С'],
    "KeyF": ['f','F','а','А'],
    "KeyG": ['g','G','п','П'],
    "KeyH": ['h','H','р','Р'],
    "KeyI": ['i','I','ш','Ш'],
    "KeyJ": ['j','J','о','о'],
    "KeyK": ['k','K','л','Л'],
    "KeyL": ['l','L','д','Д'],
    "KeyM": ['m','M','ь','ь'],
    "KeyN": ['n','N','т','Т'],
    "KeyO": ['o','O','щ','Щ'],
    "KeyP": ['p','P','з','З'],
    "KeyQ": ['q','Q','й','Й'],
    "KeyR": ['r','R','к','К'],
    "KeyS": ['s','S','ы','Ы'],
    "KeyT": ['t','T','е','Е'],
    "KeyU": ['u','U','г','Г'],
    "KeyV": ['v','V','м','М'],
    "KeyW": ['w','W','ц','Ц'],
    "KeyX": ['x','X','ч','Ч'],
    "KeyY": ['y','Y','Н','Н'],
    "KeyZ": ['z','Z','я','Я'],
    "Semicolon" : [';',':','ж','Ж'],
    "Quote" : ["'",'"','э','Э'],
    "Comma": [",",'<','б','Б'],
    "Period" : [".",'>','ю','Ю'],
    "BracketLeft": ["[",'{','х','Х'],
    "BracketRight": ["]",'}','ъ','Ъ'],
    "Backquote" : ["\`",'|','ё','Ё'],
    "Space" : [" ",' '," ",' '],
    "Enter" : ["Enter",'Enter',"Enter","Enter"],
    "Digit1" : ["1",'!',"1","!"],
    "Digit2" : ["2",'@',"2","\""],
    "Digit3" : ["3",'#',"3","№"],
    "Digit4" : ["4",'$',"4",";"],
    "Digit5" : ["5",'%',"5","%"],
    "Digit6" : ["6",'^',"6",":"],
    "Digit7" : ["7",'&',"7","?"],
    "Digit8" : ["8",'*',"8","*"],
    "Digit9" : ["9",'(',"9",'('],
    "Digit0" : ["0",')',"0",')'],
    "Minus": ['-','_','-',"_"],
    "Equal": ['=','+','',"+"],
    "Slash": ["/","?",".",","],
    "ShiftLeft": ["Shift","Shift","Shift","Shift"],
    "ShiftRight": ["Shift","Shift","Shift","Shift"],
    "ArrowUp" : ["▲","▲","▲","▲"],
    "ArrowLeft" :['◄','◄','◄','◄'],
    "ArrowDown" :['▼','▼','▼','▼'],
    "ArrowRight" :['►','►','►','►'],
    "Backspace": ['Backspace','Backspace','Backspace','Backspace'],
    "Tab" : ['Tab','Tab','Tab','Tab'],
    "Delete" : ["Del","Del","Del","Del"],
    "CapsLock": ['CapsLock','CapsLock','CapsLock','CapsLock'],
    "ControlLeft": ['Ctrl','Ctrl','Ctrl','Ctrl'],
    "ControlRight": ['Ctrl','Ctrl','Ctrl','Ctrl'],
    "AltLeft": ['Alt','Alt','Alt','Alt'],
    "AltRight":['Alt','Alt','Alt','Alt'],
    "MetaLeft": ['Win','Win','Win','Win']
};
    export let officealSymbolsId = ['Backspace','Tab', 'ArrowRight','ArrowDown','ControlRight','MetaLeft','CapsLock','Enter',"Delete",
                                    "ShiftRight","ShiftLeft","ArrowUp",'ArrowLeft','Space','AltLeft','AltRight','ControlLeft'];
    export let KeyboardCodes = [
        ["Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace"],
        ["Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","KeyQ","BracketLeft","BracketRight","Delete"],
        ["CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter"],
        ["ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ArrowUp","ShiftRight"],
        ["ControlRight","MetaLeft","AltLeft","Space", "AltRight","ArrowLeft","ArrowDown","ArrowRight","ControlLeft"]
    ];


    export let NotWork = ['Escape','PageUp','PageDown','End','Home','PrintScreen','Insert','Pause','F12','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11'];
