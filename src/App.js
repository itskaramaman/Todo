import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import About from './pages/About';

import { TodoProvider } from './context/TodoContext'; 

function App() {

    return (
        <TodoProvider>
            <Router>
                <Header text="My Todo List" />
                <div className="container">
                    <Routes>
                        <Route exact path="/" element={
                        <>
                            <TodoForm />
                            <TodoList />
                        </>} />
                        <Route path="/about" element={<About />} />
                    </Routes>
                </div>
            </Router>
        </TodoProvider>
    )
}

export default App;
