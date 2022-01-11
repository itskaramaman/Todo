import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { useState } from 'react';

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

import TodoData from "./shared/TodoData";
import About from './pages/About';


function App() {

    const [todoData, setTodoData] = useState(TodoData);

    const addTodo = (newTodo) => {
        setTodoData([newTodo, ...todoData]);
    }

    const deleteTodo = (id) => {
        setTodoData(todoData.filter(todo => todo.id !== id));
    }

    return (
        <Router>
            <Header text="My Todo List" />
            <div className="container">
                <Routes>
                    <Route exact path="/" element={
                    <>
                        <TodoForm newTodo={addTodo} />
                        <TodoList todoData={todoData} handleDelete={deleteTodo} />
                    </>} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    )
}

export default App;
