// Addition Of two numbers
var a = 12;
var b = 13;
function addition_two_Numbers(a, b) {
    return a + b;
}
console.log("Addition of two number is" + ":", addition_two_Numbers(a, b));

// Q2. Find if the conditions are obeyed or not? 
var a = 12;
var b = 3;
function is_Valid(a, b) {
    if (a < 10 && a > b) {
        return true;
    }
    else {
        return false;
    }
}
console.log(is_Valid(a, b));

// Q3.Check the conditions 
var a = 67.5;
var b = 45.7;
function Check(a, b) {

    if (a % 10 == 0 && b % 10 == 0) {
        return true;
    }
    else if (a % 10 != 0 && b % 10 != 0) {
        return false;
    }
    else if (a % 10 == 0 || b % 10 == 0) {
        return true;
    }
    else
        return "invalid entry";
}
console.log(Check(a, b));

 // Q4.Find the first digit of a 4 digit number 
 var num = "4567"
 function first_digit_Function(num) {
     return num[0];
 }
 console.log("first digit is" + ":", first_digit_Function(num));
 
 // Q5.Find the last digit of a 4 digit number 
 var num = "4567"
 function last_digit_Function(num) {
     return num[3];
 }
 console.log("Last digit is" + ":", last_digit_Function(num));

 // Q6.Find the remainder 
divisor = 3;
dividend = 32;
function find_the_Remainder(divisor, dividend) {
    return (dividend % divisor);
}

console.log("Remainder" + ":", find_the_Remainder(divisor, dividend));

// Q7.Multiply two Numbers 
var c = 23;
var d = 13;
function multiply_two_Numbers(c, d) {
    return c * d;
}
console.log("Product of two number is" + ":", multiply_two_Numbers(c, d));

// Q8. Marks Calculator 
sub_1 = 26;
sub_2 = 29;
sub_3 = 45;
function total_Marks(sub_1, sub_2, sub_3) {
    return sub_1 + sub_2 + sub_3
}
function avg_Marks(sub_1, sub_2, sub_3) {
    return total_Marks(sub_1, sub_2, sub_3) / 3
}

console.log('totalMarks' + ":", total_Marks(sub_1, sub_2, sub_3))
console.log("Average" + ":", avg_Marks(sub_1, sub_2, sub_3))






