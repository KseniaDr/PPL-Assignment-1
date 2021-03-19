import { State, bind } from "./state";

export type Queue = number[];


export const enqueue = (x: number): State<Queue,undefined> => {
    return initState => [initState.concat([x]), undefined];
};

export const dequeue = undefined;

export const queueManip = undefined;

let add5 = enqueue(5);
console.log(add5([1,2,3,4]));