// function stabilityArray(arr){
//     let len = arr.length;
//     for (let i = 0; i < len-1; i++) {
//         if (Math.abs(arr[i] -arr[i+1]) > 5) {
//             return false;
//         }
//     }
//     return true;
// }

function directionOfReading(numbers){
    let len = numbers.length
    let tempArr = [];
    // let numberss = [];
    let result = [];
    for (let i = 0; i < len; i++) {
        let number = numbers[i].toString().split('');
        while (number.length < len) {
            number.unshift('0');
        }
        // console.log(number)
        tempArr.push(number);

        }
    for (let i = 0; i < tempArr.length; i++) {
        let sum = ''
        for (let j = 0; j < tempArr.length; j++) {
            sum += tempArr[j][i];
        }
        sum = +sum;
        result.push(sum);
    }
    console.log(result)
    return result;


}

 let numbers = [12, 345, 67, 5];

directionOfReading(numbers)

// let num =2
// console.log(num.toString())

// function countPerfectTeam(a,b,c){
   
//     if ((a == 0 && b == 0 && c == 0) || (a + b +c < 3)) return 0;

//     let min = Math.min(a, b, c);
//     if (min == a || min == b) return min;
//     if (min == c) {
//         let min2 = Math.min(a-c, b-c);
//     }

// }

// function popularWord(x){
//     let words = x.trim().split(" ");
//     console.log(words)
//     let obj = {}
//     for (let i = 0; i < words.length; i++) {
//         if (obj[words[i]]) {
//             obj[words[i]] += 1;
//         } else {
//             obj[words[i]] = 1;
//         }
//     }
//     console.log(obj)
//     let keysSorted = Object.keys(obj).sort(function(a,b) {return obj[a]-obj[b]})
//     return Object.keys(keysSorted)[0];
// }

// let x = " this is the test  ";
// popularWord(x);

