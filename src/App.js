import { useState } from 'react';

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import TodoData from "./shared/TodoData";

function App() {

    const [todoData, setTodoData] = useState(TodoData);

    const addTodo = (newTodo) => {
        setTodoData([newTodo, ...todoData]);
    }

    const deleteTodo = (id) => {
        setTodoData(todoData.filter(todo => todo.id != id));
    }

    return (
        <>
            <Header text="My Todo List" />
            <div className="container">
                <TodoForm newTodo={addTodo} />
                <TodoList todoData={todoData} handleDelete={deleteTodo} />
            </div>
        </>
    )
}

export default App;
