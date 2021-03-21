export type State<S, A> = (initialState: S) => [S, A];

export const bind: <S, A, B>(state: State<S, A>, f: (x: A) => State<S, B>) => State<S, B> = (state, f) => {
    return initialState => {
        const [newState, value] = state(initialState);
        const g = f(value);
        return g(newState);
    }
};
