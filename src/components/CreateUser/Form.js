import React, { useState } from 'react';
import styles from './Form.module.css';

const Form = (props) => {
    const [username, setUsername] = useState('');
    const [age, setAge] = useState('');

    const userNameHandler = (e) => {
        setUsername(e.target.value);
    }

    const ageHandler = (e) => {
        setAge(e.target.value);
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const userData = {
            id: Math.random().toString(),
            username: username,
            age: age
        }
        props.returnUser(userData);

        setUsername('');
        setAge('');
    }

    return (
        <div className={styles['form-container']}>
            <form onSubmit={submitHandler} >
                <div >
                    <label htmlFor='username'>Username</label>
                    <input required  value={username} onChange={userNameHandler} type='text' />
                </div>
                <div>
                    <label htmlFor='age'>Age</label>
                    <input required value={age} onChange={ageHandler} type='number' />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form;