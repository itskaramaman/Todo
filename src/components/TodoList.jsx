import PropTypes from 'prop-types';
import TodoItem from "./TodoItem";

function TodoList({todoData, handleDelete}) {
    return (
        <div>
            {todoData.map(todo => <TodoItem key={todo.id} todo={todo} handleDelete={handleDelete} />)}
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
