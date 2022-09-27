import React from 'react';
import { useDispatch } from 'react-redux/es/exports';
import '../index.scss';
import { addTodo } from '../redux/actions/todosActions';

const AddTodo = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo(e.target.title.value));
        e.target.reset();
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type='text' name='title' />
            <button type='submit'>Add todo</button>
        </form>
    );
};

export default AddTodo;
