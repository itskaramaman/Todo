import { FaTimes } from 'react-icons/fa';

import PropTypes from 'prop-types';
import Card from './designerComponents/Card';

import TodoContext from '../context/TodoContext'; 
import { useContext } from 'react';


function TodoItem({todo}) {

    const {deleteTodo} = useContext(TodoContext);

    return (
        <Card>
            <p style={{fontWeight: 'bolder'}}>{todo.task}</p>
            <FaTimes className='close' onClick={() => deleteTodo(todo.id)} />
        </Card>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.shape({
        id: PropTypes.string.isRequired,
        task: PropTypes.string.isRequired
    })
}

export default TodoItem;
