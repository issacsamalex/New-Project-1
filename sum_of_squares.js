function squareSum(num){
    let arrLength = num.length;
    let sum = 0;
    for(let i = 0; i<arrLength; i++){
        sum = sum + num[i]**2;
    }
    return sum;
}

let array = [2, 3, 3];
let value = squareSum(array);
console.log(value);