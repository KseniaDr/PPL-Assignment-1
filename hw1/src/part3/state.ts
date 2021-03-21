export type State<S, A> = (initialState: S) => [S, A];

export const bind: <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>) => State<S, B> = (state, f) => {
    return initState => {
        const [newState, value] = state(initState);
        const g = f(value);
        return g(newState);
    }
};
