// STRING ASSIGNMENT

// 1. Count Characters
// You are given a string S, and your task is to return an array B(having a size of 2), where B[0] contains the count of 
// character A (uppercase) in string S and B[1] contains the count of character D (uppercase) in string S.
// Note: You have to complete countCharacters function. No need to take any input.

function countCharacters(S) {
    let countA = 0;
    let countD = 0;

    for (let i = 0; i < S.length; i++) {
        if (S[i] === 'A') {
            countA++;
        } else if (S[i] === 'D') {
            countD++;
        }
    }

    return [countA, countD];
}

// Example usage:
var S = "AADADDDAAA";
let result = countCharacters(S);
console.log(result); 



// Q2. Count the Heads
// Tina is given a string S which contains the first letter of all the student names in her class. She got a curiosity to check how 
// many people have their names starting from the same alphabet. So given a string S, she decided to write a code that finds 
// out the count of characters that occur more than once in the string.
// Note: You have to complete Count Head function. No need to take any input.
function countHead(S) {
    let charCount = {};
    let repeatedCount = 0;

    for (let char of S) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (let char in charCount) {
        if (charCount[char] > 1) {
            repeatedCount++;
        }
    }

    return repeatedCount;
}


var S = "AABBCCDDEE";
console.log(countHead(S)); 




// Q3. Count the Vowels
// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels in the 
// given string.
// Note: You have to complete Count_Vowel function. No need to take any input.
var Str = "My nAme Is Dhruv TAkkAr"
var arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
function count_Vowels(str,arr){
var count = 0;
for (i = 0; i < Str.length; i++) {
    for (j = 0; j < arr.length; j++) {
        if (Str[i] == arr[j]) {
count++;
        }
    }
}
return count;
}
console.log("Number of vowels in a given string is :",count_Vowels(Str,arr));



// Q4. Concatenate the Strings
// You are given two strings S1 and S2 (containing both uppercase and lowercase letters), You need to retrun a string which is the 
// concatenation of both the given strings. 
// Note: You have to complete Concatenate_Strings function. No need to take any input.

var strg_1="Hello";
var strg_2="Dhruv";
function concat_Strg(strg_1,strg_2){
    var new_Strg=strg_1.concat(strg_2);
    return new_Strg;

}
console.log(concat_Strg(strg_1,strg_2));


// Q5. Find Length
// You are given a string S, and your task is to return the length of the string S.
// Note: You have to solve it without using length method. You have to complete findLength function. No need to take any input.
var strg ="My name is Dhruv Takkar";
function strgLength(strg){
    var len=0;
    for(i=0;i<strg.length;i++){
        len++;
    }
    return len+1;
}
console.log(strgLength(strg));


// Q6. Find the Winner
// You are given a string S consisting of two letters A and D,where each character represent the winner of N games played between Aditya 
// and Danish, where letter A represents the win of Aditya and letter D represents the win of Danish. You need to find out the that which 
// player wins the maximum number of games or there is a draw between them.
// Note: You have to complete Game_Winner function. No need to take any input.

var strg="DDDDAAAADD"
function Game_Winner(strg){
    var count_A=0;
var count_D=0;
for(i=0;i<strg.length;i++){
    if(strg[i]=="A"){
        count_A++;
    }
    else
    count_D++;
}
if(count_A>count_D){
    return "Aman is winner";
}
else if(count_A<count_D){
    return "Dhruv is winner";
}
else {
    return "Match is draw";
}

}
console.log(Game_Winner(strg));


// Q7. Join Strings
// You are given two strings S and P, and your task is to concatenate them and return the concatenated string.
// Note: You have to complete joinStrings function. No need to take any input.

var strg_1="Dhruv";
var strg_2="Takkar";
function joinStrings(strg_1,strg_2){
    var concat_Strg=strg_1.concat(strg_2);
    return concat_Strg;
    
}
console.log(joinStrings(strg_1,strg_2));


// Q8. Plaindrome Check
// You are given a string S, Your task is to check wether the given string is a Palindrome or not.
// A Palindrome is a string, which turnout same when read in reverse direction. Example: "naman" is a Palindrome. String can contain 
// both upppercase lowercase letters.
// Note: You have to complete Plain_Check function. No need to take any input

var strg_1="Naman";
var reversed_Strg=strg_1.split("").reverse().join("");

function Plain_Check(strg_1,reversed_Strg){

if(strg_1.toLowerCase()===reversed_Strg.toLowerCase())
return"Yes it is a palindrome string";
else
return"No it is not a palindrome string";
}
console.log(Plain_Check(strg_1,reversed_Strg));


// Q9. Reverse the String
// You are given a string S, Your task is to Reverse the string. String can contain both upppercase lowercase letters. Note: You have to 
// complete Reverse_String function. No need to take any input.

var strg="I am Dhruv Takkar";
var split_Arr=strg.split("")
var new_Arr=split_Arr.reverse()
var reversed_Strg=new_Arr.join("");
console.log(reversed_Strg);

// Q10. Match the Strings
// You are given two strings S1 and S2, Your task is to print YES if both strings are same else print NO.
// Note: You have to complete String_Match function. No need to take any input.
var strg_1 = "prepbytes";
var strg_2 = "prepbytes"; 

var str_1=strg_1.toLowerCase();
var str_2=strg_2.toLowerCase();
function String_Match(str_1,str_2){
    if(str_1==str_2){
        return "YES";
    }
    else 
    return "No";
}
console.log(String_Match(str_1,str_2));


// Q11. String Replace
// You are given a string S, along with a pattern string and a text string. You need to repalce the pattern string in S to the text string.
// Note: You have to complete Replace function. No need to take any input.
var strg= "Hi, I am You. You Prepbytes";
function strg_Replace(){
    var new_strg=strg.replace(/You/g,"");
    return new_strg ;

}
console.log(strg_Replace(strg));


// Q12. Split the String
// You are given a string S, Your task is to split the string with respect to spaces.
// Note: You have to complete Split_the_String function. No need to take any input.
var strg="My name is Dhruv Takkar";
function Split_the_String(strg){
    var new_strg=strg.split(" ")
    return new_strg ;
}
console.log(Split_the_String(strg));


// Q13. Count the Vowels and Consonants
// You are given a string S containing both uppercase and lowercase letters. You need to find out the number of vowels and the number of 
// consonants in the given string.
// Note: You have to complete Count_Vowels function and Count_Consonants function. No need to take any input.
var arr = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
var strg = "My nAme Is Dhruv TAkkar";
var vowel_Count = 0;
var consonant_Count = 0;

function count() {
    for (var i = 0; i < strg.length; i++) { 
        var isVowel = false; 
        for (var j = 0; j < arr.length; j++) {
            if (strg[i] === arr[j]) {
                vowel_Count++;
                isVowel = true; 
                break; 
            }
        }
        if (/[a-zA-Z]/.test(strg[i]) && !isVowel) {
            consonant_Count++;
        }
    }
    
    return [vowel_Count, consonant_Count];
}

console.log(count());