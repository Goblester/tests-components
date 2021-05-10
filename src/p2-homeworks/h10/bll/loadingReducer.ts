export enum LOADING_ACTIONS_TYPE {
    CHANGE_LOADING = 'LOADING/CHANGE_LOADING'
}


type LoadingReducerStateType = {
    isLoading: boolean
}

const initState: LoadingReducerStateType = {
    isLoading: false
};

export type LoadingActionsType = LoadingAT;

export const loadingReducer = (state = initState, action: LoadingActionsType): LoadingReducerStateType => {
    switch (action.type) {
        case 'LOADING/CHANGE_LOADING': {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
};

type LoadingAT = {
    type: LOADING_ACTIONS_TYPE.CHANGE_LOADING,
    payload: {
        isLoading: boolean
    }
}

export const loadingAC = (isLoading: boolean): LoadingAT => ({
    type: LOADING_ACTIONS_TYPE.CHANGE_LOADING,
    payload: {
        isLoading
    }
});