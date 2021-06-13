function func1() {
    let q = 10;
    let res = 1;
    for (let i = 1; i < q + 1; i++) {
        res *= i;
        console.log(res);
    }
}

function func2() {
    let fib = 250;
    let current = 1, prev = 0, res = 0;

    console.log(res);
    while (current < fib) {
        res = current + prev;
        if (res === 1) {
            console.log(res);
        }
        prev = current;
        current = res;
        if (fib < current) {
            break;
        }
        console.log(res);
    }


}


function func3() {
    let str = 'iskat taksi';
    let str_new = '';
    let bool = false;

    for (let i = str.length - 1; i > -1; i--) {
        str_new += str[i];
    }
    if (str === str_new) {
        bool = true;
        console.log(bool);
        console.log(str_new + ' - is a palindrome');

    } else {
        console.log(bool);
        console.log(str + ' - is not a palindrome');

    }
}

function func4() {

    let flag = true;
    let str1 = 'nora';
    let str2 = 'rano';
    let arr1 = str1.toLowerCase().split('').sort();
    let arr2 = str2.toLowerCase().split('').sort();


    if (arr1.length !== arr2.length) {
        console.log('Not anagram');
        return;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            flag = false;
            console.log('Not anagram');

            return;
        }
    }

    console.log('Anagram');


}


function func5() {

    let date1 = new Date(2013, 0, 25);
    let date2 = new Date(2021, 5, 1);

    let date_diff = date2 - date1;

    console.log('Number of days = ' + Math.trunc(date_diff / 8.64e+7));


}


function func6() {
    let num = 123303;
    let str = num.toString();
    let fst = parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2]);
    let sec = parseInt(str[3]) + parseInt(str[4]) + parseInt(str[5]);
    if (fst === sec) {
        console.log('win');
    } else
        console.log('lose');

}

function func7() {
    let num = 596323232324;
    let n = 5;
    let str = num.toString();
    let res = 0;
    for (let i = str.length - n; i < str.length; i++) {
        res += parseInt(str[i]);
    }
    console.log(res);
}

function func8() {
    let arr = [1, -2, -3, -4, 5, 6, -6, 8];
    let count = 0;
    for (let i = 0; i < arr.length; i++)
        if (arr[i] > 0) {
            if (arr[i + 1] < 0) {
                count++;
            }
        } else {
            if (arr[i + 1] > 0) {
                count++;
            }
        }
    console.log(count);
}

function func9() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    let i;
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] === arr[i] + 1) {
        } else {
            console.log('Array is not ordered');
            break;
        }
    }
    if (i === arr.length - 1) {
        console.log('Array is ordered');

    }

}

function func10() {
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    let i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === String.fromCharCode(arr.toString().charCodeAt(0) + i)) {

        } else {
            console.log('Array is not ordered');
            break;
        }
    }
    if (i === arr.length) {
        console.log('Array is ordered');

    }
}

function func11() {
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    for (let i = arr.length - 1; i > -1; i--) {
        console.log(arr[i]);
    }
}

function func12() {
    let res = '';
    for (let j = 1; j < 10; j++) {
        for (let i = 0; i < j; i++) {
            res += j.toString();
        }
        console.log('_' + res + '_')
        res = '';
    }
}

function func13() {
    let arr = [[1, 2, 3, 6, 7, 8], [4, 5, 1, 6, 8], [6, 2, 4]];
    let res = 0;

    arr.forEach(function (item, i, array) {
        for (let i = 0; i < item.length; i++) {
            res += item[i];
        }

    });
    console.log('Sum of elements in arrays = ' + res);
}

function func14() {
    let sum = 0;
    let count = 0;
    let cons = '';
    for (let i = 1; i < 2021; i++) {
        for (let j = 0; j < i.toString().length; j++) {
            sum += parseInt(i.toString()[j]);


        }
        if (sum === 13) {
            count++;
            cons += i + ' ';

        }
        sum = 0;
    }
    console.log(count);
    console.log(cons);

}

function func15() {
    let str = "var_text_hello";
    let str_new = '';
    for (let i = 0; i < str.length; i++) {
        if (str[i] === '_') {

        } else {
            if (str[i - 1] === '_') {
                str_new += str[i].toUpperCase();

            } else
                str_new += str[i];


        }
    }
    console.log(str_new);

}

function func16() {
    let num = 98959;
    let sum = 0;
    let length = num.toString().length;
    let str = num.toString();

    while (length > 1) {
        for (let i = 0; i < str.length; i++) {
            sum += parseInt(str[i]);
        }
        str = sum.toString();
        sum = 0;
        length = str.length;
    }
    console.log(str);


}

