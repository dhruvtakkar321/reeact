// LOOPS ASSIGNMENT
//

// QUES1) Print pattern
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "*" + "";
    }
    console.log(pattern);
}

// QUES2) Iterate thrugh all numbers from 1 to 45 and print the given condition

for (let i = 1; i <= 45; i++) {
    if (i % 3 == 0) {
        console.log("Fizz")
    }
    else if (i % 5 == 0) {
        console.log("Buzz")
    }
    else if (i % 3 == 0 && i % 5 == 0) {
        console.log('FizzBuzz')
    }
}
// QUES3) Sum of array elements

var num_Array = [1, 13, 22, 123, 49];
var sum = 0;
for (let num of num_Array) {
    sum += num;
}
console.log(sum);

// QUES4) Get the sum of two arrays
var num_Arr1 = [3,5,22,5,7,2,45,75,89,21,2 ];
var sum_1 = 0;
for (let num of num_Arr1) {
    sum_1 += num;
}
var num_Arr2 = [9,2,42,55,71,22,4,5,90,25,26];
var sum_2 = 0;
for (let num of num_Arr2) {
    sum_2 += num;
}
console.log("The sum of two given array arr_1 and arr_2 is :"+"" ,sum_1+sum_2 );

//Ques5) reverse the order
 var arr =[43,"what", 9, true, "cannot", false, "be" ,3, true];
 for(let i = arr.length; i >= 0 ; i--){
     console.log(arr[i]);
 }