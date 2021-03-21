
import * as R from "ramda";
const stringToArray = R.split("");

/* Question 1 */
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

/* Question 2 */
//Updated more simple version and no mutable objects
const SplitForExc2 = R.match(/(.)\1*/g);
export const runLengthEncoding = (s: string): string => {

    const SplitArray: string[] = SplitForExc2(s);
    return SplitArray.reduce(
        (strAcc: string, strCurr: string, idx: number) => {
            return strAcc + strCurr[0] + ((strCurr.length>1) ? strCurr.length : "");
        }
        , "");
};

 /* Question 3 */
const ParenthesisDict :{[key:string]:string}= {
    "}":"{",
    "]":"[",
    ")":"(",
};
interface StringAndBool {str:string,flag:boolean};

export const isPaired: (s:string) => boolean = (s) => {
    const parenthesesArr = stringToArray(s).filter(x => (findParentheses(x)));
    const finalAnswer : StringAndBool = parenthesesArr.reduce((prevVal:StringAndBool,currVal:string)=>{
        if (currVal === "[" ||currVal==="{" || currVal==="(")
        {
            return {str:prevVal.str+currVal,flag:prevVal.flag};
        }
        else
        {
            if (prevVal.str.length!=0 && ParenthesisDict[currVal]===prevVal.str[prevVal.str.length-1])
                return {str:prevVal.str.slice(0,prevVal.str.length-1),flag:prevVal.flag};
            else
                return {str:prevVal.str.slice(0,prevVal.str.length-1),flag:false};
        }
    },{str:"",flag:true});
    console.log(finalAnswer);    
    return (finalAnswer.flag && finalAnswer.str.length===0);
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

console.log(isPaired("This is {(some}) (text)"));
