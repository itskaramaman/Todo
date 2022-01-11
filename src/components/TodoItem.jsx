import { FaTimes } from 'react-icons/fa';

import PropTypes from 'prop-types';
import Card from './designerComponents/Card';


function TodoItem({todo, handleDelete}) {
    return (
        <Card>
            <p style={{fontWeight: 'bolder'}}>{todo.task}</p>
            <FaTimes className='close' onClick={() => handleDelete(todo.id)} />
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
