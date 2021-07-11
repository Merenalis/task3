
/*el=document.getElementById('textarea');
el.addEventListener('input',func_global);*/
function func_global(test_text) {
 /*   let text = document.getElementById('textarea').value;
    let printBlock = document.getElementById("print-global__print");
    printBlock.textContent = '';
    printBlock.textContent += func(text);*/

    function func(text) {
        let result, result_tmp = '';
        result_tmp = text.replace(new RegExp('([^a-zа-я])([^_]+)', 'gi'), (match, match2, match3) => {

            match3 = match3[0].toUpperCase() + match3.slice(1);
            return match2 + match3
        });
        result = result_tmp.replace(new RegExp('[_]', 'g'), '')

        return result;


    }
    return func(test_text);
}
module.exports = func_global;
