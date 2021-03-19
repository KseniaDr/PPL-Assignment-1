export type State<S, A> = (initialState: S) => [S, A];

export const bind = undefined;
//<S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>) => State<S, B> = undefined;
