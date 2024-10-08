function lowerCaseWords(arr){
    return new Promise((resolve, reject) =>{
        if(Array.isArray(arr)){
            const smallArr = arr.filter(item => typeof item === 'string')
                                .map(word => word.toLowerCase());
            resolve(smallArr);                                                                              
        }
        else{
            reject("Please input an ARRAY");
        }
    })
}
const mixedArray = [10, true, 'HaRiN', 1.0, 'ReDdY', false];
const hr = 10 //Not an array

lowerCaseWords(mixedArray)
    .then(smallArr => console.log(smallArr)) //passed case
    .catch(error => console.log(error));

// Not array
lowerCaseWords(hr)
    .then(smallArr => console.log(smallArr))
    .catch(error => console.log(error)); //rejected case
    