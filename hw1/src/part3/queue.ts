import { State, bind } from "./state";

export type Queue = number[];

export const enqueue = (x: number): State<Queue,undefined> => {
    return initState => [initState.concat([x]), undefined];
};

export const dequeue :State<Queue, number> = (q) => {
    return [q.slice(1),q[0]];
};

export const queueManip = bind(dequeue, x => bind(enqueue(x*2), y => bind(enqueue(x/3), z => dequeue)));