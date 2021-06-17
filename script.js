function func1() {
    function func1_1(q){
let res =1;
        for (let i = 1; i < q + 1; i++) {
            res *= i;

        }
       return res;
    }
   console.log( func1_1(3));
}
function func2() {
    function func2_1(fib){

        let current = 1, prev = 0, res = 0;
let str_res='';
str_res+=res.toString() + ' ';
        while (current < fib) {
            res = current + prev;
            if (res === 1) {
                str_res+=res.toString()+' ';
            }
            prev = current;
            current = res;
            if (fib < current) {
                break;
            }
            str_res+=res.toString()+' ';

        }
        return str_res;
    }
   let fib=250;
console.log(func2_1(fib));

}

function func3() {
    function func3_1(){

        let str_new = '';
        let bool = false;

        for (let i = str.length - 1; i > -1; i--) {
            str_new += str[i];
        }
        if (str === str_new) {
            bool = true;
            return str_new + ' - is a palindrome';

        } else {
            return str + ' - is not a palindrome';

        }
    }
    let str = 'iskat taksi';
   console.log(func3_1(str));
}
function func4() {
    function func4_1(str1,str2){
        let flag = true;

        let arr1 = str1.toLowerCase().split('').sort();
        let arr2 = str2.toLowerCase().split('').sort();


        if (arr1.length !== arr2.length) {
            return 'Not anagram';
        }

        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                flag = false;
                return 'Not anagram';
            }
        }

        return 'Anagram';
    }

    let str1 = 'nora';
    let str2 = 'rano';
   console.log( func4_1(str1,str2));
}

function func5() {
    function func5_1(){


        let date_diff = date2 - date1;
        return 'Number of days = ' + Math.trunc(date_diff / 8.64e+7);
    }

    let date1 = new Date(2013, 0, 25);
    let date2 = new Date(2021, 5, 1);
   console.log( func5_1(date1,date2));
}
function func6() {
    function func6_1(num){

        let str = num.toString();
        let fst = parseInt(str[0]) + parseInt(str[1]) + parseInt(str[2]);
        let sec = parseInt(str[3]) + parseInt(str[4]) + parseInt(str[5]);
        if (fst === sec) {
            return 'win';
        } else
            return 'lose';
    }
    let num = 123303;
    console.log(func6_1(num));
}
function func7() {
    function func7_1(num) {
        let n = 5;
        let str = num.toString();
        let res = 0;
        for (let i = str.length - n; i < str.length; i++) {
            res += parseInt(str[i]);
        }
        return res;
    }
    let num = 596323232324;
    console.log(func7_1(num));

}
function func8() {
    function func8_1(arr) {
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
       return count;
    }


    let arr = [1, -2, -3, -4, 5, 6, -6, 8];
   console.log( func8_1(arr));
}
function func9() {
function func9_1(arr) {
    let i;
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] === arr[i] + 1) {
        } else {
            return 'Array is not ordered'

        }
    }
    if (i === arr.length - 1) {
        return 'Array is ordered'

    }

}
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log( func9_1(arr));


}

function func10() {
function func10_1(arr) {
    let i;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] === String.fromCharCode(arr.toString().charCodeAt(0) + i)) {

        } else {
            return 'Array is not ordered'
        }
    }
    if (i === arr.length) {
        return 'Array is ordered'

    }
}
    let arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

   console.log( func10_1(arr));

}

function func11() {
function func11_1(arr) {
let res='';
    for (let i = arr.length - 1; i > -1; i--) {
        res+=arr[i]+' ';
    }
    return res;
}
    let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(func11_1(arr));
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
function func13_1(arr) {
    let res = 0;

    arr.forEach(function (item, i, array) {
        for (let i = 0; i < item.length; i++) {
            res += item[i];
        }

    });
    return  'Sum of elements in arrays = ' + res;
}
    let arr = [[1, 2, 3, 6, 7, 8], [4, 5, 1, 6, 8], [6, 2, 4]];
    console.log(func13_1(arr));
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
   return cons;

}
function func15() {
function func15_1(str) {
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
   return str_new;
}
    let str = "var_text_hello";
   console.log( func15_1(str));

}

function func16() {
function func16_1(num) {
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
return str;
}

    let num = 98959;

    console.log(func16_1(num));

}
func16()

