import { State, bind } from "./state";

export type Queue = number[];


export const enqueue = (x: number): State<Queue,undefined> => {
    return initState => [initState.concat([x]), undefined];
};

export const dequeue = (): State<Queue, number> => {
    return initState => [initState.slice(1),initState[0]];
};

export const queueManip = (): State<Queue, number> => {
    return bind(dequeue(), x => bind(enqueue(x*2), y => bind(enqueue(x/3), z => dequeue())));
};

let add5 = enqueue(5);
console.log(add5([1,2,3,4]));