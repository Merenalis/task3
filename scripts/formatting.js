const format = require('../scripts/format');

el = document.getElementById('textarea');
el.addEventListener('input', func_global);
function func_global() {
    let text = document.getElementById('textarea').value;
    let printBlock = document.getElementById("print-global__print");

    printBlock.textContent = format(text);

}
