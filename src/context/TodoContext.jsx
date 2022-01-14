import { useState, createContext } from "react";

const TodoContext =  createContext();

export const TodoProvider = ({children}) => {
    const [todoData, setTodoData] = useState([
        {
            id: '174b3a81-755a-4417-9e80-72af58d1b6f2',
            task: 'Do constant coding'
        }
    ])

    const addTodo = (newTodo) => {
        setTodoData([newTodo, ...todoData]);
    }

    const deleteTodo = (id) => {
        setTodoData(todoData.filter(todo => todo.id !== id));
    }


    return <TodoContext.Provider value={{todoData, addTodo, deleteTodo}}>
        {children}
    </TodoContext.Provider>
}

export default TodoContext;