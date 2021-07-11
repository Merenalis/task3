function format(text) {
    let result, result_tmp = '';
    result_tmp = text.replace(new RegExp('([^a-zа-я])([^_]+)', 'gi'), (match, match2, match3) => {

        match3 = match3[0].toUpperCase() + match3.slice(1);
        return match2 + match3
    });
    result = result_tmp.replace(new RegExp('[_]', 'g'), '')

    return result;


}
module.exports=format;