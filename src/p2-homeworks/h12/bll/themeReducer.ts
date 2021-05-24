import {changeState, reducerFactory, ReducerType} from '../../../common/commonFunctions';

enum ACTION_TYPES {
    CHANGE_THEME = 'THEME_REDUCER/CHANGE_THEME'
}

export type ThemeType = 'dark' | 'some' | 'red'

export type ChangeThemeAT = {
    type: ACTION_TYPES.CHANGE_THEME,
    payload: {
        theme: ThemeType
    }
}

type ThemeActionTypes = ChangeThemeAT

export type ThemeStateType = {
    theme: ThemeType
}

const initialState:ThemeStateType = {
    theme: 'red'
}



type HandlersType = {
    [key: string]: (state: any, action: any) => any
}

const handlers: HandlersType = {}

handlers[ACTION_TYPES.CHANGE_THEME] = changeState();



export const themeReducer= reducerFactory(initialState, handlers);

export const changeTheme = (theme: ThemeType): ChangeThemeAT => ({
    type: ACTION_TYPES.CHANGE_THEME,
    payload: {
        theme
    }
})