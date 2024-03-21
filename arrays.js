
//Question One
let arr1 = [3,7,34,90,12];
let lastItem = arr1[arr1.length - 1];
console.log(lastItem);

let arr2 = ["true","green","where",12,56];
let lastElement = arr2[arr2.length - 1];
console.log(lastElement);

//Question Two
let myPets = ["Cow","Bird","Snake","Dog"]
console.log(myPets.join(""));

//Question Three
let arr3 = [-5,9,5,3,2,-3,6,8,4,1];
arr3.sort();
console.log(arr3);

//Question 4
let arr = ["apple","mango","apple","orange","mango","mango"]
function removeDuplicate(arr) {
    return [...new Set(arr)];
}
console.log(removeDuplicate(arr));

//Question 5
let arr5 = ["the","way","x",4]
console.log(arr5.includes("way"));
    



