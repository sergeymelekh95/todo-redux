import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from '../redux/actions/todosActions';
import { getFilter } from '../redux/selectors/filterSelector';
import { getVisibleTodos } from '../redux/selectors/todosSelectors';

const TodoList = () => {
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const selectedTodos = useSelector((state) =>
        getVisibleTodos(state, filter)
    );

    return (
        <ul>
            {selectedTodos.map((todo) => (
                <li key={todo.id}>
                    <input
                        onChange={() => dispatch(toggleTodo(todo.id))}
                        type='checkbox'
                        checked={todo.completed}
                    />
                    {todo.title}
                    <button onClick={() => dispatch(removeTodo(todo.id))}>
                        remove todo
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;
