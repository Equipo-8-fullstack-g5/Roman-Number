//Roman numbers
let roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD:400,
    C: 100,
    XC: 90,
    L: 50,
    XL:40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I:1
};
let answer = '';
function romanNumbers(number) {
    for (const num of roman) {
        while (number >= roman [num]) {
            answer += num;
            num -= roman[num]
        }
    }
    return answer;
}

