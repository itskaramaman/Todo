import { useState } from "react";
import { v4 as uuid4 } from "uuid";

function TodoForm({newTodo}) {

    const [task, setTask] = useState("");
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [message, setMessage] = useState("");

    const updateTask = (e) => {
        setTask(e.target.value);
        if(e.target.value.trim().length > 9){
            setBtnDisabled(false);
            setMessage("")
        } else {
            setBtnDisabled(true);
            setMessage("Please add atleast 10 charaters for task");
        }
    }

    const formSubmition = (e) => {
        e.preventDefault();
        newTodo({
            id: uuid4(),
            task: task
        });

        // clear task input after submission
        setTask("");
    }

    return (
        <>
            <form onSubmit={formSubmition}>
                <div className="input-group">
                <input onChange={updateTask} style={{padding: "8px"}} type="text" text={task} placeholder="Enter task here" /> 
                </div>
                
                <button disabled={btnDisabled} style={{marginTop: "5px"}} type="submit" className="btn btn-secondary">Add Task</button>
                <p>{message}</p>
            </form>  
        </>
    )
}

export default TodoForm;
