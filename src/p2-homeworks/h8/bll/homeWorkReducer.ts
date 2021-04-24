export type PeopleType = {
    _id: number
    name: string
    age: number
}

type ActionsType = SortAT | CheckAT

type SortAT = {
    type: 'sort'
    payload: 'up' | 'down'
}

type CheckAT = {
    type: 'check'
    payload: number
}

export const homeWorkReducer = (state: Array<PeopleType>, action: ActionsType): Array<PeopleType> => {
    switch (action.type) {
        case 'sort': {
            const direction = action.payload === 'up' ? 1 : -1;
            return [...state].sort((a, b) => direction * (a.age - b.age))
        }
        case 'check': {
            return state.filter(p => p.age >= 18);
        }
        default:
            return state
    }
};

export const sortAC = (payload: 'up' | 'down'): SortAT => ({
    type: 'sort' as const,
    payload
});

export const checkAC = (payload: number): CheckAT => ({
    type: 'check' as const,
    payload
})
