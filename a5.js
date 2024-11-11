// Array assignment

// Q1. Find the Product.
// Write a program that takes an array as input from the user and find out the product of the elements.
// Note: You have to complete Find_Prod. No need to take any input.

var arr = [2, 4, 9, 10]
function find_Prod(arr) {
    var prod = 1;
    for (let num of arr) {
        prod *= num;
    }
    return prod;
}
console.log(find_Prod(arr));

//  Q2] Write a program which takes an array as input from the user and find out the sum of the array elements.
// Note: You have to complete Find_Sum. No need to take any input.
var arr = [2, 12, 13, 123, 23]
function find_Sum(arr) {
    var sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}
console.log(find_Sum(arr));

// Q3] You are given an array A containing N integer elements and an integer K, and your task is to return the count of 
// occurrences of K in array A.
var arr = [12, 1, 23, 1, 1, 1, 23, 12, 14, 15, 18, 1, 23, 11, 1, 3, 4, 5, 1, 5,] // here N =20 and K=1;
// We have to find the occurence of 1 in given array.
function count_Occurence(arr) {
    var count_K = 0;
    for (let num of arr) {
        if (num == 1) {
            count_K++
        }
    }
    return count_K;
}
console.log(count_Occurence(arr));

// Q4] You are given an array A containing N integer elements, and your task is to return an array B ((having a size equal to 22)), 
// where B[0] contains the sum of all even elements of array A and B[1] has the sum of all odd elements of the array A.
// // Note: You have to complete findEvenOdd function. No need to take any input
var arr = [2, 1, 3, 4, 5, 6]
function sum_Elements(arr) {
    var even_Sum = 0;
    var odd_Sum = 0;
    for (let num of arr) {
        if (num % 2 == 0) {
            even_Sum += num;
        }
        else {
            odd_Sum += num;
        }

    }
    return [even_Sum, odd_Sum];
}
console.log(sum_Elements(arr));

//  Q5] Find whether the number is present or not
//  Write a program which takes an array as input from the user and a number. Check whether the number is present or not.
//  Note: You have to complete Find_Num. No need to take any input.
var arr = [12, 12, 3, 4, 5, 6, 7, 7, 8, 9, 0, 1, 2, 23, 12, 13, 14, 16, 0, 19, 2]
// we will check whether 7 is present in an array or not
function find_num(arr, num) {

    if (arr.includes(num))
        return "Number is present in an array";
    else
        return 'Number is not present in an array'

}
console.log(find_num(arr, 7));

// Q6]You are given an array A containing the age of persons in your locality, and your task is to find and return an array 
// containing the age of persons that are over 1818 (18(18 included)).
// Note: Also, in the output array, the age should be in the same order as in the input array. You have to complete highAge 
// function. No need to take any input.
var arr = [12, 13, 1, 45, 5, 34, 23, 16, 19, 20, , 23, 12, 21, 89, 18, 67]
function high_Age(arr) {
    return arr.filter(age => age >= 18);

}
console.log(high_Age(arr))

// Q7. Increment the Array Elements
// You are provided an array of integers and you have to increment all array elements by 1 and then print whole array.
// You have to complete Inc_Arr. No need to take any input.

var arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
function inc_Arr(arr) {
    return arr.map(function (num) {
        return num + 1; // Increment each element by 1
    });
}
console.log(inc_Arr(arr));

var arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19]
function inc_Arr(arr) {
    const arr1 = arr.map(num => num + 1);
    return arr1;
}
console.log(inc_Arr(arr));


// Q8. Pass or Fail
// You are given an array A containing the maths marks of students in your class, and your task is to determine if all the 
// students pass in your class or not. A student is declared pass if his maths marks are greater than or equal to 3232.
// If all the students pass in your class, return "YES" (without quotes); otherwise, return "NO" (without quotes).
// Note: You have to complete isAllPass function. No need to take any input.

var arr = [33, 32, 45, 16,65, 78, 45, 54]
function isAllPass(arr) {
    for (const num of arr) {
        if (num < 32) {
            return "NO";
        }
        
    }
    return "YES"
 

}
console.log(isAllPass(arr));

// Q9. Unique Color Shirt
// Prepbuddy is very tasteful of clothes. He has N numbers of shirts hanging in the hanger in his wardrobe. Prepbuddy likes to 
// wear different colored clothes. So, whenever he see there are two or more shirts with the same color, he removes all the shirt 
// of that color from his wardrobe. Now, he wants to know how many M unique color shirts are left in the wardrobe. Prepbuddy 
// wants you to find M.
// Note: As there are many shades of a color so consider integers as a color name. i.e, color of shirt is 0,1,2, … , N.
function uniqueColorShirts(shirts) {
    let colorCount = {};
    let uniqueCount = 0;

    for (let color of shirts) {
        if (colorCount[color]) {
            colorCount[color]++;
        } else {
            colorCount[color] = 1;
        }
    }
    for (let color in colorCount) {
        if (colorCount[color] === 1) {
            uniqueCount++;
        }
    }

    return uniqueCount;
}

let shirts = [0, 1, 2, 2, 3, 3, 4, 5, 6, 6];
console.log(uniqueColorShirts(shirts)); 


// Q10. Min and Max
// Congratulations on making up to this question. Let us give you a fairly simple array problem to solve. If you know how to 
// iterate through the array, you will easily be able to solve this. The problem statement is simple- given N elements, find the 
// minimum and maximum numbers among those elements.
var arr=[12,11,121,12,120,132]
var max_Number=arr[0];
var min_Number=arr[0];
for(i=0;i<arr.length;i++){
    if(arr[i]>max_Number){
        max_Number=arr[i];
    }
}

console.log(max_Number);
for(i=0;i<arr.length;i++){
    if(arr[i]<min_Number){
        min_Number=arr[i];
    }
}
console.log(min_Number);
