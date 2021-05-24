export const changeState =()=> (state: any, action: any) => ({
    ...state,
    ...action.payload
})

export type ReducerType<T,R> = (state:T,action:R)=>T


export const reducerFactory = (initialState: any, handlers: any) => (state = initialState, action: any) => {
    const handler = handlers[action.type];
    if (handler) {
        return handler(state, action)
    }
    return state
}
