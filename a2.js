// Q1.Find Grades
var obt_Marks = 1;
function find_Grades(obt_Marks) {
    if (obt_Marks >= 41 && obt_Marks <= 50) {
        return "The grade is A"
    }
    else if (obt_Marks >= 31 && obt_Marks <= 40) {
        return "The grade is B"
    }
    else if (obt_Marks >= 21 && obt_Marks <= 30) {
        return "The grade is C"
    }
    else if (obt_Marks >= 11 && obt_Marks <= 20) {
        return "The grade is D"
    }
    else {
        return "The grade is E"
    }

}
console.log(find_Grades(obt_Marks));

// Q2. Get Value
const charValues = [
    { char: 'P', value: 'PrepBytes' },
    { char: 'p', value: 'PrepBytes' },
    { char: 'Z', value: 'Zenith' },
    { char: 'z', value: 'Zenith' },
    { char: 'E', value: 'Expert Coder' },
    { char: 'e', value: 'Expert Coder' },
    { char: 'D', value: 'Data Structure' },
    { char: 'd', value: 'Data Structure' }
];

const charactercheck = (char) => {
    const foundItem = charValues.find(item => item.char === char);
    return foundItem ? foundItem.value : "Character not found";
}
console.log(charactercheck('d')); 
console.log(charactercheck('D')); 


// Q3. Find the maximum out of three numbers
var a = 122;
var b = 133;
var c = 140;
function max_out_of_three(a, b, c) {       // 1st way
    if (a > b) {
        if (a > c) {
            return "1st number is greatest"
        }
        else {
            return "3rd number is greatest"
        }
    }
    else {
        if (b > c) {
            return "2nd number is greatest"

        }
        else {
            return "3rd number is greatest"
        }
    }

}
function max_out_of_Three() {            // 2nd way
    if (a > b && a > c) {
        return "a is greatest"
    }
    else if (b > a && b > c) {
        return "b is greatest"
    }
    else
        return "c is greatest"
}
console.log(max_out_of_three(a, b, c));
console.log(max_out_of_Three(a, b, c));

// Q4. Second Smallest
var arr = [15,133,144]
var new_arr= arr.sort((a,b)=> a-b);
console.log(new_arr[1]);

// Q5. Check whether the triangle is Acute or Obtuse
var ang_1 = 30;
var ang_2 = 15;
var ang_3 = 0;
function triangle_Check() {
    if (ang_1 > 90 || ang_2 > 90 || ang_3 > 90) {
        return 'Triangle is Obtuse';
    }
    else if (ang_1 < 90 && ang_2 < 90 && ang_3 < 90) {
        return "Triangle is Acute";
    }
    else {
        return "Neither obtuse nor acute";
    }
}
console.log(triangle_Check(ang_1,ang_2,ang_3));




