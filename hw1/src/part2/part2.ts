import { countReset } from "console";
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
    return stringToArray(s).reduce((acc, cur) => 
    {
        const index = acc.length;
        if(index === 0){
            const counter = countCharacter(stringToArray(s),cur);
            if(counter > 1){
                return acc + cur + countCharacter(stringToArray(s), cur); //a4
            }
            else{
                return acc + cur;
            }
           
        }
        else if(cur === acc[index - 2]){//index min 2 
            return acc
            
        }
        else{//b s
            const counter = countCharacter(stringToArray(s).slice(stringToArray(s).indexOf(cur,index)), cur);
            if(counter > 1){
                return acc + cur + counter;
            }
            else{    
                return acc + cur
            }
        }
    }
    , "");
}

const countCharacter: (arr:string[], ch:string) => number = (arr, ch) => {
    let answer = 0;
    let bool = true;
    answer = arr.filter(x => (((count(x, ch)&&bool) ? x: bool = false))).length
    //console.log(ch + ":" +answer);
    return answer;
}

const count: (x: string, ch: string) => boolean = (x, ch) => {
    return (x === ch) ? true : false;
}

// const findCharChange: (s: string[], ch: string) => number = (s, ch) => {
//     s.reduce((acc,cur) => ())
// }

console.log(runLengthEncoding("Aa"));

export const blhablha = (x: number, y: number): number =>{
    return 0;
}

/* Question 3 */
//export const isPaired = undefined;

export const isPaired: (s:string) => boolean = (s) => {
    const parenthesesArr = stringToArray(s).filter(x => (findParentheses(x))); // array of all Parentheses
    const parToNumArr = parenthesesArr.map(x => checkParentheses(x)); // array of 1 & -1

    const answer = parenthesesArr.map((x,index) => { //PPL is a great course and Kasaniya loves this language
        if(isOpen(x)){ //arr go right
            console.log("arr: " + parenthesesArr.slice(index));
            return findMatch(parenthesesArr.slice(index),findPartner(x))
        }
        else{ //arr go left
            console.log("arr: " + parenthesesArr.slice(0,index));
            return findMatch(parenthesesArr.slice(0,index),findPartner(x))
        }
    });
    console.log(answer)
    console.log("arr of parentheses: [" + parenthesesArr + "]");
    console.log("arr of 1 & -1: [" + parToNumArr + "]");
    const numOfPar = parenthesesArr.length;
    return (answer.every(x => (x === true)) && (parenthesesArr.length % 2 === 0));
}


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


const findMatch: (arr: string[] ,s1: string) => boolean = (arr, s1) => {
    return arr.indexOf(s1) !== -1;
}

const findPartner: (s1: string) => string = (s1) => {
    return (s1 === '(') ? ')':
    (s1 === ')') ? '(':
    (s1 === '[') ? ']':
    (s1 === ']') ? '[':
    (s1 === '{') ? '}':
    '{';
}

const isOpen: (s1: string) => boolean = (s1) => {
    return ((s1 === '(') || (s1 === '[') || (s1 === '{')) ? true:
        false;
}

console.log(isPaired("This is {(some} (text)"));