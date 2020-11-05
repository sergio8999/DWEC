function main(){    
    let temaMinimalistaHTML = document.getElementById('textoMinimalista');
    let temaNormalHTML = document.getElementById('textoNormal');
    temaNormalHTML.addEventListener('click',normal);
    temaMinimalistaHTML.addEventListener('click',minimalista);
}

function normal()
{ var _head = document.getElementsByTagName('head')[0];
  var _link = document.createElement('link');
_link.type = 'text/css';
_link.href = "normal.css";
_link.rel = 'stylesheet';
_head.appendChild(_link);
}

function minimalista()
{ var _head = document.getElementsByTagName('head')[0];
  var _link = document.createElement('link');
_link.type = 'text/css';
_link.href = "minimalista.css";
_link.rel = 'stylesheet';
_head.appendChild(_link);
}

window.addEventListener('load',main);