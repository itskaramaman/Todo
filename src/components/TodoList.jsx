import { useContext } from 'react';

import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";


import TodoContext from '../context/TodoContext'; 

function TodoList() {

    const {todoData} = useContext(TodoContext);

    return (
        <div>
            {todoData.map(todo => <TodoItem key={todo.id} todo={todo} />)}
        </div>
    )
}

TodoList.propTypes = {
    todoData: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            task: PropTypes.string.isRequired
        })
    )
}

export default TodoList;
