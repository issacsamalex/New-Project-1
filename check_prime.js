function checkPrime(num){
    if(num <= 1){
        return false;
    }else{
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                return false;
            }
        }
        return true;
    }
}

let arr1 = [3, 12, 40, 24, 0];
let arrayElement = arr1[0];
let PrimeNo = checkPrime(arrayElement);
if(PrimeNo){
    console.log(arrayElement + " is a prime number");
}else{
    console.log(arrayElement + " is NOT a prime number");
}
