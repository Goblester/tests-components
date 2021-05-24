import React from "react";
import s from "./HW12.module.css";
import SuperRadio from '../h7/common/c6-SuperRadio/SuperRadio';
import {useDispatch, useSelector} from 'react-redux';
import {changeTheme, ThemeStateType, ThemeType} from './bll/themeReducer';
import {Dispatch} from 'redux';
import {AppStateType} from '../h10/bll/store';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStateType, ThemeType>((state)=>state.theme.theme);
    debugger;
    const dispatch = useDispatch<Dispatch>();
    const  onChange = (newTheme: ThemeType)=>{
        dispatch(changeTheme(newTheme));
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>


            <SuperRadio options={themes}
                        onChangeOption={onChange}
                        value={theme}
                        className={s[theme + '-text']}
                        />

            <hr/>
        </div>
    );
}

export default HW12;
