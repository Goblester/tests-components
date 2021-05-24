import React from 'react';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppStateType} from './bll/store';
import {Dispatch} from 'redux';
import {loadingAC, LoadingActionsType} from './bll/loadingReducer';
import loader from './../../assets/Infinity-1s-200px.svg';

function HW10() {
    const isLoading = useSelector<AppStateType>((state: AppStateType) => state.loading.isLoading);
    const dispatch = useDispatch<Dispatch<LoadingActionsType>>();
    debugger;
    const setLoading = () => {
        dispatch(loadingAC(true));
        setTimeout(() => {
            dispatch(loadingAC(false))
        }, 3000)
        console.log('loading...');
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {isLoading
                ? (
                    <div><img src={loader}/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    );
}

export default HW10;
