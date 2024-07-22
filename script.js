function isPalindrome(phrase) {
    
    const cleanedPhrase = phrase.replace(/\s/g, '').toLowerCase();
    
    
    for (let i = 0; i < cleanedPhrase.length / 2; i++) {
        if (cleanedPhrase[i] !== cleanedPhrase[cleanedPhrase.length - 1 - i]) {
            return false;
        }
    }
    
    return true;
}


console.log(isPalindrome("Radar")); 
console.log(isPalindrome("A sacada da casa")); 
console.log(isPalindrome("Anilina")); 
console.log(isPalindrome("A torre da derrota")); 
console.log(isPalindrome("Olá, mundo!")); 


function arrayMaxMin(arr) {
    let min = arr[0]; 
    let max = arr[0]; 

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i]; 
        }
        if (arr[i] > max) {
            max = arr[i]; 
        }
    }

    return [min, max]; 
}


const meuArray = [3, 1, 5, 10, 2];
const resultado = arrayMaxMin(meuArray);
console.log(`Valor mínimo: ${resultado[0]}, Valor máximo: ${resultado[1]}`);

