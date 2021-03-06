import React, {useReducer} from 'react';
import {checkAC, homeWorkReducer, PeopleType, sortAC} from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';

const initialPeople: Array<PeopleType> = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
]

function HW8() {
    const [people, dispatch] = useReducer(homeWorkReducer, initialPeople);
    const finalPeople = people.map(p => (
        <div key={p._id}>
            {p.name} --- {p.age}
        </div>
    ))

    const sortUp = () => dispatch(sortAC('up'));
    const sortDown = () => dispatch(sortAC('down'));
    const checkEighteen = ()=> dispatch(checkAC(18));
    return (
        <div>
            <hr/>
            homeworks 8

            {/*should work (должно работать)*/}

            {finalPeople}
            <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
            <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
            <div><SuperButton onClick={checkEighteen}>check 18</SuperButton></div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativePeople/>*/}
            <hr/>
        </div>
    );
}

export default React.memo(HW8);
