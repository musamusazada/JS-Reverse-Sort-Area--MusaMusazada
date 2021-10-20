// Method 1.

// Switch Alg without second array.
//Convert string to an array.
const arr = a.split('');
//Save the index of last element;
let last = a.length - 1;
//Create temporary variable for switching;
let temp;

//a.length/2 defines how many "switches" we have to do. We need to convert it to Integer.
for (let index = 0; index < parseInt(a.length / 2); index++) {

    temp = arr[index];
    arr[index] = arr[last];
    arr[last] = temp;
    last--;

}
//Convertin Array back to string, and finally to Integer
console.log(parseInt(arr.join('')));



//Method 2
//Using built in functions.
//Example input:
console.log('1234567'.split('').reverse().join(''));