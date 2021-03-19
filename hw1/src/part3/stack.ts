import { slice } from "ramda";
import { State, bind } from "./state";

export type Stack = number[];

export const push = (x: number): State<Stack, undefined> => {
    return initState => [[x].concat(initState), undefined];
};

export const pop = (): State<Stack, number> =>{
    return initState => [initState.slice(0, initState.length - 1), initState[initState.length - 1]];
};

export const stackManip = (): State<Stack,undefined> => {
    return bind(pop(), x => bind(push(x*x), y => bind(pop(), z => push(x + z))));
};