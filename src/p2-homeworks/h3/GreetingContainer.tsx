import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from './HW3';

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name: string) => void// need to fix any
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики

type ValidatorType = (name: string) => undefined | string

const onlyLetters = (name: string) => {
    if (!/^[A-Za-z]+$/.test(name)) {
        return 'name should contain only latin letters';
    }
}

const minLength = (min: number) => (name: string) => {
    if (name.length < min) {
        return `minimum length is ${min}`;
    }

}

const maxLength = (max: number) => (name: string) => {
    if (name.length > max) {
        return `maximum length is ${max}`;
    }
}

const required = (name: string) => {
    if (name.length === 0) {
        return 'Field is required';
    }

}


const combineValidators = (...validators: Array<ValidatorType>) => (name: string) => {
    return validators.reduce((error: undefined | string, validator) => {
        return error || validator(name);
    }, undefined);
}


const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string | undefined>(undefined) // need to fix any


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.currentTarget.value);
        const newError = combineValidators(onlyLetters, minLength(6), maxLength(15), required)(e.currentTarget.value);
        setError(newError);
    }

    const setNewError = () => {

    }

    const addUser = () => {
        addUserCallback(name);
        alert(`Hello  ${name}!`) // need to fix
        setName('');
    }

    const totalUsers = users.length;// need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
