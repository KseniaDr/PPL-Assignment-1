import { access } from "fs";
import * as R from "ramda";

const stringToArray = R.split("");

/* Question 1 */
//export const countVowels = undefined;



export const countVowels: (s: string) => number = (s) => {
    return stringToArray(s).reduce((acc, cur) => checkVowels(cur) ? acc + 1 : acc,0)
} 

const checkVowels:(s: string) => boolean = (s) => {
    return (s === "a") ? true:
    (s === "A") ? true:
    (s === "e") ? true:
    (s === "E") ? true:
    (s === "i") ? true:
    (s === "I") ? true:
    (s === "o") ? true:
    (s === "O") ? true:
    (s === "u") ? true:
    (s === "U") ? true:
    false;
}

console.log(countVowels("This is SOME Text"));

/* Question 2 */
//export const runLengthEncoding = undefined;

export const runLengthEncoding = (s:string): string => {
    //array of chars

    //array of numbers

    //combine
    
    
    let c = 0;
    return stringToArray(s).reduce(
        (stringAns,curChar) => {
            let counter = countCharacter(stringToArray(s).slice(c), curChar);
            c = counter;
            if (counter > 1)  
            return (stringAns + curChar + counter);
            return (stringAns + curChar)
        },
    "");
}

const countCharacter: (arr:string[], ch:string) => number = (arr, ch) => {
    let answer = 0;
    let bool = true;
    answer = arr.filter(x => (((count(x, ch)&&bool) ? x: bool = false))).length
    console.log(ch + ":" +answer);
    return answer;
}

const count: (x: string, ch: string) => boolean = (x, ch) => {
    return (x === ch) ? true : false;
}

// const findCharChange: (s: string[], ch: string) => number = (s, ch) => {
//     s.reduce((acc,cur) => ())
// }

console.log(runLengthEncoding("aaaabbbccdaa"));

export const blhablha = (x: number, y: number): number =>{
    return 0;
}

/* Question 3 */
//export const isPaired = undefined;

export const isPaired: (s:string) => boolean = (s) => {
    let parenthesesArr = stringToArray(s).filter(x => (findParentheses(x))); // array of all Parentheses
    let parToNumArr = parenthesesArr.map(x => checkParentheses(x)); // array of 1 & -1
    let answer: boolean = true;

    console.log("arr of parentheses: [" + parenthesesArr + "]");
    console.log("arr of 1 & -1: [" + parToNumArr + "]");

    // let boolArr = parToNumArr.reduce((acc,cur) => ,0);

    // parToNumArr.reduce((acc,cur) => 
    //     {
    //         let curSum = true;
    //         ((acc + cur) < 0) ? answer = curSum && true: 
    //         answer = curSum && false;
    //         //return curSum;

    //     }
    // ,0);
        
        return answer;
        //(acc + checkParentheses(cur)) < 0) ? false: true,0)

     //stringToArray(s).filter(x => (findParentheses(x))).every()
}

//console.log(isPaired("This is ([some]) {text}")); 

const findParentheses: (s:string) => boolean = (s) =>{
       return (s === "[") ? true:
       (s === "]") ? true:
       (s === "{") ? true:
       (s === "}") ? true: 
       (s === "(") ? true: 
       (s === ")") ? true: 
       false;
}

const checkParentheses: (s:string) => number = (s) =>{
    return (s === "[") ? 1:
    (s === "]") ? -1:
    (s === "{") ? 1:
    (s === "}") ? -1: 
    (s === "(") ? 1: 
    (s === ")") ? -1: 
    0;
}

const closeParentheses: (s:string) => number = (s) =>{
    return (s === "]") ? -1:
    (s === "}") ? -1: 
    (s === ")") ? -1: 
    0;
}

const openParentheses: (s:string) => number = (s) =>{
    return (s === "[") ? 1:
    (s === "{") ? 1: 
    (s === "(") ? 1: 
    0;
}

isPaired("This is ([some]) {text}");