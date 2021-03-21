import { slice } from "ramda";
import { State, bind } from "./state";

export type Stack = number[];

export const push = (x: number): State<Stack, undefined> => {
    return initState => [[x].concat(initState), undefined];
};

export const pop : State<Stack, number> =(s)=>{
    return [s.slice(1, s.length), s[0]];
};

export const stackManip = bind(pop, x => bind(push(x*x), y => bind(pop, z => push(x + z))));

console.log(stackManip([4, 5, 6]));