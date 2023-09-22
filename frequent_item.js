function mostFrequent(arr1){
    const eachElement = {};
    let maxElement = arr1[0];
    let maxCount = 1;
    for(let i = 0; i < arr1.length; i++){
        var element = arr1[i];
        if(eachElement[element]) {
            eachElement[element]++;
        }else{
            eachElement[element] = 1;
        }
        if(eachElement[element] > maxCount){
            maxElement = element;
            maxCount = eachElement[element];
        }
    }
    return maxElement;
}

let arr1 = ["mango", "kiwi", "pears", "mango", "apple", "mango", "kiwi"];
let recurringNumber = mostFrequent(arr1);
console.log(recurringNumber);